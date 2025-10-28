import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";

interface HeroProps {
  onEnrollClick: () => void;
}

const Hero = ({ onEnrollClick }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-secondary/20 via-background to-coral-accent-light/10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mini Business Series
            </h1>
            
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
          
          {/* Right video player */}
          <div className="relative fade-in order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-coral-lg">
              <video 
                ref={videoRef}
                src={heroVideo}
                className="w-full h-auto object-cover"
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Play button overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                  aria-label="Play video"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                    <div className="relative bg-primary hover:bg-primary/90 rounded-full p-6 transition-all duration-300 group-hover:scale-110 shadow-coral-lg">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                </button>
              )}
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
