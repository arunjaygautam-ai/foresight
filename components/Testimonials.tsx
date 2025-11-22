import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Kumar",
    role: "Class 10 Student",
    location: "Anisabad",
    content: "Foresight provided me with an amazing Math tutor. My concepts are clear now, and I scored 95% in my boards!"
  },
  {
    id: 2,
    name: "Mrs. Priya Singh",
    role: "Parent",
    location: "Gardanibagh",
    content: "Finding a reliable home tutor in Patna was hard until I found Foresight. Very professional and safe service."
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "IIT JEE Aspirant",
    location: "Phulwari Sharif",
    content: "The Physics faculty arranged by Foresight helped me crack my mock tests with ease. Highly recommended."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Hear from our community in Patna
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white transform transition duration-300 hover:scale-105">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                    </div>
                    <Quote className="h-8 w-8 text-brand-200 mb-2" />
                    <p className="text-lg text-gray-900 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-brand-100">
                        <span className="font-medium leading-none text-brand-700">{testimonial.name[0]}</span>
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <p>{testimonial.role}</p>
                        <span aria-hidden="true">&middot;</span>
                        <p>{testimonial.location}</p>
                      </div>
                    </div>
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