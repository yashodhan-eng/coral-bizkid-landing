import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
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
    Autoplay({ delay: 2500, stopOnInteraction: false })
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
        <CarouselContent className="-ml-2 sm:-ml-3">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 sm:pl-3 basis-[70%] sm:basis-[55%] md:basis-[45%] lg:basis-1/3">
              <Card className="p-3 sm:p-4 lg:p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all h-full">
                <div className="space-y-2 sm:space-y-3 min-h-[140px] sm:min-h-[160px] flex flex-col justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-sm sm:text-base">★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-foreground font-medium leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">
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
