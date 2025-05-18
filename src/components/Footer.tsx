
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deepBlue text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/81f76d23-2f03-4e65-8d8b-c71d3237bfe2.png" 
              alt="Bharat2World Logo" 
              className="h-20 mb-4" 
            />
            <p className="text-white/80 mb-4">
              Your trusted partner for global travel and visa solutions, connecting India to the world with expertise and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-saffron transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-saffron transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-saffron transition-colors">
                  Visa Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Travel Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Forex & Insurance
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-saffron transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Tourist Visas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Student Visas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Business Visas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Work Permits
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-saffron transition-colors">
                  Immigration Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-saffron flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Global Avenue, Sector 45, Gurugram, Haryana 122003, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-saffron flex-shrink-0" />
                <span className="text-white/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-saffron flex-shrink-0" />
                <span className="text-white/80">info@bharat2world.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © 2025 Bharat2World. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
