'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    image: '/placeholder.svg?height=80&width=80',
    quote: "Lora's personalized approach to health insurance has given me peace of mind. Their partnership with my hospital made the whole process seamless and stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: '/placeholder.svg?height=80&width=80',
    quote: "I was skeptical at first, but Lora's AI-driven plan customization truly delivered a perfect fit for my health needs and budget. The customer support is top-notch too!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Teacher',
    image: '/placeholder.svg?height=80&width=80',
    quote: "As someone with a pre-existing condition, finding the right insurance was always a challenge. Lora made it easy and affordable. I couldn't be happier with my coverage.",
    rating: 4,
  },
]

export function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={80}
                      height={80}
                      className="rounded-full border-4 border-blue-100 shadow-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${
                                i < testimonials[currentTestimonial].rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl font-light text-gray-900 mb-6 leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </blockquote>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                  onClick={prevTestimonial}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                  onClick={nextTestimonial}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

