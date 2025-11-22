import React, { useState } from 'react';
import { Send, CheckCircle, User, BookOpen, MapPin, Phone } from 'lucide-react';

const StudentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // WEB3FORMS CONFIGURATION
    // 1. Go to https://web3forms.com/
    // 2. Enter your email to get an Access Key
    // 3. Replace 'YOUR_ACCESS_KEY_HERE' below with your actual key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
    formData.append("subject", "New Student Inquiry - Foresight Tuitions");
    formData.append("from_name", "Foresight Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        console.error("Form Error:", data);
        setError("Something went wrong. Please call us directly.");
      }
    } catch (err) {
      setError("Connection error. Please check your internet.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id="student-register" className="py-16 bg-gray-50 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-green-500">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for choosing Foresight. We have received your details via email and will contact you shortly.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="student-register" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Registration
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Find the perfect mentor for your academic journey. Fill in the details below to get started.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 px-6 py-8 sm:px-10">
             <h3 className="text-2xl font-bold text-white flex items-center">
                <BookOpen className="w-8 h-8 mr-3 opacity-80" />
                New Student Enrollment
             </h3>
             <p className="text-brand-100 mt-2">Expert tutors for all classes & subjects in Patna.</p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              {/* Personal Info Section */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2 text-brand-500" /> Personal Details
                  </h4>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="student-name" className="block text-sm font-medium text-gray-700">Student Name</label>
                        <input type="text" name="Student Name" id="student-name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500" placeholder="Enter full name" />
                    </div>
                    <div>
                        <label htmlFor="parent-name" className="block text-sm font-medium text-gray-700">Parent/Guardian Name</label>
                        <input type="text" name="Parent Name" id="parent-name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500" placeholder="Enter guardian name" />
                    </div>
                  </div>
              </div>

              {/* Academic Info Section */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-brand-500" /> Academic Requirements
                  </h4>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class/Course</label>
                        <select name="Class" id="class" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500">
                            <option>Class 1-5</option>
                            <option>Class 6-8</option>
                            <option>Class 9-10</option>
                            <option>Class 11-12 (Science)</option>
                            <option>Class 11-12 (Commerce/Arts)</option>
                            <option>Competitive Exams (JEE/NEET)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="board" className="block text-sm font-medium text-gray-700">Board</label>
                        <select name="Board" id="board" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500">
                            <option>CBSE</option>
                            <option>ICSE</option>
                            <option>Bihar Board</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">Subjects Required</label>
                        <input type="text" name="Subjects" id="subjects" placeholder="e.g., Math, Physics, Chemistry" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500" />
                    </div>
                  </div>
              </div>

              {/* Contact Info Section */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-brand-500" /> Contact & Location
                  </h4>
                  <div className="space-y-6">
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address in Patna</label>
                        <textarea name="Address" id="address" rows={2} required placeholder="e.g., Near Shiv Mandir, Anisabad" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <div className="mt-1 relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="tel" name="Mobile" id="phone" required pattern="[0-9]{10}" className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-500 focus:border-brand-500" placeholder="9934985213" />
                        </div>
                    </div>
                  </div>
              </div>

              {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                      {error}
                  </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-70 transition-all duration-200 hover:scale-[1.02]"
                >
                  {isLoading ? (
                      <span className="flex items-center">
                          Sending Inquiry...
                      </span>
                  ) : (
                      <span className="flex items-center">
                          Request Tutor Now <Send className="ml-2 h-5 w-5" />
                      </span>
                  )}
                </button>
                <p className="mt-4 text-center text-sm text-gray-500">
                    By registering, you agree to be contacted by Foresight Tuition Bureau.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentForm;