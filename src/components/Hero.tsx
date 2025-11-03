import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {

  return (
    <section className="relative flex items-center justify-center px-4 py-8 md:py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-secondary/20 via-background to-coral-accent-light/10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Trustpilot Rating */}
          <div className="flex justify-center md:justify-start fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
              <img src={trustpilotLogo} alt="Trustpilot" className="h-4 md:h-5" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground">4.7</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Left content */}
            <div className="text-center md:text-left space-y-4 md:space-y-6 fade-in-up">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mini Business Series
              </h1>
            
            <div className="space-y-2">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Each week, kids deep-dive into a new company — from MrBeast to Apple — discovering how great founders turned ideas into success stories. They wrap up every class with a creative project, presenting their own business ideas — a fun Mini MBA for young innovators!
              </p>
            </div>
            
              {/* Credibility Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 py-4">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-primary">5,000+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Happy Students</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-primary">15+</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Expert Teachers</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-4xl font-bold text-primary">98%</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <Button
                  size="lg" 
                  onClick={onEnrollClick}
                  className="w-full md:w-auto px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-coral-lg hover:shadow-coral transition-all duration-300 hover:scale-105"
                >
                  Enroll For FREE
                </Button>
                
                <p className="text-sm md:text-base text-muted-foreground">
                  Class meets every <span className="font-semibold text-foreground">Thursday</span> · 5 PM – 5:50 PM (PST)
                </p>
              </div>
            </div>
          
            {/* Right testimonial carousel */}
            <div className="relative fade-in order-first md:order-last">
              <div className="flex justify-center md:justify-start mb-4">
                <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm text-center">
                  Weekly Live Online Classes for Ages 8-13
                </span>
              </div>
              
              <TestimonialCarousel />
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-coral-secondary rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-coral-accent-light rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
