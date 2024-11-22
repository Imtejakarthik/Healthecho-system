"use client"
import { useState } from 'react'
import { Zap, Shield, Clock, HeartPulse, Coins, Users } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Quick Coverage',
        description: 'Get insured rapidly with our streamlined process.',
        color: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
    },
    {
        icon: Shield,
        title: 'Comprehensive Protection',
        description: 'Enjoy wide-ranging coverage for your health needs.',
        color: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
    },
    {
        icon: Clock,
        title: '24/7 Support',
        description: 'Access our support team anytime, day or night.',
        color: 'bg-green-100 text-green-600 hover:bg-green-200',
    },
    {
        icon: HeartPulse,
        title: 'Personalized Plans',
        description: 'Tailored insurance based on your unique health profile.',
        color: 'bg-red-100 text-red-600 hover:bg-red-200',
    },
    {
        icon: Coins,
        title: 'Affordable Premiums',
        description: 'Competitive rates to suit your budget.',
        color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
    },
    {
        icon: Users,
        title: 'Family Coverage',
        description: 'Protect your loved ones with family-oriented plans.',
        color: 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200',
    },
]

export function Features() {
    const [activeFeature, setActiveFeature] = useState<number | null>(null)

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Lora?</h2>
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Experience the future of health insurance with our innovative features designed to provide you with the best coverage and service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
                                activeFeature === index ? 'scale-105 shadow-xl' : 'hover:scale-102'
                            }`}
                            onMouseEnter={() => setActiveFeature(index)}
                            onMouseLeave={() => setActiveFeature(null)}
                        >
                            <div className="p-6">
                                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors duration-300 ${feature.color}`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                            <div className={`px-6 py-4 bg-gray-50 transition-all duration-300 ${
                                activeFeature === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                            }`}>
                                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

