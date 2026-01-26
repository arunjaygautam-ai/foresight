
import React from 'react';
import { BookOpen, Users } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (section: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div id="home" className="relative bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Unlock Your Future with</span>{' '}
                <span className="block text-brand-600 xl:inline">Lifeline Tuition Bureau</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The leading choice for home tuition in Anisabad, Patna. We provide top-tier, verified home and online tutors for students seeking excellence in academics and competitive exams.
              </p>
              
              <div className="mt-8 sm:mt-12">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-md mx-auto lg:mx-0">
                  <button
                    onClick={() => scrollToSection('student-register')}
                    className="group relative flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-xl md:px-10 transition-all transform hover:-translate-y-1 shadow-lg"
                  >
                    <BookOpen className="w-6 h-6 mr-2 group-hover:animate-bounce" />
                    Request a Tutor
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-brand-200 rounded-xl -z-10"></div>
                  </button>

                  <button
                    onClick={() => scrollToSection('tutor-register')}
                    className="group relative flex items-center justify-center px-8 py-4 border-2 border-brand-600 text-lg font-medium rounded-xl text-brand-600 bg-white hover:bg-brand-50 md:py-4 md:text-xl md:px-10 transition-all transform hover:-translate-y-1 shadow-md"
                  >
                    <Users className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                    Apply as Tutor
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 rounded-xl -z-10"></div>
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-400 font-medium">
                  Verified Tutors • Result Oriented • Serving Anisabad & Phulwari
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Home tuition session in Patna"
        />
        <div className="absolute inset-0 bg-brand-900 opacity-10 mix-blend-multiply lg:hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
