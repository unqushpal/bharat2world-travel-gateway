
import { Passport, Briefcase, CreditCard, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  link: string; 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="p-4 bg-deepBlue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="text-saffron w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-deepBlue mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Button 
        className="bg-white text-deepBlue hover:bg-saffron hover:text-white border-2 border-deepBlue mt-auto"
        asChild
      >
        <a href={link}>Learn More</a>
      </Button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Visa Services",
      description: "Expert assistance for all types of visas with high success rates and minimal documentation.",
      icon: Passport,
      link: "/visa-services"
    },
    {
      title: "Travel Packages",
      description: "Customized global travel packages tailored to your preferences, budget, and duration.",
      icon: Briefcase,
      link: "/travel-packages"
    },
    {
      title: "Forex & Insurance",
      description: "Competitive currency exchange rates and comprehensive travel insurance solutions.",
      icon: CreditCard,
      link: "/forex-insurance"
    },
    {
      title: "Document Checklist",
      description: "Country-specific document requirements and checklists for hassle-free applications.",
      icon: ClipboardCheck,
      link: "/document-checklist"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel and visa solutions designed to make your global journey seamless and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
