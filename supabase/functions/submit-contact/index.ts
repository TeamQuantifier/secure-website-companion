
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with API key from env
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": 
    "authorization, x-client-info, apikey, content-type",
};

// Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseKey);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  interest: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Store submission in Supabase
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([formData]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send email notification
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Quantifier <onboarding@resend.dev>",
      to: ["contact@quantifier.ai"],
      subject: `New Contact Form Submission: ${formData.interest}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Interest:</strong> ${formData.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (emailError) {
      console.error("Email error:", emailError);
      // We'll still return success since we stored the data in the database
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Form submitted successfully",
        emailStatus: emailError ? "failed" : "sent"
      }),
      { 
        status: 200, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  } catch (error) {
    console.error("Error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: error.message 
      }),
      { 
        status: 500, 
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        } 
      }
    );
  }
});
