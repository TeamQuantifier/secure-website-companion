
import { useState, useEffect } from 'react';

export const useProcessedImage = (originalSrc: string): string | null => {
  const [processedImageSrc, setProcessedImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const extractImageWithoutBackground = async () => {
      try {
        // Create an image element to load the original image
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
          // Create a canvas to process the image
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          
          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0);
          
          // Get the image data
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
          
          // Remove white background
          for (let i = 0; i < data.length; i += 4) {
            // Check if pixel is white or close to white
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            
            // If pixel is white or very light (using threshold), make it transparent
            if (r > 240 && g > 240 && b > 240) {
              data[i + 3] = 0; // Set alpha channel to 0 (transparent)
            }
          }
          
          // Put the processed image data back on canvas
          ctx.putImageData(imageData, 0, 0);
          
          // Convert canvas to data URL
          const processedSrc = canvas.toDataURL('image/png');
          setProcessedImageSrc(processedSrc);
        };
        
        img.src = originalSrc;
      } catch (error) {
        console.error('Error processing image:', error);
      }
    };
    
    if (originalSrc) {
      extractImageWithoutBackground();
    }
  }, [originalSrc]);
  
  return processedImageSrc;
};
