
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import StudentForm from './components/StudentForm';
import TutorForm from './components/TutorForm';
import Testimonials from './components/Testimonials';
import AiAssistant from './components/AiAssistant';
import AdminDashboard from './components/AdminDashboard';
import { SectionId } from './types';
import { BookOpen, Globe, Clock, Award, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      <Navbar scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        
        {/* Services Section */}
        <div id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Our Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Lifeline?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Located in the heart of Anisabad, Patna, we bridge the gap between ambitious students and expert mentors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-gray-900">Home Tuition</h3>
                    <p className="mt-3 text-gray-500">Experienced tutors visit your home for personalized attention and safety.</p>
                </div>

                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Globe className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-gray-900">Online Learning</h3>
                    <p className="mt-3 text-gray-500">Interactive digital classes for students who prefer learning from home.</p>
                </div>

                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Clock className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-gray-900">Exam Crash Courses</h3>
                    <p className="mt-3 text-gray-500">Targeted preparation for Boards, JEE, and NEET with proven strategies.</p>
                </div>

                <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 text-center group">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Award className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-gray-900">Verified Faculty</h3>
                    <p className="mt-3 text-gray-500">Strict background checks and qualification verification for all our tutors.</p>
                </div>
            </div>
          </div>
        </div>
        
        <StudentForm />

        <TutorForm />
        
        {/* Location Badge Section */}
        <div className="bg-gray-50 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center bg-white rounded-full px-6 py-2 shadow-md border border-gray-200">
                    <MapPin className="text-red-500 w-5 h-5 mr-2" />
                    <span className="text-gray-800 font-medium italic">Lifeline serving Anisabad, Gardanibagh, Phulwari Sharif & Greater Patna</span>
                </div>
              </div>
        </div>

        <div id="testimonials">
            <Testimonials />
        </div>

        {/* Call to Action Strip */}
        <div className="bg-gradient-to-r from-brand-700 to-brand-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block italic">Struggling with studies?</span>
              <span className="block text-brand-200 text-2xl mt-2">Get a demo class from Lifeline today.</span>
            </h2>
            <div className="mt-8 flex gap-4 lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <button
                  onClick={() => scrollToSection('student-register')}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-brand-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Find a Tutor
                </button>
              </div>
                <div className="inline-flex rounded-md shadow">
                <button
                  onClick={() => scrollToSection('tutor-register')}
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-brand-800 transition-colors"
                >
                  Become a Tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AiAssistant />
      <Footer scrollToSection={scrollToSection} onAdminClick={() => setIsAdminOpen(true)} />
      
      {/* Admin Modal */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </div>
  );
};

export default App;
