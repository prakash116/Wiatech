import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

function Testimonial() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')]">
      <div className="bg-black/50 min-h-screen py-8 md:py-12 flex flex-col justify-center items-center">
        <div className="text-center px-4 mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl lg:text-2xl text-blue-600 font-semibold max-w-3xl mx-auto leading-relaxed mb-4">
            Client Testimonials
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Why People Say About Our <br className="hidden md:block" />
            Business Services
          </h1>
        </div>
        <div className="w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;