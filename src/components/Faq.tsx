
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How long does visa processing typically take?",
      answer:
        "Visa processing times vary by country and visa type. Tourist visas generally take 5-15 business days, while work or study visas may take 2-8 weeks. Our fast-track services can expedite the process for urgent requirements.",
    },
    {
      question: "Do you provide assistance for visa rejection cases?",
      answer:
        "Yes, we offer specialized assistance for visa rejection cases. Our experts analyze the reasons for rejection and help you reapply with improved documentation and a stronger application strategy, significantly increasing your chances of approval.",
    },
    {
      question: "Can you customize travel packages according to my budget?",
      answer:
        "Absolutely! We pride ourselves on creating personalized travel experiences. Our team works closely with you to design packages that match your budget while ensuring quality experiences. We offer options across luxury, premium, and budget categories.",
    },
    {
      question: "What makes Bharat2World different from other travel agencies?",
      answer:
        "Unlike traditional agencies, we provide comprehensive end-to-end solutions, from visa processing to travel planning, forex, and insurance. Our 24/7 support, personalized attention, and 99% visa success rate set us apart in the industry.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our services, processes, and support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-deepBlue hover:text-saffron py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
