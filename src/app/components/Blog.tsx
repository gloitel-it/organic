import { useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Search, ArrowRight, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");

  const blogPosts = [
    {
      id: 1,
      category: "Organic Techniques",
      date: "Dec 15, 2025",
      author: "Sarah Johnson",
      title: "5 Essential Herbs for Your Kitchen Garden",
      excerpt: "Transform your cooking with fresh herbs. Discover the top 5 herbs that are easiest to grow and most versatile in the kitchen.",
      image: "https://images.unsplash.com/photo-1756574747685-257ddaebe519?w=600&q=80",
      categoryColor: "bg-green-500"
    },
    {
      id: 2,
      category: "Healthy Living",
      date: "Dec 10, 2025",
      author: "Rajesh Patel",
      title: "Understanding Soil Health for Organic Farming",
      excerpt: "Healthy soil is the foundation of successful organic farm. Learn about the biological ecosystem that makes soil nutrient-rich.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
      categoryColor: "bg-orange-500"
    },
    {
      id: 3,
      category: "Sustainability",
      date: "Dec 05, 2025",
      author: "Anita Desai",
      title: "Seasonal Harvest: What to Cook This Fall",
      excerpt: "As the seasons change, make the most of fall produce. Learn creative and healthy recipes using the freshest autumn harvest.",
      image: "https://images.unsplash.com/photo-1631292171396-26a654f51c48?w=600&q=80",
      categoryColor: "bg-blue-500"
    },
    {
      id: 4,
      category: "Farm Stories",
      date: "Nov 28, 2025",
      author: "Michael Chen",
      title: "Smart Farming: Integrating Tech with Nature",
      excerpt: "Discover how sensors and data analytics can help monitor crops and optimize water usage, soil heat, water usage, and predict harvest.",
      image: "https://images.unsplash.com/photo-1758524051910-60a8d324e110?w=600&q=80",
      categoryColor: "bg-purple-500"
    },
    {
      id: 5,
      category: "Farm Stories",
      date: "Nov 20, 2025",
      author: "Priya Sharma",
      title: "Reconnecting Urban Families with Nature",
      excerpt: "Read the inspiring stories of urban families who've discovered the joy of farming and just how it transformed their weekends and diet.",
      image: "https://images.unsplash.com/photo-1760033444532-5dd7005cd659?w=600&q=80",
      categoryColor: "bg-purple-500"
    },
    {
      id: 6,
      category: "Healthy Living",
      date: "Nov 15, 2025",
      author: "David Kumar",
      title: "Why Chemical-Free Tomatoes Taste Better",
      excerpt: "It's not your imagination. Scientific evidence confirms that organically grown tomatoes are more complex flavor profiles. We explain why.",
      image: "https://images.unsplash.com/photo-1594975620064-bad38e1c9e30?w=600&q=80",
      categoryColor: "bg-orange-500"
    }
  ];

  const categories = [
    { name: "Organic Techniques", count: 12 },
    { name: "Healthy Living", count: 8 },
    { name: "Sustainability", count: 15 },
    { name: "Farm Stories", count: 10 }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2d5f3f] to-[#1a3d2a] text-white py-20 px-6 md:px-16 min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="inline-block bg-[#4caf50] bg-opacity-20 border border-green-300 rounded-full px-4 py-2 mb-6">
            <span className="text-green-100">📖 KNOWLEDGE HUB</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6">
            Our Journal & <span className="text-[#ffd54f]">Stories</span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Expert insights on organic farming, sustainable living, and the journey from soil to soul.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg text-gray-900 mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="w-full flex items-center justify-between text-gray-700 hover:text-[#4caf50] transition-colors text-left py-1">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs text-gray-400">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-[#1a3d2a] rounded-2xl p-6 shadow-md text-white">
              <h3 className="text-lg mb-3">Join Our Newsletter</h3>
              <p className="text-sm text-green-100 mb-4">
                Get the latest farming tips directly to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-full mb-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#ffd54f] text-[#2d5f3f] px-6 py-2 rounded-full hover:bg-[#ffc107] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs text-white ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <button className="text-[#4caf50] hover:text-[#45a049] text-sm flex items-center gap-2">
                      Read Full Article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
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
        </div>
      </section>
    </div>
  );
}