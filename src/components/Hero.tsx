import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {

  return (
    <section className="relative flex items-center justify-center px-4 py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-secondary/20 via-background to-coral-accent-light/10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Trustpilot Rating */}
          <div className="flex justify-center md:justify-start fade-in">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
              <img src={trustpilotLogo} alt="Trustpilot" className="h-3.5 sm:h-4 md:h-5" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-foreground">4.7</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left content */}
            <div className="text-center md:text-left space-y-3 sm:space-y-4 md:space-y-6 fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Mini Business Series
              </h1>
            
              <div className="space-y-2">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Each week, kids deep-dive into a new company — from MrBeast to Apple — discovering how great founders turned ideas into success stories. They wrap up every class with a creative project, presenting their own business ideas — a fun Mini MBA for young innovators!
              </p>
            </div>
            
              {/* Credibility Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-3 sm:py-4">
                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">5,000+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 leading-tight">Happy Students</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">15+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 leading-tight">Expert Teachers</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">98%</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 leading-tight">Satisfaction Rate</div>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <Button
                  size="lg" 
                  onClick={onEnrollClick}
                  className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-coral-lg hover:shadow-coral transition-all duration-300 hover:scale-105"
                >
                  Enroll For FREE
                </Button>
                
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  Class meets every <span className="font-semibold text-foreground">Thursday</span> · 5 PM – 5:50 PM (PST)
                </p>
              </div>
            </div>
          
            {/* Right testimonial carousel */}
            <div className="relative fade-in order-first md:order-last">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
                <span className="inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm text-center">
                  Weekly Live Online Classes for Ages 8-13
                </span>
              </div>
              
              <TestimonialCarousel />
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-coral-secondary rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-coral-accent-light rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
