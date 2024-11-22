'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Lora Health</h2>
              <p className="text-gray-300">
                Personalized health insurance for your unique needs. We're here to make healthcare accessible and affordable for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact', 'FAQ'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition duration-300">
                        {item}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>123 Health Street, Cityville</li>
                <li>State, 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@lorahealth.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex">
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-grow px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                  />
                  <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition duration-300"
                      aria-label="Subscribe to newsletter"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Lora Health. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-300"
                      aria-label={`Follow us on ${Icon.name}`}
                  >
                    <Icon size={24} />
                  </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}

