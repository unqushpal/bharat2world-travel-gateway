
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section className="py-20 bg-deepBlue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="25" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Check your eligibility or book a consultation today. Let us help you explore the world with confidence and ease.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-saffron hover:bg-saffron/90 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">
              ✓ Check Your Visa Eligibility
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg px-8 py-6 hover:scale-105 transition-transform">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
