import React from 'react';

export type SectionId = 'home' | 'student-register' | 'tutor-register' | 'services' | 'testimonials';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  location: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StudentInquiry {
  id: number;
  date: string;
  studentName: string;
  parentName: string;
  classCategory: string;
  board: string;
  subjects: string;
  address: string;
  mobile: string;
}

export interface TutorApplication {
  id: number;
  date: string;
  fullName: string;
  qualification: string;
  experience: string;
  vehicle: string;
  areas: string;
}