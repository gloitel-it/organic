import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import NewHome from "@/app/components/NewHome";
import Footer from "@/app/components/Footer";
import BookingModal from "@/app/components/BookingModal";
import OurBrand from "@/app/components/OurBrand";
import Projects from "@/app/components/Projects";
import Blog from "@/app/components/Blog";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";
import TermsConditions from "@/app/components/TermsConditions";
import Sitemap from "@/app/components/Sitemap";

type PageType =
  | "home"
  | "brand"
  | "projects"
  | "blog"
  | "about"
  | "services"
  | "contact"
  | "privacy"
  | "terms"
  | "sitemap";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [shouldScrollToContact, setShouldScrollToContact] = useState(false);

  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo(0, 0);

    // Handle contact scroll for home page
    if (currentPage === "home" && shouldScrollToContact) {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
        setShouldScrollToContact(false);
      }, 100);
    }
  }, [currentPage, shouldScrollToContact]);

  const handleNavigateContact = () => {
    setCurrentPage("contact");
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onBookingClick={handleOpenBooking}
        onNavigateBrand={() => navigateToPage("brand")}
        onNavigateHome={() => navigateToPage("home")}
        onNavigateProjects={() => navigateToPage("projects")}
        onNavigateBlog={() => navigateToPage("blog")}
        onNavigateAbout={() => navigateToPage("about")}
        onNavigateServices={() => navigateToPage("services")}
        onNavigateContact={handleNavigateContact}
        currentPage={currentPage}
      />

      {currentPage === "home" ? (
        <>
          <NewHome
            onBookingClick={handleOpenBooking}
            onNavigateAbout={() => navigateToPage("about")}
            onNavigateServices={() => navigateToPage("services")}
          />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "brand" ? (
        <>
          <OurBrand onNavigateHome={() => navigateToPage("home")} />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "projects" ? (
        <>
          <Projects onBookingClick={handleOpenBooking} />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "blog" ? (
        <>
          <Blog />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "about" ? (
        <>
          <About onBookingClick={handleOpenBooking} />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "contact" ? (
        <>
          <Contact />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "privacy" ? (
        <>
          <PrivacyPolicy />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "terms" ? (
        <>
          <TermsConditions />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : currentPage === "sitemap" ? (
        <>
          <Sitemap
            onNavigateHome={() => navigateToPage("home")}
            onNavigateAbout={() => navigateToPage("about")}
            onNavigateServices={() => navigateToPage("services")}
            onNavigateBrand={() => navigateToPage("brand")}
            onNavigateProjects={() => navigateToPage("projects")}
            onNavigateBlog={() => navigateToPage("blog")}
            onNavigateContact={() => navigateToPage("contact")}
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
          />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      ) : (
        <>
          <Services
            onBookingClick={handleOpenBooking}
            onNavigateContact={handleNavigateContact}
          />
          <Footer
            onNavigatePrivacy={() => navigateToPage("privacy")}
            onNavigateTerms={() => navigateToPage("terms")}
            onNavigateSitemap={() => navigateToPage("sitemap")}
          />
        </>
      )}

      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}