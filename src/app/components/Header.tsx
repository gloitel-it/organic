import logo from "figma:asset/3611b20c82348a63a2e243a8b9a832f9b8a512dc.png";
import { Globe } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onBookingClick: () => void;
  onNavigateBrand: () => void;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateBlog: () => void;
  onNavigateAbout: () => void;
  onNavigateServices: () => void;
  onNavigateContact: () => void;
  currentPage: "home" | "brand" | "projects" | "blog" | "about" | "services" | "contact";
}

export default function Header({ onBookingClick, onNavigateBrand, onNavigateHome, onNavigateProjects, onNavigateBlog, onNavigateAbout, onNavigateServices, onNavigateContact, currentPage }: HeaderProps) {
  const [language, setLanguage] = useState<"ENG" | "HINDI">("ENG");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "ENG" ? "HINDI" : "ENG");
  };

  return (
    <header className="bg-white py-4 px-6 md:px-16 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center cursor-pointer" onClick={onNavigateHome}>
        <img src={logo} alt="Ganeshadhari" className="h-8" />
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <button 
          onClick={onNavigateHome}
          className={`transition-colors ${
            currentPage === "home" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Home
        </button>
        <button 
          onClick={onNavigateAbout}
          className={`transition-colors ${
            currentPage === "about" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          About
        </button>
        <button 
          onClick={onNavigateServices}
          className={`transition-colors ${
            currentPage === "services" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Services
        </button>
        <button 
          onClick={onNavigateBrand}
          className={`transition-colors ${
            currentPage === "brand" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Our Brand
        </button>
        <button 
          onClick={onNavigateProjects}
          className={`transition-colors ${
            currentPage === "projects" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Projects
        </button>
        <button 
          onClick={onNavigateBlog}
          className={`transition-colors ${
            currentPage === "blog" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Blog
        </button>
        <button 
          onClick={onNavigateContact}
          className={`text-gray-700 hover:text-[#2d5f3f] transition-colors ${
            currentPage === "contact" ? "text-[#2d5f3f]" : "text-gray-700 hover:text-[#2d5f3f]"
          }`}
        >
          Contact
        </button>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-gray-700 hover:text-[#2d5f3f] transition-colors border border-gray-300 rounded-full px-4 py-2"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">{language}</span>
        </button>

        {/* Book Button */}
        <button 
          onClick={onBookingClick}
          className="bg-[#4caf50] text-white px-6 py-2 rounded-full hover:bg-[#45a049] transition-colors"
        >
          Book Your Farm Plot
        </button>
      </div>
    </header>
  );
}