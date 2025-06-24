'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import { FaBolt, FaLightbulb, FaMobileAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

export default function LandingPage() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (!formRef.current) return;
      
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setMessage('Message sent successfully ✅');
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      setMessage('Message not sent (service error) ❌');
      console.error('Email sending error:', error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer min-w-[3rem]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image 
              src="/icon.png" 
              alt="PowerConnect Logo" 
              width={48}
              height={48}
              className="rounded-full object-contain h-12 w-12"
              priority
            />
            <span className="text-2xl font-bold text-green-600">PowerConnect</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-medium hover:text-green-600 transition">Features</a>
            <a href="#how-it-works" className="font-medium hover:text-green-600 transition">How It Works</a>
            <a href="#solutions" className="font-medium hover:text-green-600 transition">Solutions</a>
            <a href="#contact" className="font-medium hover:text-green-600 transition">Contact</a>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <button 
              onClick={() => router.push('/login')}
              className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition"
            >
              Login
            </button>
            <button 
              onClick={() => router.push('/signup')}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-white py-20">
      <div className="container mx-auto px-6">
  <div className="flex justify-center items-center gap-12 py-12">
    {/* Text Content - Now with better spacing and emphasis */}
    <div className="w-1/2 space-y-6">
      <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
        ⚡ Powering Rwandas Future
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Smart Energy
        </span> 
        <br />
        At Your Fingertips
      </h1>
      <p className="text-xl text-gray-600 md:pr-8">
        Revolutionizing electricity access with instant purchases, emergency power loans, 
        and seamless mobile payments - all designed for modern Rwandan households.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={() => router.push('/signup')}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <FaBolt /> Get Started Now
        </button>
        <button
          onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-all font-semibold"
        >
          Learn How It Works
        </button>
      </div>
      
      <div className="flex items-center gap-4 pt-6">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-10 h-10 rounded-full bg-green-100 border-2 border-white"></div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">10,000+</span> satisfied customers across Rwanda
        </div>
      </div>
    </div>

   
  </div>
</div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm">Service Availability</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm">Uptime Reliability</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2">5min</div>
              <div className="text-sm">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Power Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for reliability and convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBolt className="text-green-600 text-3xl mb-4" />,
                title: "Instant Tokens",
                description: "Get electricity tokens delivered instantly to your meter"
              },
              {
                icon: <FaLightbulb className="text-green-600 text-3xl mb-4" />,
                title: "Power Loans",
                description: "Borrow emergency units when you need them most"
              },
              {
                icon: <MdPayment className="text-green-600 text-3xl mb-4" />,
                title: "Flexible Payments",
                description: "Pay with mobile money, credit, or bank transfer"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition hover:transform hover:-translate-y-2 border border-gray-200">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get power in minutes with our easy system
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Register",
                description: "Create your account in under 2 minutes",
                icon: <FaMobileAlt className="text-green-600 text-2xl" />
              },
              {
                step: "2",
                title: "Top Up",
                description: "Add funds via mobile money or bank",
                icon: <MdPayment className="text-green-600 text-2xl" />
              },
              {
                step: "3",
                title: "Get Power",
                description: "Purchase or borrow electricity instantly",
                icon: <FaLightbulb className="text-green-600 text-2xl" />
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">{step.step}</span>
                </div>
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Solutions */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tailored Energy Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the option that fits your power needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaBolt className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Standard Purchase</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Buy electricity at competitive rates with instant delivery to your meter.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No interest charges</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Usage analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bulk purchase discounts</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaLightbulb className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold">Emergency Power</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Temporary power loans with flexible repayment options when you are in need.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Instant approval</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>7-day repayment window</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>Build credit for larger loans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by households across Rwanda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "PowerConnect saved me during an emergency. Got power when I needed it most!",
                name: "Marie K.",
                location: "Kigali"
              },
              {
                quote: "The easiest way to buy electricity. No more queues at payment centers.",
                name: "Jean P.",
                location: "Musanze"
              },
              {
                quote: "Their emergency loan feature helped my family through a tough month.",
                name: "Claude M.",
                location: "Rubavu"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="font-semibold text-green-600">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-400 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Rwandans enjoying seamless electricity access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
              onClick={() => router.push('/signup')}
            >
              Create Free Account
            </button>
            <button 
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-green-700 transition font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Our support team is available 24/7 to assist with any questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-600 mr-4" />
                  <span>+250 788 123 456</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-green-600 mr-4" />
                  <span>support@powerconnect.rw</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-green-600 mr-4" />
                  <span>KG 123 St, Kigali, Rwanda</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-2">
                  For urgent power issues outside business hours:
                </p>
                <div className="flex items-center text-red-600">
                  <FaPhoneAlt className="mr-4" />
                  <span>+250 788 654 321</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
                <div>
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Your Name" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Your Email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <select
                  id="subject"
    name="subject"
    title="Select inquiry subject"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    required
    defaultValue=""

                  >
                    <option value="">Select Subject</option>
                    <option value="Account Help">Account Help</option>
                    <option value="Payment Issue">Payment Issue</option>
                    <option value="Emergency Support">Emergency Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    name="user_message"
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                {message && (
                  <div className={`py-2 px-4 rounded ${
                    message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {message}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition w-full shadow hover:shadow-md ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How quickly will I receive my electricity tokens?",
                answer: "Tokens are delivered instantly to your meter number after payment confirmation."
              },
              {
                question: "What are the requirements for emergency power loans?",
                answer: "You need to have been a customer for at least 3 months with good repayment history."
              },
              {
                question: "Which payment methods do you accept?",
                answer: "We accept MTN Mobile Money, Airtel Money, Visa/Mastercard, and bank transfers."
              },
              {
                question: "Is there a mobile app available?",
                answer: "Yes, our mobile app is available on both Android and iOS platforms."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-green-600 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/icon.png" 
                  alt="PowerConnect Logo" 
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <span className="text-xl font-bold">PowerConnect</span>
              </div>
              <p className="text-gray-400">
                Rwanda is leading digital electricity platform, powering homes since 2022.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className=" flex space-x-8">
                <li><a href="#features" className="text-gray-400 hover:text-green-300 transition">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-green-300 transition">How It Works</a></li>
                <li><a href="#solutions" className="text-gray-400 hover:text-green-300 transition">Solutions</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-300 transition">Contact</a></li>
              </ul>
            </div>
            
          
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} PowerConnect. All rights reserved. REG No. 123456789
          </div>
        </div>
      </footer>
    </div>
  );
}