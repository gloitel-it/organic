import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ShoppingBasket, Apple, MapPin, GraduationCap, Users, CheckCircle, ArrowRight } from "lucide-react";
import heroImage from "figma:asset/15d73c97bd8d4c476b7970dbe20a272e8a824753.png";

interface ServicesProps {
  onBookingClick: () => void;
  onNavigateContact?: () => void;
}

export default function Services({ onBookingClick, onNavigateContact }: ServicesProps) {
  const handleScrollToContact = () => {
    if (onNavigateContact) {
      onNavigateContact();
    }
  };
  const services = [
    {
      id: 1,
      icon: <ShoppingBasket className="text-[#4caf50]" size={48} />,
      title: "Fresh Vegetables",
      subtitle: "Farm-to-Table Freshness",
      description: "Experience the taste of truly fresh, organic vegetables grown with care and harvested at peak ripeness.",
      image: "https://images.unsplash.com/photo-1759003103614-11427d946af0?w=800&q=80",
      features: [
        "100% Organic & Chemical-Free",
        "Harvested Daily for Maximum Freshness",
        "Over 30 Seasonal Varieties",
        "Direct Farm Delivery Available",
        "Customizable Veggie Boxes"
      ],
      bgColor: "bg-green-50"
    },
    {
      id: 2,
      icon: <Apple className="text-[#ff9800]" size={48} />,
      title: "Organic Fruits",
      subtitle: "Nature's Sweetest Offerings",
      description: "Savor the natural sweetness of our organically grown fruits, free from synthetic pesticides and fertilizers.",
      image: "https://images.unsplash.com/photo-1642076099119-e228cdadef03?w=800&q=80",
      features: [
        "Certified Organic Cultivation",
        "Naturally Ripened on Trees",
        "Seasonal & Exotic Varieties",
        "Rich in Natural Nutrients",
        "Weekly Fruit Baskets Available"
      ],
      bgColor: "bg-orange-50"
    },
    {
      id: 3,
      icon: <MapPin className="text-[#2196f3]" size={48} />,
      title: "Farm Tours",
      subtitle: "Explore Our Green Paradise",
      description: "Take a guided tour through our organic farm and witness firsthand how your food is grown sustainably.",
      image: "https://images.unsplash.com/photo-1655979910796-7d81bd5449a8?w=800&q=80",
      features: [
        "Guided Walking Tours",
        "Interactive Learning Experience",
        "Meet Our Farming Team",
        "See Organic Practices in Action",
        "Perfect for Families & Schools"
      ],
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      icon: <GraduationCap className="text-[#9c27b0]" size={48} />,
      title: "Workshops",
      subtitle: "Learn to Grow Your Own",
      description: "Join our hands-on workshops and master the art of organic farming, composting, and sustainable gardening.",
      image: "https://images.unsplash.com/photo-1580912315211-3b28d442b19d?w=800&q=80",
      features: [
        "Beginner to Advanced Courses",
        "Composting & Soil Health",
        "Organic Pest Management",
        "Seasonal Planting Guides",
        "Certificate Programs Available"
      ],
      bgColor: "bg-purple-50"
    },
    {
      id: 5,
      icon: <Users className="text-[#f44336]" size={48} />,
      title: "Consulting",
      subtitle: "Expert Agricultural Guidance",
      description: "Get professional consultation for starting or optimizing your own organic farm or garden project.",
      image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?w=800&q=80",
      features: [
        "Farm Design & Planning",
        "Soil Testing & Analysis",
        "Crop Selection Strategy",
        "Irrigation System Design",
        "Business & Marketing Support"
      ],
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">🌾 WHAT WE OFFER</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Our <span className="text-[#ffd54f]">Services</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            From fresh organic produce to educational experiences, we provide everything you need for a sustainable lifestyle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image - Left for even, Right for odd */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  {service.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#4caf50] mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-[#4caf50] hover:text-[#45a049] flex items-center gap-2 group">
                  Learn More
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#2d5f3f] to-[#1a3d2a]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for fresh produce, educational experiences, or expert guidance, we're here to help you on your organic journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBookingClick}
              className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors text-lg"
            >
              Book Your Farm Plot
            </button>
            <button 
              onClick={handleScrollToContact}
              className="bg-white text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12">
            Why Choose Ganeshadhari?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-[#4caf50]" size={32} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">100% Organic</h3>
              <p className="text-gray-600">
                Certified organic farming with zero synthetic chemicals or GMOs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#4caf50]" size={32} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Experienced agronomists and farmers dedicated to quality.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBasket className="text-[#4caf50]" size={32} />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">Fresh Delivery</h3>
              <p className="text-gray-600">
                Farm-fresh produce delivered right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}