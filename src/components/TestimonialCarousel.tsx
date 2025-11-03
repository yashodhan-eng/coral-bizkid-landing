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
          dragFree: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-3 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 md:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all h-full">
                <div className="space-y-2 md:space-y-3">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-base md:text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-foreground font-medium leading-relaxed min-h-[60px] md:min-h-[70px]">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">
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
