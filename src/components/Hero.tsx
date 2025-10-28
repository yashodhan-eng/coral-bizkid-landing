import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kids-business.jpg";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-secondary/20 via-background to-coral-accent-light/10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-6 fade-in-up">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mini Business Series
              </h1>
              <svg 
                viewBox="0 0 400 15" 
                className="w-full max-w-md mx-auto md:mx-0"
                preserveAspectRatio="none"
              >
                <path 
                  d="M5,8 Q100,2 200,8 T395,8" 
                  stroke="hsl(var(--coral-primary))" 
                  strokeWidth="4" 
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Weekly business adventures for kids ages 8-13. From Disney to MrBeast, kids explore how ideas grow into empires.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={onEnrollClick}
                className="w-full md:w-auto px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-coral-lg hover:shadow-coral transition-all duration-300 hover:scale-105"
              >
                Enroll For FREE
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Class meets every <span className="font-semibold text-foreground">Thursday</span> · 5 PM – 6 PM (PST)
              </p>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative fade-in order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-coral-lg">
              <img 
                src={heroImage} 
                alt="Kids collaborating on business ideas with creative elements" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral-secondary rounded-full blur-2xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral-accent-light rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
