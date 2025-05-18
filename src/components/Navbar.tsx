
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-deepBlue shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src="/lovable-uploads/60408a30-79b2-4b43-9b8f-36185e323eff.png" alt="Bharat2World Logo" className="h-14" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-saffron transition-colors">
            Home
          </a>
          <a href="#services" className="text-white hover:text-saffron transition-colors">
            Visa Services
          </a>
          <a href="#" className="text-white hover:text-saffron transition-colors">
            Travel Packages
          </a>
          <a href="#" className="text-white hover:text-saffron transition-colors">
            Forex & Insurance
          </a>
          <a href="#about" className="text-white hover:text-saffron transition-colors">
            About Us
          </a>
          <a href="#faq" className="text-white hover:text-saffron transition-colors">
            FAQs
          </a>
        </div>

        <Button 
          className="hidden md:flex bg-saffron hover:bg-saffron/90 text-white border border-deepBlue"
        >
          Check Visa Eligibility
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-deepBlue absolute top-full left-0 right-0 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visa Services
            </a>
            <a
              href="#"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Travel Packages
            </a>
            <a
              href="#"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Forex & Insurance
            </a>
            <a
              href="#about"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#faq"
              className="text-white hover:text-saffron transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <Button 
              className="bg-saffron hover:bg-saffron/90 text-white w-full border border-deepBlue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Check Visa Eligibility
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
