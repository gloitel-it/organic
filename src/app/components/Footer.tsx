import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Twitter } from "lucide-react";
import logo from "figma:asset/3611b20c82348a63a2e243a8b9a832f9b8a512dc.png";

interface FooterProps {
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onNavigateSitemap?: () => void;
}

export default function Footer({ onNavigatePrivacy, onNavigateTerms, onNavigateSitemap }: FooterProps = {}) {
  return (
    <footer className="bg-[#1a3a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logo} alt="Ganeshadhari" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Committed to providing 100% organic, fresh, and healthy produce while promoting sustainable agriculture practices. Join us in creating a healthier future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#2d5f3f] rounded-full flex items-center justify-center hover:bg-[#4caf50] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2d5f3f] rounded-full flex items-center justify-center hover:bg-[#4caf50] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2d5f3f] rounded-full flex items-center justify-center hover:bg-[#4caf50] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2d5f3f] rounded-full flex items-center justify-center hover:bg-[#4caf50] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-[#4caf50] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#4caf50] transition-colors">About Us</a></li>
              <li><a href="#brand" className="text-gray-300 hover:text-[#4caf50] transition-colors">Our Brand</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-[#4caf50] transition-colors">Projects</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-[#4caf50] transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#4caf50] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Plot Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Organic Farming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Farm Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Harvest Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Farm Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#4caf50] transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#4caf50] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Block A LIG Indraprashta Raipura Chowk Raipur</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#4caf50] flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#4caf50] flex-shrink-0" />
                <span className="text-gray-300">info@ganeshadhari.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 Ganeshadhari Agriculture. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm">
            <button onClick={onNavigatePrivacy} className="text-gray-400 hover:text-[#4caf50] transition-colors">
              Privacy Policy
            </button>
            <button onClick={onNavigateTerms} className="text-gray-400 hover:text-[#4caf50] transition-colors">
              Terms & Conditions
            </button>
            <button onClick={onNavigateSitemap} className="text-gray-400 hover:text-[#4caf50] transition-colors">
              Sitemap
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}