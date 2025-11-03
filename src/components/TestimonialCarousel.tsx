import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "My daughter loves the hands-on projects every week!",
    author: "Jennifer M.",
  },
  {
    text: "Finally, a class that teaches real business skills to kids.",
    author: "Michael R.",
  },
  {
    text: "The teacher makes learning about companies so engaging.",
    author: "Lisa P.",
  },
  {
    text: "My son can't wait for Thursday classes every week!",
    author: "David K.",
  },
  {
    text: "Great way to introduce entrepreneurship to young minds.",
    author: "Amanda S.",
  },
  {
    text: "The pitch projects build confidence and creativity.",
    author: "Robert T.",
  },
];

const TestimonialCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                <div className="space-y-2">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    — {testimonial.author}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
