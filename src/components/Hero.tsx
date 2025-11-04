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
      <div className="container mx-auto px-4 pt-2 sm:pt-3 md:pt-4 lg:pt-6 pb-8 sm:pb-10 md:pb-16 lg:pb-24 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="w-full lg:flex-1 lg:max-w-3xl space-y-4 sm:space-y-5 md:space-y-7 lg:space-y-10 text-center md:text-center lg:text-left">
            {/* Trust Signals - Top Priority */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-5">
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4 bg-white px-4 py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3.5 rounded-lg shadow-md">
                <div className="flex items-center gap-1.5 md:gap-2 border-r border-border pr-2 md:pr-3 lg:pr-4">
                  <Star className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-[#00b67a] text-[#00b67a]" />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">4.7</span>
                </div>
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#00b67a] text-lg md:text-xl lg:text-2xl">★</span>
                  ))}
                  <span className="text-[#00b67a] text-lg md:text-xl lg:text-2xl">☆</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <img 
                    src={trustpilotLogo}
                    alt="Trustpilot" 
                    className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                  />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground">Trustpilot</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full border border-primary/20 md:shadow-sm">
                <span className="text-xs sm:text-sm md:text-base font-semibold text-primary">Weekly Live Online Classes for Ages 8-13</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight md:tracking-tight">
              Mini Business Series
            </h1>

            {/* Description - Condensed on Mobile */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-auto lg:mx-0 leading-relaxed md:leading-relaxed">
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
              className="w-full sm:w-full md:w-auto md:px-10 lg:px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 sm:py-5 md:py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all text-base sm:text-lg md:text-xl lg:animate-pulse lg:hover:animate-none"
            >
              Enroll For FREE
            </button>

            {/* Class Schedule */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">Every Thursday</span> • 5 PM – 5:50 PM (PST) • Online
            </p>

            {/* Mobile Testimonial Carousel - Compact Version */}
            <div className="block lg:hidden pt-2">
              <div className="bg-muted/20 -mx-4 px-4 py-4 rounded-lg border-y border-primary/10">
                <TestimonialCarousel compact={true} />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 lg:gap-12 pt-2 sm:pt-3 md:pt-4">
              <div className="text-center md:text-center lg:text-left">
                <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">100+</div>
                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg text-muted-foreground mt-1 md:mt-2 leading-tight">Years of Teacher Experience</div>
              </div>
              <div className="text-center md:text-center lg:text-left md:border-l md:border-r md:border-primary/20 lg:border-0">
                <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">Stanford</div>
                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg text-muted-foreground mt-1 md:mt-2 leading-tight">Alum & Mom Founded</div>
              </div>
              <div className="text-center md:text-center lg:text-left">
                <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">1,000+</div>
                <div className="text-[10px] sm:text-xs md:text-base lg:text-lg text-muted-foreground mt-1 md:mt-2 leading-tight">Families Love Us</div>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Testimonials Only */}
          <div className="hidden lg:block lg:flex-1 lg:max-w-md">
            <TestimonialCarousel compact={false} />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Desktop Only */}
      <div className="hidden lg:block absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="hidden lg:block absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default Hero;
