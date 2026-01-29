import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface ContactProps {
  onBookingClick?: () => void;
}

export default function Contact({ onBookingClick }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-28d86685/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
          })
        }
      );

      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        console.error('Error submitting contact form:', data);
        setSubmitStatus('error');
        
        // Reset error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const faqs = [
    {
      question: "How does the plot adoption model work?",
      answer: "We provide plot of land to be cultivated. Our expert farmers handle all the cultivation, from seeding to harvesting, using 100% organic methods. You receive a portion of your desired produce, fresh from the farm, at regular intervals."
    },
    {
      question: "Is your produce 100% organic?",
      answer: "Absolutely! We are strictly organic and 100% pesticides, herbicides, or GMO products. We avoid GMO products, and natural pest control methods. Our farm is certified organic and regularly inspected to ensure purity."
    },
    {
      question: "Can I visit the farm with my family?",
      answer: "Absolutely! We encourage plot adopters and their families to visit whenever they'd like. You can see your crops growing, learn about organic farming, and even participate in activities like harvesting. Please call us ahead for a better experience."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes! We offer weekly home deliveries of fresh produce to your doorstep, packed carefully. You can also pick up your produce at our farm or nearby collection points. We ensure the produce stays fresh and retains its nutritional value during transit."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[400px] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
              <span className="text-green-100">👋 WE'RE HERE TO HELP</span>
            </div>
            <h1 className="text-4xl md:text-6xl mb-6">
              Get in <span className="text-[#ffd54f]">Touch</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Have questions about organic farming, plot adoptions, or our products? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl text-gray-900 mb-3">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of the following channels or visit our farm to experience natural organic farming.
              </p>

              <div className="space-y-6 mb-8">
                {/* Headquarters & Farm */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Headquarters & Farm</h3>
                    <p className="text-gray-600 text-sm">Indraprastha Phase 2, Raipura</p>
                    <p className="text-gray-600 text-sm">Changurabhata, Raipur, Chhattisgarh 492013</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-sm">+1 (650) 123-4567</p>
                    <p className="text-gray-600 text-sm">Mon-Sat: 9am to 6pm</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600 text-sm">hello@ganeshadhari.com</p>
                    <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-300 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59730.68334505992!2d81.59969857832031!3d21.250382900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddd96103e26b%3A0x9de7ff4d1c4042a5!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farm Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                  >
                    <option value="">Select Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="plot">Plot Adoption</option>
                    <option value="delivery">Delivery & Orders</option>
                    <option value="visit">Farm Visit</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent resize-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#2d5f3f] text-white py-4 rounded-lg hover:bg-[#1a3d2a] transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                {submitStatus === 'success' && (
                  <p className="text-green-500 mt-2">Message sent successfully! We'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 mt-2">Failed to send message. Please try again later.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-green-100 text-[#4caf50] px-4 py-2 rounded-full mb-4 text-sm">
              COMMON INQUIRIES
            </div>
            <h2 className="text-4xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Quick answers to common inquiries about Ganeshadhari Organic Farms.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white">?</span>
                    </div>
                    <h3 className="text-lg text-gray-900">{faq.question}</h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 pl-20"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}