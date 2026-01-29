import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { 
  Headphones, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Leaf,
  TrendingUp,
  Shield,
  Heart,
  Phone,
  Mail,
  Star
} from "lucide-react";
import heroImage from "figma:asset/b5a9ba78f499a90f3e6f4c0bd82b4dde8b0af9f6.png";

interface NewHomeProps {
  onBookingClick: () => void;
  onNavigateAbout?: () => void;
  onNavigateServices?: () => void;
}

export default function NewHome({ onBookingClick, onNavigateAbout, onNavigateServices }: NewHomeProps) {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">🌿 100% Organic Certified</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Organic Farming & <br />
            <span className="text-[#ffd54f]">Agriculture</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Experience the future of sustainable farming. Book your organic farm plot today and enjoy fresh, healthy produce delivered right to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={onBookingClick}
              className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors inline-flex items-center gap-2"
            >
              Book Your Farm Plot
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleScrollToAbout}
              className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-8 py-3 rounded-full hover:bg-opacity-30 transition-colors"
            >
              Learn More
            </button>
          </div>
          <p className="text-green-200 text-sm mt-6">🌱 Join 1000+ happy farmers</p>
        </div>
      </section>

      {/* Services Icons Section */}
      <section className="bg-white py-8 px-6 md:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Headphones className="text-orange-500" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-900">24/7 Support</h3>
              <p className="text-xs text-gray-500">Always Here</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="text-blue-500" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-900">Qualified Staff</h3>
              <p className="text-xs text-gray-500">Expert Team</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="text-[#4caf50]" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-900">Organic Products</h3>
              <p className="text-xs text-gray-500">100% Natural</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="text-purple-500" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-900">1000+ Families</h3>
              <p className="text-xs text-gray-500">Trust Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Farming Solutions */}
      <section id="about" className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-4">
              Holistic Farming Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive organic farming services tailored to meet all your agricultural needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1601408648796-349272138e57?w=600&q=80"
                  alt="Soil Management"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">Soil Management</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert soil testing and enrichment using organic compost and natural amendments for optimal growth.
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725369865403-82ca4f17bb5b?w=600&q=80"
                  alt="Crop Cultivation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">Crop Cultivation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Seasonal crop planning and cultivation using sustainable practices for maximum yield and quality.
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?w=600&q=80"
                  alt="Harvest & Delivery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">Harvest & Delivery</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fresh produce harvested at peak ripeness and delivered directly to your doorstep.
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farming Made Easy */}
      <section className="py-16 px-6 md:px-16 bg-[#1a3d2a] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1740477138822-906f6b845579?w=800&q=80"
              alt="Family farming"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Farming Made Easy for <span className="text-[#ffd54f]">Urban Families</span>
            </h2>
            <p className="text-green-100 mb-8 leading-relaxed">
              Experience the joy of owning your own farm plot without the hard work. 
              We handle everything while you enjoy fresh, organic produce.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4caf50] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg mb-1">Plot Selection & Setup</h4>
                  <p className="text-green-100 text-sm">
                    Choose your ideal plot size and we'll prepare it for cultivation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4caf50] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg mb-1">Expert Farm Management</h4>
                  <p className="text-green-100 text-sm">
                    Our experienced team handles planting, care, and harvesting
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4caf50] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg mb-1">Regular Updates & Visits</h4>
                  <p className="text-green-100 text-sm">
                    Track progress with photos and visit your plot anytime
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-[#4caf50] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg mb-1">Fresh Doorstep Delivery</h4>
                  <p className="text-green-100 text-sm">
                    Receive your organic harvest delivered fresh to your home
                  </p>
                </div>
              </div>
            </div>
            <button 
              onClick={onBookingClick}
              className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors"
            >
              Book Your Plot
            </button>
          </div>
        </div>
      </section>

      {/* Recently Completed Projects */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-4">
              Recently Completed Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our successful farming projects and see the quality of our organic cultivation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1627842822558-c1f15aef9838?w=600&q=80"
                alt="Wheat harvest project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg text-gray-900">Organic Wheat Cultivation</h3>
                <p className="text-sm text-gray-500">50 acres | Maharashtra</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522125307274-36420256794e?w=600&q=80"
                alt="Lettuce farm"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg text-gray-900">Hydroponic Vegetables</h3>
                <p className="text-sm text-gray-500">20 plots | Pune</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1646082272615-44aac96b5e8e?w=600&q=80"
                alt="Tomato greenhouse"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg text-gray-900">Greenhouse Tomatoes</h3>
                <p className="text-sm text-gray-500">35 plots | Lonavala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IM Agriculture */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-8">
              Why IM Agriculture?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Experienced in Farming</h4>
                  <p className="text-gray-600 text-sm">
                    Over 15 years of expertise in organic farming practices
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Best Quality Standards</h4>
                  <p className="text-gray-600 text-sm">
                    Certified organic produce meeting international quality standards
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#4caf50] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">Latest & Best Technology</h4>
                  <p className="text-gray-600 text-sm">
                    Modern farming techniques combined with traditional wisdom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
              alt="Farmer with organic produce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 px-6 md:px-16 bg-[#2d5f3f] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-[#2d5f3f]" size={32} />
            </div>
            <h3 className="text-3xl mb-2">150+</h3>
            <p className="text-green-100">Organic Plots</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-[#2d5f3f]" size={32} />
            </div>
            <h3 className="text-3xl mb-2">1000+</h3>
            <p className="text-green-100">Happy Families</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-[#2d5f3f]" size={32} />
            </div>
            <h3 className="text-3xl mb-2">15+</h3>
            <p className="text-green-100">Years Experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-[#ffd54f] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[#2d5f3f]" size={32} />
            </div>
            <h3 className="text-3xl mb-2">98%</h3>
            <p className="text-green-100">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Trusted by 1000+ Customers */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-4">
              Trusted by 1000+ Customers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what our satisfied customers have to say about their organic farming journey with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#ffd54f] fill-[#ffd54f]" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The quality of organic vegetables we receive is exceptional. Our family's health has improved significantly since we started with Ganeshadhari."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center text-white">
                  RS
                </div>
                <div>
                  <h4 className="text-gray-900">Rajesh Sharma</h4>
                  <p className="text-sm text-gray-500">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#ffd54f] fill-[#ffd54f]" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Owning a farm plot without any hassle is a dream come true. The team manages everything professionally and keeps us updated regularly."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center text-white">
                  PM
                </div>
                <div>
                  <h4 className="text-gray-900">Priya Mehta</h4>
                  <p className="text-sm text-gray-500">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#ffd54f] fill-[#ffd54f]" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Ganeshadhari has made organic farming accessible to urban families like us. The doorstep delivery of fresh produce is incredibly convenient."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center text-white">
                  AK
                </div>
                <div>
                  <h4 className="text-gray-900">Amit Kumar</h4>
                  <p className="text-sm text-gray-500">Bangalore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Can We Help You */}
      <section className="py-16 px-6 md:px-16 bg-green-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
              alt="Customer support"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-6">
              Real Can We Help You?
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions or need assistance? Our expert team is here to help you start your organic farming journey. Get in touch with us today!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <p className="text-lg text-gray-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4caf50] rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us at</p>
                  <p className="text-lg text-gray-900">info@ganeshadhari.com</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleScrollToContact}
              className="bg-[#4caf50] text-white px-8 py-3 rounded-full hover:bg-[#45a049] transition-colors"
            >
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Latest from the Fields */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#2d5f3f] mb-4">
              Latest from the Fields
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, tips, and insights from our organic farms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80"
                alt="Seedling growing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-[#4caf50] bg-green-100 px-3 py-1 rounded-full">
                  Farming Tips
                </span>
                <h3 className="text-xl text-gray-900 mt-3 mb-2">
                  5 Essential Tips for Urban Farming
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the key principles that make urban organic farming successful and sustainable...
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                alt="Organic farming"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-[#4caf50] bg-green-100 px-3 py-1 rounded-full">
                  Success Story
                </span>
                <h3 className="text-xl text-gray-900 mt-3 mb-2">
                  How Families Are Growing Food
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Read inspiring stories of families who transformed their lifestyle with organic farming...
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80"
                alt="Fresh harvest"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-xs text-[#4caf50] bg-green-100 px-3 py-1 rounded-full">
                  Seasonal Guide
                </span>
                <h3 className="text-xl text-gray-900 mt-3 mb-2">
                  Seasonal Crops: What to Plant
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn which crops thrive in each season for optimal harvest and maximum nutrition...
                </p>
                <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}