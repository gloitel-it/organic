import { Home, Info, Briefcase, ShoppingBag, Newspaper, Phone, MapPin, FileText, Shield, Scale } from "lucide-react";

interface SitemapProps {
  onNavigateHome: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateBrand: () => void;
  onNavigateProjects: () => void;
  onNavigateBlog: () => void;
  onNavigateContact: () => void;
  onNavigatePrivacy: () => void;
  onNavigateTerms: () => void;
}

export default function Sitemap({ 
  onNavigateHome, 
  onNavigateAbout, 
  onNavigateServices, 
  onNavigateBrand,
  onNavigateProjects,
  onNavigateBlog,
  onNavigateContact,
  onNavigatePrivacy,
  onNavigateTerms
}: SitemapProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3a2e] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin size={20} />
            <span className="text-sm">Website Navigation</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6">Sitemap</h1>
          <p className="text-lg text-green-100">
            Find your way around our website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          
          {/* Main Pages */}
          <div className="mb-12">
            <h2 className="text-3xl mb-8 text-[#2d5f3f]">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Home */}
              <button 
                onClick={onNavigateHome}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Home className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Home</h3>
                    <p className="text-gray-600 text-sm">
                      Welcome page with hero section, features, why choose us, testimonials, and contact form
                    </p>
                  </div>
                </div>
              </button>

              {/* About */}
              <button 
                onClick={onNavigateAbout}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Info className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">About Us</h3>
                    <p className="text-gray-600 text-sm">
                      Our story, mission, vision, values, team, certifications, and farming practices
                    </p>
                  </div>
                </div>
              </button>

              {/* Services */}
              <button 
                onClick={onNavigateServices}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Briefcase className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Services</h3>
                    <p className="text-gray-600 text-sm">
                      Farm plot booking, organic farming, farm management, harvest delivery, tours, and consulting
                    </p>
                  </div>
                </div>
              </button>

              {/* Our Brand */}
              <button 
                onClick={onNavigateBrand}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <ShoppingBag className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Our Brand</h3>
                    <p className="text-gray-600 text-sm">
                      Ownership model, investment benefits, how it works, and success stories
                    </p>
                  </div>
                </div>
              </button>

              {/* Projects */}
              <button 
                onClick={onNavigateProjects}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <MapPin className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Projects</h3>
                    <p className="text-gray-600 text-sm">
                      Our ongoing and completed farming projects with filters and detailed information
                    </p>
                  </div>
                </div>
              </button>

              {/* Blog */}
              <button 
                onClick={onNavigateBlog}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Newspaper className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Blog</h3>
                    <p className="text-gray-600 text-sm">
                      Latest articles on organic farming, sustainability, health tips, and agricultural insights
                    </p>
                  </div>
                </div>
              </button>

              {/* Contact */}
              <button 
                onClick={onNavigateContact}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Phone className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Contact</h3>
                    <p className="text-gray-600 text-sm">
                      Get in touch with us - contact form, location map, phone, email, and social media
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Legal Pages */}
          <div className="mb-12">
            <h2 className="text-3xl mb-8 text-[#2d5f3f]">Legal & Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Privacy Policy */}
              <button 
                onClick={onNavigatePrivacy}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Shield className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Privacy Policy</h3>
                    <p className="text-gray-600 text-sm">
                      How we collect, use, and protect your personal information
                    </p>
                  </div>
                </div>
              </button>

              {/* Terms & Conditions */}
              <button 
                onClick={onNavigateTerms}
                className="bg-white border-2 border-gray-200 hover:border-[#4caf50] rounded-xl p-6 text-left transition-all hover:shadow-lg group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#4caf50]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4caf50] transition-colors">
                    <Scale className="text-[#4caf50] group-hover:text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-[#2d5f3f]">Terms & Conditions</h3>
                    <p className="text-gray-600 text-sm">
                      Legal terms governing your use of our website and services
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-[#4caf50]/10 to-[#2d5f3f]/10 p-8 rounded-xl">
            <h2 className="text-2xl mb-4 text-[#2d5f3f]">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Book a Farm Plot</h4>
                <p className="text-sm text-gray-600">Start your organic farming journey today</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Subscribe Newsletter</h4>
                <p className="text-sm text-gray-600">Get latest updates and farming tips</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium mb-2 text-[#2d5f3f]">Schedule Farm Tour</h4>
                <p className="text-sm text-gray-600">Visit our organic farm in person</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button 
              onClick={onNavigateContact}
              className="bg-[#4caf50] text-white px-8 py-3 rounded-full hover:bg-[#45a049] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
