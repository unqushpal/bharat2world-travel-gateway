
import { Check } from "lucide-react";

interface ComparisonItem {
  others: string;
  we: string;
}

const ComparisonRow = ({ item }: { item: ComparisonItem }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600">{item.others}</p>
      </div>
      <div className="bg-saffron/10 p-4 rounded-lg border border-saffron/30">
        <div className="flex items-center">
          <Check className="h-5 w-5 text-saffron mr-2 flex-shrink-0" />
          <p className="text-deepBlue font-medium">{item.we}</p>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const comparisonItems: ComparisonItem[] = [
    {
      others: "Limited country options",
      we: "50+ countries covered worldwide"
    },
    {
      others: "Business hours support only",
      we: "24/7 customer assistance"
    },
    {
      others: "Standard visa processing",
      we: "Express and priority services available"
    },
    {
      others: "One-size-fits-all packages",
      we: "Customized travel solutions"
    },
    {
      others: "Basic documentation help",
      we: "Complete end-to-end application support"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Why Choose Bharat2World
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we stand out from the competition with our premium services and customer-first approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center font-bold text-lg text-deepBlue">
              What Others Provide
            </div>
            <div className="text-center font-bold text-lg text-deepBlue">
              What We Provide
            </div>
          </div>

          {comparisonItems.map((item, index) => (
            <ComparisonRow key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
