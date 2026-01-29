import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Sprout, Users, TrendingUp, Shield, CheckCircle, Leaf, ChevronDown } from "lucide-react";
import { useState } from "react";

interface OurBrandProps {
  onNavigateHome: () => void;
}

export default function OurBrand({ onNavigateHome }: OurBrandProps) {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">🌱 Organic Ownership</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Ownership Without <span className="text-[#ffd54f]">Effort</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Be a proud farm owner without the hassle. We manage everything while you enjoy fresh, organic produce delivered to your doorstep.
          </p>
          <button 
            onClick={onNavigateHome}
            className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors"
          >
            Explore Plans
          </button>
          <p className="text-green-200 text-sm mt-4">💳 Trusted by 1000+ families</p>
        </div>
      </section>

      {/* Reconnecting to Roots */}
      <section className="py-16 px-6 md:px-16 bg-green-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
              alt="Farmers in organic field"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-6">
              Reconnecting You to the Roots
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In today's fast-paced world, we've lost touch with where our food comes from. 
              Ganeshadhari brings you back to nature's way - offering you a chance to own a piece 
              of farmland and grow your own organic produce, without any farming experience required.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our expert team handles everything from soil preparation to harvesting, while you 
              enjoy the peace of mind knowing exactly where your food comes from. It's farming 
              made simple, sustainable, and stress-free.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#4caf50]" size={20} />
                <span className="text-gray-700">100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#4caf50]" size={20} />
                <span className="text-gray-700">Hassle-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Transparency */}
      <section className="py-16 px-6 md:px-16 bg-[#2d5f3f] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Complete <span className="text-[#ffd54f]">Transparency</span>
            </h2>
            <p className="text-green-100 mb-8 leading-relaxed">
              Track your plot's progress every step of the way. From soil preparation to harvest, 
              we keep you informed with regular updates, photos, and detailed reports. Visit your 
              plot anytime and see your organic produce growing naturally.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Real-time Updates</h4>
                  <p className="text-green-100 text-sm">
                    Weekly photos and progress reports delivered to your inbox
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-[#4caf50] rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="text-white" size={16} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Visit Anytime</h4>
                  <p className="text-green-100 text-sm">
                    Schedule visits to your plot and connect with nature
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1767416171650-4bff1da861fe?w=800&q=80"
              alt="Greenhouse farming"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Adopt a Plot */}
      <section className="py-16 px-6 md:px-16 bg-[#fffbf0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#2d5f3f] text-center mb-4">
            Why Adopt a Plot?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of families who have discovered a healthier, more sustainable way of living
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-[#4caf50]" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Land Appreciation</h3>
              <p className="text-gray-600 text-sm">
                Your investment grows as farmland value appreciates over time, offering long-term financial benefits.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Multiple Incomes</h3>
              <p className="text-gray-600 text-sm">
                Generate income from organic produce sales while enjoying fresh harvest for your family.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-orange-500" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Secure Incomes</h3>
              <p className="text-gray-600 text-sm">
                Stable returns backed by agricultural produce and growing demand for organic food.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Sprout className="text-red-500" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Healthy Living</h3>
              <p className="text-gray-600 text-sm">
                Access to fresh, chemical-free organic produce ensures better health for your family.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600 text-sm">
                Join a community of like-minded individuals passionate about sustainable living.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-[#4caf50]" size={24} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Environmental Impact</h3>
              <p className="text-gray-600 text-sm">
                Contribute to environmental conservation and sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#2d5f3f] text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleQuestion(0)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-left text-gray-900">Are you a farming company?</span>
                <ChevronDown
                  className={`text-[#4caf50] transition-transform ${
                    openQuestion === 0 ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openQuestion === 0 && (
                <div className="px-6 py-4 bg-green-50">
                  <p className="text-gray-600">
                    We're more than just a farming company. Ganeshadhari is a platform that connects 
                    urban families with organic farmland, making sustainable agriculture accessible to everyone. 
                    We manage every aspect of farming so you can enjoy the benefits without the hard work.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleQuestion(1)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-left text-gray-900">What is the minimum plot size?</span>
                <ChevronDown
                  className={`text-[#4caf50] transition-transform ${
                    openQuestion === 1 ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openQuestion === 1 && (
                <div className="px-6 py-4 bg-green-50">
                  <p className="text-gray-600">
                    Our minimum plot size is 1000 square feet, perfect for a small family. We also 
                    offer medium (2500 sq ft) and large (5000 sq ft) plots, or we can customize a 
                    size based on your specific requirements.
                  </p>
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleQuestion(2)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-left text-gray-900">How do you ensure plot success?</span>
                <ChevronDown
                  className={`text-[#4caf50] transition-transform ${
                    openQuestion === 2 ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openQuestion === 2 && (
                <div className="px-6 py-4 bg-green-50">
                  <p className="text-gray-600">
                    Our experienced team of organic farmers uses proven sustainable farming techniques. 
                    We conduct regular soil testing, use natural pest control, and follow seasonal planting 
                    schedules. Regular monitoring and care ensure optimal yield and quality produce.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d5f3f] text-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Own Your Piece of Earth?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Experience the joy of farm ownership today. Our experts will guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onNavigateHome}
              className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors"
            >
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2d5f3f] transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}