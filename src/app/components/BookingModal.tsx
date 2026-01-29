import { X, CheckCircle, Users, Truck, Leaf, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plotSize: "",
    location: "",
    vegetables: false,
    fruits: false,
    herbs: false,
    requirements: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Gather selected crops
      const selectedCrops = [];
      if (formData.vegetables) selectedCrops.push('vegetables');
      if (formData.fruits) selectedCrops.push('fruits');
      if (formData.herbs) selectedCrops.push('herbs');
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-28d86685/bookings`,
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
            address: formData.location,
            plotSize: formData.plotSize,
            duration: '12 months', // default duration
            crops: selectedCrops,
            additionalRequirements: formData.requirements
          })
        }
      );

      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            plotSize: "",
            location: "",
            vegetables: false,
            fruits: false,
            herbs: false,
            requirements: ""
          });
        }, 3000);
      } else {
        console.error('Error submitting booking:', data);
        setSubmitError(data.error || 'Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-3xl max-w-7xl w-full my-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {!isSubmitted ? (
              <>
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gray-700 transition-colors bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
                >
                  <X size={24} />
                </button>

                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left side - Hero & Benefits */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white p-8 lg:p-12 rounded-l-3xl">
                    <div className="space-y-8">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <Leaf size={16} />
                            <span className="text-sm">100% Organic Farming</span>
                          </div>
                          <h2 className="text-4xl mb-3">Book Your Farm Plot</h2>
                          <p className="text-green-100">Start your organic farming journey with Ganeshadhari</p>
                        </motion.div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-5">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center shadow-lg">
                            <CheckCircle className="text-white" size={22} />
                          </div>
                          <div>
                            <h3 className="text-lg mb-1">Guaranteed Organic</h3>
                            <p className="text-green-100 text-sm">100% chemical-free farming with certified organic practices</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center shadow-lg">
                            <Users className="text-white" size={22} />
                          </div>
                          <div>
                            <h3 className="text-lg mb-1">Expert Guidance</h3>
                            <p className="text-green-100 text-sm">Professional support from experienced organic farmers</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-[#4caf50] rounded-xl flex items-center justify-center shadow-lg">
                            <Truck className="text-white" size={22} />
                          </div>
                          <div>
                            <h3 className="text-lg mb-1">Doorstep Delivery</h3>
                            <p className="text-green-100 text-sm">Fresh harvest delivered directly to your home</p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
                      >
                        <div>
                          <div className="text-3xl mb-1">500+</div>
                          <div className="text-green-100 text-sm">Happy Farmers</div>
                        </div>
                        <div>
                          <div className="text-3xl mb-1">50+</div>
                          <div className="text-green-100 text-sm">Acre Land</div>
                        </div>
                        <div>
                          <div className="text-3xl mb-1">100%</div>
                          <div className="text-green-100 text-sm">Organic</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right side - Form */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-2">Personal Information</h3>
                        <p className="text-gray-600 text-sm">Fill in your details to get started</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="text-xl text-gray-900 mb-4">Plot Configuration</h3>
                        
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm text-gray-700 mb-2">
                              <MapPin className="inline w-4 h-4 mr-1" />
                              Plot Size <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="plotSize"
                              value={formData.plotSize}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            >
                              <option value="">Select size</option>
                              <option value="small">Small (1000 sq ft)</option>
                              <option value="medium">Medium (2500 sq ft)</option>
                              <option value="large">Large (5000 sq ft)</option>
                              <option value="custom">Custom Size</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm text-gray-700 mb-2">
                              <Calendar className="inline w-4 h-4 mr-1" />
                              Preferred Location
                            </label>
                            <select
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent transition-all"
                            >
                              <option value="">Select location</option>
                              <option value="north">North Zone</option>
                              <option value="south">South Zone</option>
                              <option value="east">East Zone</option>
                              <option value="west">West Zone</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-3">What would you like to grow?</label>
                        <div className="grid sm:grid-cols-3 gap-3">
                          <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#4caf50] transition-all">
                            <input
                              type="checkbox"
                              name="vegetables"
                              checked={formData.vegetables}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#4caf50] border-gray-300 rounded focus:ring-[#4caf50]"
                            />
                            <span className="text-sm text-gray-700">🥬 Organic Vegetables</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#4caf50] transition-all">
                            <input
                              type="checkbox"
                              name="fruits"
                              checked={formData.fruits}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#4caf50] border-gray-300 rounded focus:ring-[#4caf50]"
                            />
                            <span className="text-sm text-gray-700">🍓 Fruits & Berries</span>
                          </label>
                          <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#4caf50] transition-all">
                            <input
                              type="checkbox"
                              name="herbs"
                              checked={formData.herbs}
                              onChange={handleChange}
                              className="w-5 h-5 text-[#4caf50] border-gray-300 rounded focus:ring-[#4caf50]"
                            />
                            <span className="text-sm text-gray-700">🌿 Herbs & Spices</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-2">Additional Requirements</label>
                        <textarea
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:border-transparent resize-none transition-all"
                          placeholder="Tell us more about your requirements, special preferences, or questions..."
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#4caf50] to-[#45a049] text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                      </motion.button>

                      {submitError && (
                        <p className="text-red-500 text-sm text-center">{submitError}</p>
                      )}

                      <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to our terms and conditions
                      </p>
                    </motion.form>
                  </div>
                </div>
              </>
            ) : (
              // Success State
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="text-[#4caf50]" size={48} />
                </motion.div>
                <h2 className="text-3xl text-gray-900 mb-3">Booking Request Submitted!</h2>
                <p className="text-gray-600 max-w-md mb-8">
                  Thank you for your interest in Ganeshadhari organic farming. Our team will contact you within 24 hours to discuss your plot details.
                </p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-8 py-3 bg-[#4caf50] text-white rounded-xl hover:bg-[#45a049] transition-colors"
                  >
                    Done
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}