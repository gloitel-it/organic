import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import heroImage from "figma:asset/15d73c97bd8d4c476b7970dbe20a272e8a824753.png";

interface ProjectsProps {
  onBookingClick: () => void;
}

type FilterType = "all" | "ongoing" | "completed" | "urban";

export default function Projects({ onBookingClick }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Eco Vegetable Farm",
      subtitle: "Sustainable Farming",
      description: "A fully automated eco-friendly vegetable cultivation facility that produces fresh, organic vegetables all year round.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
      status: "ongoing",
      badge: "6500 SQ FT",
      type: "ongoing"
    },
    {
      id: 2,
      title: "Golden Wheat Reserve",
      subtitle: "Large-Scale Cultivation",
      description: "Our flagship organic wheat cultivation project spanning across 500 acres with 100% organic farming practices.",
      image: "https://images.unsplash.com/photo-1627842822558-c1f15aef9838?w=600&q=80",
      status: "completed",
      badge: "COMPLETED",
      type: "completed"
    },
    {
      id: 3,
      title: "Heirloom Tomato Project",
      subtitle: "Specialty Crops",
      description: "Premium heirloom tomato cultivation using traditional seeds and organic methods for exceptional flavor.",
      image: "https://images.unsplash.com/photo-1592841200221-4a4c1e1ab3d4?w=600&q=80",
      status: "ongoing",
      badge: "ONGOING",
      type: "ongoing"
    },
    {
      id: 4,
      title: "IoT Greenhouse Initiative",
      subtitle: "Smart Farming",
      description: "Integration of smart sensors and automated irrigation systems to optimize water usage and maximize crop yield.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
      status: "completed",
      badge: "5 YEAR",
      type: "completed"
    },
    {
      id: 5,
      title: "Urban Family Plots",
      subtitle: "Community Gardens",
      description: "Connecting city dwellers with nature through managed micro-plots, enabling families to grow their own food.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
      status: "ongoing",
      badge: "URBAN",
      type: "urban"
    },
    {
      id: 6,
      title: "Native Reforestation Drive",
      subtitle: "Environmental Impact",
      description: "Planting 50,000 native species along farm boundaries to promote local biodiversity and create sustainable habitats.",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80",
      status: "ongoing",
      badge: "ONGOING",
      type: "ongoing"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.type === activeFilter;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">🌾 OUR PORTFOLIO</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Cultivating <span className="text-[#ffd54f]">Change</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our diverse range of agriculture projects. From large-scale organic reserves to community-driven urban farming initiatives.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white py-8 px-6 md:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "all"
                ? "bg-[#2d5f3f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("ongoing")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "ongoing"
                ? "bg-[#2d5f3f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Ongoing
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "completed"
                ? "bg-[#2d5f3f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveFilter("urban")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === "urban"
                ? "bg-[#2d5f3f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Urban Farming
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === "completed"
                        ? "bg-blue-500 text-white"
                        : project.type === "urban"
                        ? "bg-orange-500 text-white"
                        : "bg-[#4caf50] text-white"
                    }`}>
                      {project.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase mb-2">{project.subtitle}</p>
                  <h3 className="text-xl text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button 
              className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 1 
                  ? "bg-[#2d5f3f] text-white" 
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 2 
                  ? "bg-[#2d5f3f] text-white" 
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentPage === 3 
                  ? "bg-[#2d5f3f] text-white" 
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 bg-[#1a3d2a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl mb-3">
              Have a project in mind?
            </h2>
            <p className="text-green-100">
              Let's collaborate to build sustainable agriculture solutions.
            </p>
          </div>
          <button 
            onClick={onBookingClick}
            className="bg-[#ffd54f] text-[#2d5f3f] px-8 py-3 rounded-full hover:bg-[#ffc107] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            Start a Conversation
            <MessageCircle size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}