import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {

  return (
    <section className="relative flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background gradient - simplified on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-br from-coral-secondary/10 sm:from-coral-secondary/20 via-background to-background sm:to-coral-accent-light/10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6 fade-in-up">
            {/* Trust Signals at Top */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              {/* Trustpilot Rating */}
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
                <img src={trustpilotLogo} alt="Trustpilot" className="h-4 sm:h-5" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm sm:text-base font-semibold text-foreground">4.7</span>
              </div>
              
              {/* Age Badge */}
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Weekly Live Online Classes for Ages 8-13
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-center lg:text-left">
              Mini Business Series
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed text-center lg:text-left">
              Each week, kids deep-dive into a new company — from MrBeast to Apple — discovering how great founders turned ideas into success stories. They wrap up every class with a creative project, presenting their own business ideas — a fun Mini MBA for young innovators!
            </p>
            
            {/* CTA Button */}
            <div className="space-y-3">
              <Button
                size="lg" 
                onClick={onEnrollClick}
                className="w-full sm:w-full lg:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-coral-lg hover:shadow-coral transition-all duration-300 hover:scale-105"
              >
                Enroll For FREE
              </Button>
              
              <p className="text-sm sm:text-base text-muted-foreground text-center lg:text-left">
                Class meets every <span className="font-semibold text-foreground">Thursday</span> · 5 PM – 5:50 PM (PST)
              </p>
            </div>
            
            {/* Credibility Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">5,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">Happy Students</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">Expert Teachers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Carousel Column - Hidden on small mobile, visible on sm+ */}
          <div className="hidden sm:block lg:flex-1 relative fade-in">
            <TestimonialCarousel />
            
            {/* Floating accent elements - reduced on mobile */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-coral-secondary rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-32 h-32 bg-coral-accent-light rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
