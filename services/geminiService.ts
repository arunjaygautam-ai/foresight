import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const getStudyAdvice = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "AI Service is currently unavailable. Please contact us directly.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are an academic counselor for "Foresight Tuition Bureau" located in Anisabad, Patna, Bihar. 
        Your goal is to encourage students and parents to register with Foresight.
        
        Key details about Foresight:
        - Location: Anisabad, Patna.
        - Services: Home Tuition, Online Tuition, Crash Courses for Boards (CBSE/ICSE/Bihar Board), Competitive Exam Prep (JEE/NEET).
        - Tone: Professional, encouraging, and locally relevant to Patna residents.
        - Call to Action: Always suggest they fill out the registration form on the website or visit the office.

        Keep answers short (under 100 words) and helpful.`,
      }
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try again or call us directly.";
  }
};