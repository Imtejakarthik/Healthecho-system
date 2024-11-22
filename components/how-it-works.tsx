import { ClipboardCheck, Stethoscope, FileText, ShieldCheck, HeartPulse } from 'lucide-react'

const steps = [
  {
    icon: Stethoscope,
    title: 'Medical Assessment',
    description: 'Your healthcare provider securely shares your medical information with us, ensuring we have an accurate picture of your health needs.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FileText,
    title: 'Plan Customization',
    description: 'Our AI-powered system analyzes your data to create a tailored insurance plan that perfectly fits your unique health profile and budget.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: ClipboardCheck,
    title: 'Review and Approval',
    description: 'You review your personalized plan options and select the one that best suits your needs. Our experts are available to answer any questions.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: ShieldCheck,
    title: 'Coverage Begins',
    description: 'Once you approve your plan, your coverage starts immediately. Enjoy peace of mind knowing you have insurance tailored just for you.',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: HeartPulse,
    title: 'Ongoing Support',
    description: 'Our dedicated team provides continuous support, helping you navigate your coverage and ensuring you get the most out of your plan.',
    color: 'bg-yellow-100 text-yellow-600',
  },
]

export function HowItWorks() {
  return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">How Lora Works for You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get the perfect health insurance coverage with minimal effort. Here's how we make it happen:
            </p>
          </div>
          <div className="relative">
            <div className="relative z-10">
              {steps.map((step, index) => (
                  <div
                      key={step.title}
                      className="mb-12 flex items-start"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="ml-6 flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Your Journey
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>
  )
}

