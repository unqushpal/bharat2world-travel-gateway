
import { Button } from "@/components/ui/button";

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-deepBlue rounded-full w-20 h-20 flex items-center justify-center mb-2">
        <span className="text-white text-2xl font-bold">{value}</span>
      </div>
      <p className="text-gray-600 text-center">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-6">
              About Bharat2World
            </h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for connecting India to the world, Bharat2World simplifies global travel and visa processes. 
              We believe that everyone deserves to explore the world without the stress of complex paperwork and uncertain processes.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced travel and visa consultants provides personalized service, ensuring a high success rate and 
              customer satisfaction. From student visas to business travel, tourism to immigration - we handle it all with expertise and care.
            </p>
            <p className="text-gray-700 font-semibold mb-8">
              From India to the World - Our purpose is to make global mobility accessible, simple, and enjoyable for everyone.
            </p>
            <Button
              className="bg-saffron hover:bg-saffron/90 text-white"
            >
              View Full About Page
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <StatItem value="85%" label="Client Satisfaction" />
            <StatItem value="99%" label="Visa Success Rate" />
            <StatItem value="50+" label="Countries Served" />
            <StatItem value="10k+" label="Happy Travelers" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
