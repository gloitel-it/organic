import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Leaf, Target, Heart, Users, Award, TrendingUp } from "lucide-react";

interface AboutProps {
  onBookingClick: () => void;
}

export default function About({ onBookingClick }: AboutProps) {
  const values = [
    {
      icon: <Leaf className="text-[#4caf50]" size={40} />,
      title: "Sustainability",
      description: "We believe in farming practices that nurture the earth for future generations, using 100% organic methods."
    },
    {
      icon: <Heart className="text-[#4caf50]" size={40} />,
      title: "Health First",
      description: "Your family's wellbeing is our priority. Every crop is grown without harmful chemicals or pesticides."
    },
    {
      icon: <Users className="text-[#4caf50]" size={40} />,
      title: "Community",
      description: "We're building a community of conscious consumers who care about where their food comes from."
    },
    {
      icon: <Award className="text-[#4caf50]" size={40} />,
      title: "Quality",
      description: "From seed to harvest, we maintain the highest standards to deliver premium organic produce."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1615724320397-9d4db10ec2a5?w=600&q=80",
      bio: "20+ years in sustainable agriculture"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Agronomist",
      image: "https://images.unsplash.com/photo-1709553234788-7c6ae40515c8?w=600&q=80",
      bio: "PhD in Organic Farming Systems"
    },
    {
      name: "Amit Patel",
      role: "Operations Head",
      image: "https://images.unsplash.com/photo-1723862407843-5bddda008e7f?w=600&q=80",
      bio: "Expert in farm-to-table logistics"
    },
    {
      name: "Anjali Desai",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1708417144371-36641715dc98?w=600&q=80",
      bio: "Connecting farmers with families"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "50 Acres", label: "Organic Farmland" },
    { number: "15+", label: "Crop Varieties" },
    { number: "100%", label: "Organic Certified" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">🌱 WHO WE ARE</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Cultivating a <span className="text-[#ffd54f]">Healthier Future</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            At Ganeshadhari, we're more than just a farm—we're a movement towards sustainable living, organic nutrition, and reconnecting families with the land.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-[#4caf50] mb-4 uppercase tracking-wide">Our Story</p>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              From a Dream to Reality
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Ganeshadhari was born from a simple belief: everyone deserves access to fresh, organic food grown with care and respect for nature. Founded in 2015, we started with just 5 acres of land and a vision to transform how urban families connect with their food sources.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Today, we've grown to 50 acres of certified organic farmland, serving over 500 families across the region. But our mission remains the same—to provide transparent, sustainable, and healthy farming solutions that benefit both people and the planet.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe farming isn't just about growing crops; it's about growing communities, nurturing relationships, and cultivating trust.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1592864554447-5e40d96e2b21?w=800&q=80"
              alt="Farmer hands holding soil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#e8f5e9] rounded-full flex items-center justify-center mb-6">
                <Target className="text-[#4caf50]" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make organic farming accessible and transparent for every family, while promoting sustainable agricultural practices that protect our environment and ensure food security for future generations.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-16 h-16 bg-[#fff9e6] rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-[#ffd54f]" size={32} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a world where every family has the opportunity to grow their own organic food, understand where their nutrition comes from, and participate in building a sustainable food ecosystem that benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#4caf50] mb-4 uppercase tracking-wide">Our Values</p>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-16 bg-[#1a3d2a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl text-[#ffd54f] mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#4caf50] mb-4 uppercase tracking-wide">Our Team</p>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-12">
            Meet the People Behind the Mission
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-sm text-[#4caf50] mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 bg-[#2d5f3f]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Start your journey towards healthier, sustainable living. Book your farm plot today and experience the joy of growing your own organic food.
          </p>
          <button 
            onClick={onBookingClick}
            className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors text-lg"
          >
            Book Your Farm Plot
          </button>
        </div>
      </section>
    </div>
  );
}