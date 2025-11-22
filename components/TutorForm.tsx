import React, { useState } from 'react';
import { Briefcase, CheckCircle, Upload, GraduationCap, Award, MapPin } from 'lucide-react';

const TutorForm: React.FC = () => {
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
    formData.append("subject", "New Tutor Application - Foresight Tuitions");
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
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Connection error. Please check your internet.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id="tutor-register" className="py-16 bg-gray-50 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-indigo-500">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 mb-6">
            <CheckCircle className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Sent!</h2>
          <p className="text-gray-600 mb-8">
            Welcome to the Foresight family. We have received your application via email and will review your profile soon.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
          >
            Register Another Tutor
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="tutor-register" className="py-16 bg-indigo-50/50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join as a Tutor
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Empower students and grow your career. Join Patna's most trusted network of educators.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-8 sm:px-10">
             <h3 className="text-2xl font-bold text-white flex items-center">
                <Briefcase className="w-8 h-8 mr-3 opacity-80" />
                Tutor Application
             </h3>
             <p className="text-indigo-100 mt-2">Share your knowledge and earn with dignity.</p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-indigo-600" /> Professional Details
                  </h4>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="Full Name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                        <input type="text" name="Qualification" id="qualification" required placeholder="e.g., B.Tech, M.Sc" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Teaching Experience</label>
                        <select name="Experience" id="experience" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            <option>Fresher</option>
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">Own Vehicle?</label>
                        <select name="Vehicle" id="vehicle" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                  </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-indigo-600" /> Preferences & CV
                  </h4>
                  <div className="space-y-6">
                    <div>
                        <label htmlFor="preferred-areas" className="block text-sm font-medium text-gray-700">Preferred Areas in Patna</label>
                        <input type="text" name="Preferred Areas" id="preferred-areas" placeholder="e.g., Anisabad, Phulwari, Gardanibagh" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Resume (Optional)</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-indigo-400 transition-colors cursor-pointer bg-white">
                            <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600 justify-center">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="attachment" type="file" className="sr-only" accept="image/*,.pdf,.doc,.docx" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PDF, DOC up to 5MB</p>
                            </div>
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
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 transition-all duration-200 hover:scale-[1.02]"
                >
                  {isLoading ? 'Sending Application...' : (
                      <span className="flex items-center">
                          Submit Application <Award className="ml-2 h-5 w-5" />
                      </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorForm;