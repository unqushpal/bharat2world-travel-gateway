
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  service: string;
  stars: number;
  quote: string;
  image: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg text-deepBlue">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.service}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.stars ? "text-saffron fill-saffron" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic flex-grow">{testimonial.quote}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      service: "Student Visa - Canada",
      stars: 5,
      quote: "The team at Bharat2World made my dream of studying abroad a reality. They guided me through every step of the visa process, and I got my approval in record time!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rajesh Kumar",
      service: "Business Visa - USA",
      stars: 5,
      quote: "Professional, efficient, and incredibly knowledgeable. They handled my urgent business visa requirement with expertise and helped me attend my important meeting on time.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Anita Patel",
      service: "Family Travel Package - Europe",
      stars: 5,
      quote: "Our family trip to Europe was perfectly planned by Bharat2World. From visa to accommodations, everything was taken care of. Will definitely use their services again!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our happy clients about their experiences with Bharat2World.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-deepBlue" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-deepBlue" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 mr-4"
          >
            <ChevronLeft className="w-6 h-6 text-deepBlue" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-deepBlue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
