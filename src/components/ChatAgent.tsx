
import { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Mock responses for the demo - in a real app, this would come from an API
const mockResponses = [
  "Based on your industry and location, you need to comply with GDPR, CCPA, and industry-specific regulations. I recommend starting with a data mapping exercise to understand what personal data you're collecting.",
  "For GDPR compliance, you'll need to implement: 1) Privacy notices, 2) Data subject access request procedures, 3) Lawful basis for processing, 4) Data protection impact assessments, and 5) Security measures. Would you like me to elaborate on any of these?",
  "Looking at your business model, you should prioritize implementing consent management for customer data and establishing a data retention policy that aligns with regulatory requirements.",
  "I've analyzed your current privacy policy and noticed several areas that need updating to meet current regulations. The main issues are around data subject rights, breach notification procedures, and transfer mechanisms for international data flows."
];

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Delayed automatic opening of the chat agent for demo purposes
    const timer = setTimeout(() => {
      setIsOpen(true);
      
      // Add initial bot message
      if (!isInitialized) {
        const initialMessage: Message = {
          id: Date.now().toString(),
          text: "Hello! I'm your AI compliance assistant. How can I help you today? You can ask me about regulatory requirements, compliance best practices, or specific questions about GDPR, HIPAA, SOC 2, and more.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages([initialMessage]);
        setIsInitialized(true);
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [isInitialized]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);
    
    // Simulate API response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  if (!isOpen) return null;
  
  return (
    <div className={`fixed z-50 ${isMinimized ? 'bottom-6 right-6' : 'bottom-6 right-6 sm:bottom-8 sm:right-8'}`}>
      {isMinimized ? (
        <button 
          onClick={() => setIsMinimized(false)}
          className="bg-compliance-600 hover:bg-compliance-700 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-elevated transition-all hover:scale-105"
        >
          <Bot size={24} />
        </button>
      ) : (
        <div className="flex flex-col bg-white rounded-xl shadow-elevated border border-slate-200 max-w-md w-full sm:w-[400px] max-h-[600px] animate-slide-in-right transition-smooth">
          <div className="bg-compliance-600 text-white px-4 py-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <h3 className="font-medium">Compliance Assistant</h3>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-compliance-500 rounded-md transition-colors"
              >
                <ChevronDown size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-compliance-500 rounded-md transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === 'user' 
                        ? 'bg-compliance-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-xl bg-white text-slate-700 rounded-tl-none border border-slate-200">
                    <Loader2 className="h-5 w-5 animate-spin text-compliance-600" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200">
            <div className="flex items-end gap-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about compliance requirements..."
                className="resize-none min-h-[44px] max-h-32"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !message.trim()} 
                size="icon"
                className="bg-compliance-600 hover:bg-compliance-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
