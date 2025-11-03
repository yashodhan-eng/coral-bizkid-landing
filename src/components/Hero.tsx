import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Left Column - Main Content */}
          <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left">
            {/* Trust Signals - Top Priority */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 bg-card/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/20">
                <img 
                  src={trustpilotLogo}
                  alt="Trustpilot" 
                  className="h-4 w-4"
                />
                <span className="text-xs sm:text-sm font-semibold text-foreground">4.7/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xs">★</span>
                  ))}
                </div>
              </div>
              
              <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                <span className="text-xs sm:text-sm font-semibold text-primary">Ages 8-13</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Mini Business Series
              <span className="block text-primary mt-1">For Young Entrepreneurs</span>
            </h1>

            {/* Description - Condensed on Mobile */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="block sm:hidden">
                Kids explore real companies like MrBeast and Apple, then pitch their own business ideas. A fun Mini MBA for ages 8-13!
              </span>
              <span className="hidden sm:block">
                Every week, your child explores a real company (like MrBeast or Apple), 
                learns business concepts, and works on pitching their own business idea. 
                It's like a Mini MBA, but fun and hands-on!
              </span>
            </p>

            {/* CTA Button */}
            <button
              onClick={onEnrollClick}
              className="w-full sm:w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 sm:py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-base sm:text-lg"
            >
              Enroll For FREE
            </button>

            {/* Class Schedule */}
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="font-semibold text-foreground">Every Thursday</span> • 5 PM – 5:50 PM (PST) • Online
            </p>

            {/* Mobile Testimonial Carousel - Compact Version */}
            <div className="block lg:hidden pt-2">
              <div className="bg-muted/20 -mx-4 px-4 py-4 rounded-lg border-y border-primary/10">
                <TestimonialCarousel compact={true} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-2 sm:pt-3">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">5,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Teachers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Testimonials */}
          <div className="hidden lg:block lg:flex-1">
            <TestimonialCarousel compact={false} />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Desktop Only */}
      <div className="hidden lg:block absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden lg:block absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
