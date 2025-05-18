
import { MapPin, Upload, MessageSquare, CheckSquare } from "lucide-react";

const ProcessStep = ({
  number,
  title,
  description,
  icon: Icon,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center text-white font-bold text-xl">
          {number}
        </div>
        <div className="absolute -right-2 -bottom-2 bg-white p-2 rounded-full shadow-lg">
          <Icon className="w-6 h-6 text-deepBlue" />
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold text-deepBlue">{title}</h3>
      <p className="mt-2 text-gray-600 text-center max-w-xs">{description}</p>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Select Your Country",
      description: "Choose your destination country and get instant visa requirements.",
      icon: MapPin,
    },
    {
      number: 2,
      title: "Submit Documents",
      description: "Upload required documents through our secure portal.",
      icon: Upload,
    },
    {
      number: 3,
      title: "Get Assistance",
      description: "Receive personalized support from our experienced team.",
      icon: MessageSquare,
    },
    {
      number: 4,
      title: "Receive Approval",
      description: "Get your visa or travel itinerary and start your journey!",
      icon: CheckSquare,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            How It Works - In 4 Easy Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified the process to make your journey from Bharat to anywhere in the world smooth and hassle-free.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Connector */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-1 bg-deepBlue"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
