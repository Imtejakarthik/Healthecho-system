import Link from 'next/link'
import Image from "next/image"
import { ArrowRight, Check } from 'lucide-react'

const benefits = [
    "Tailored insurance plans",
    "Partnership with leading hospitals",
    "24/7 customer support",
    "Easy claim process"
]

export function Hero() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Personalized Health Insurance for Your{' '}
                            <span className="text-blue-600">Unique Needs</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Lora partners with top-tier hospitals to offer tailored insurance plans based on your specific medical condition. Experience healthcare coverage that truly understands you.
                        </p>
                        <div className="mb-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center mb-3">
                                    <Check className="text-green-500 mr-2" />
                                    <span className="text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/auth/signup"
                                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold
                  hover:bg-blue-700 transition duration-300 flex items-center
                  transform hover:scale-105 hover:shadow-lg"
                            >
                                Get a Quote
                                <ArrowRight className="ml-2" />
                            </Link>
                            <Link
                                href="/auth/login"
                                className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline"
                            >
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                        <div className="relative z-10">
                            <Image
                                src="/HeroImage.svg"
                                alt="Personalized Health Insurance"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

