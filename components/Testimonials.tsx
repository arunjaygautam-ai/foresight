
import React from 'react';
import { Star, Quote, CheckCircle2, UserCheck } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Shankar Prasad",
    role: "Parent of Class 12 Student",
    location: "Anisabad, Patna",
    content: "Lifeline Home Tuition is undoubtedly the best tuition bureau in Anisabad. Their Physics tutor helped my son secure 92% in CBSE Boards. Highly professional service!"
  },
  {
    id: 2,
    name: "Dr. Ananya Singh",
    role: "Parent",
    location: "Phulwari Sharif, Patna",
    content: "We were looking for a reliable home tutor in Patna for NEET preparation. Lifeline provided an excellent Biology faculty who is very punctual and knowledgeable."
  },
  {
    id: 3,
    name: "Md. Sameer Alam",
    role: "JEE Mains Aspirant",
    location: "Gardanibagh, Patna",
    content: "The Math and Chemistry home tutors from Lifeline Bureau are top-notch. They focus on concepts and problem-solving which helped me immensely in my mock tests."
  },
  {
    id: 4,
    name: "Sunita Devi",
    role: "Parent of Class 8 Student",
    location: "Bampura, Anisabad",
    content: "Best home tuition service near Anisabad. The English and Social Science tutor is very patient with kids. My daughter's grades have improved significantly."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2">Verified Reviews</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">What Patna Speaks About Lifeline</h3>
            <p className="mt-4 text-lg text-gray-600">
              Trusted by hundreds of families in Anisabad and across Patna for quality home and online education.
            </p>
            
            {/* Rating Summary Card */}
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg inline-block border border-brand-100">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="text-4xl font-black text-gray-900">4.9</span>
                    <div className="flex text-yellow-400">
                        <Star className="w-6 h-6 fill-current" />
                        <Star className="w-6 h-6 fill-current" />
                        <Star className="w-6 h-6 fill-current" />
                        <Star className="w-6 h-6 fill-current" />
                        <Star className="w-6 h-6 fill-current" />
                    </div>
                </div>
                <p className="text-sm text-gray-500 font-medium flex items-center justify-center lg:justify-start">
                    <UserCheck className="w-4 h-4 mr-1 text-green-500" /> Based on 120+ Google Reviews
                </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group relative"
                itemScope itemType="https://schema.org/Review"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-50 group-hover:text-brand-100 transition-colors" />
                <div className="flex mb-4 text-yellow-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content="5" />
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                
                <div itemProp="reviewBody">
                    <p className="text-gray-700 leading-relaxed mb-6 font-medium italic">
                        "{testimonial.content}"
                    </p>
                </div>

                <div className="flex items-center border-t border-gray-50 pt-4">
                  <div className="h-12 w-12 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-gray-900" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{testimonial.name}</span>
                    </h4>
                    <p className="text-xs text-brand-600 font-bold flex items-center uppercase tracking-tighter">
                        {testimonial.location} <CheckCircle2 className="w-3 h-3 ml-1" />
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
