
import { GoogleGenAI } from "@google/genai";

export const getStudyAdvice = async (query: string): Promise<string> => {
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;

  if (!apiKey) {
    return "AI Service is currently offline for maintenance. Please use the WhatsApp button below or call us at +91 99349 85213.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are an academic counselor for "Lifeline Tuition Bureau" located in Anisabad, Patna, Bihar. 
        Your goal is to encourage students and parents to register with Lifeline Tuition Bureau.
        
        Key details about Lifeline Tuition Bureau:
        - Location: Anisabad, Patna (Near Shiv Mandir, Landmark Tower).
        - Services: Home Tuition, Online Tuition, Crash Courses for Boards (CBSE/ICSE/Bihar Board), Competitive Exam Prep (JEE/NEET).
        - Tone: Professional, encouraging, and locally relevant to Patna residents.
        - Call to Action: Always suggest they fill out the registration form on the website or visit the office.

        Keep answers short (under 100 words) and helpful.`,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is busy helping other parents. Please reach out to us on WhatsApp!";
  }
};
