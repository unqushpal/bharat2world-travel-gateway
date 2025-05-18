
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Gateway from <span className="text-saffron">Bharat</span> to the World
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Visa services, travel packages, and global assistance at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-saffron hover:bg-saffron/90 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">
              ✓ Check Your Visa Eligibility
            </Button>
            <Button className="bg-deepBlue hover:bg-deepBlue/80 text-white text-lg px-8 py-6 hover:bg-saffron hover:scale-105 transition-all">
              Book a Free Consultation
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <span className="text-deepBlue text-2xl font-bold">10,000+</span>
              </div>
              <p className="text-deepBlue font-medium">Travelers Trusted Us</p>
            </div>
            <div className="bg-white/90 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <span className="text-deepBlue text-2xl font-bold">99%</span>
              </div>
              <p className="text-deepBlue font-medium">Visa Success Rate</p>
            </div>
            <div className="bg-white/90 rounded-lg p-4 flex items-center">
              <div className="mr-4">
                <span className="text-deepBlue text-2xl font-bold">24/7</span>
              </div>
              <p className="text-deepBlue font-medium">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-subtle">
          <svg 
            className="w-6 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
