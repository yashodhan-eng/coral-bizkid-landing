import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const ParentTestimonial = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "As a parent with an MBA, I genuinely wish I had something like this growing up. My 9-year-old son dreams of becoming an entrepreneur — he loves watching Shark Tank, setting up lemonade stands, and learning how companies are built. We've tried a few online classes before, but Coral Academy's Mini Business Series truly stands out.";
  
  const fullText = "As a parent with an MBA, I genuinely wish I had something like this growing up. My 9-year-old son dreams of becoming an entrepreneur — he loves watching Shark Tank, setting up lemonade stands, and learning how companies are built. We've tried a few online classes before, but Coral Academy's Mini Business Series truly stands out.\n\nEach week, they explore a real company — from LEGO's bankruptcy turnaround to how founders built their brands. What I love most is that it's not just storytelling — kids get to think, create, and present their ideas. In a recent class on Nike, my son designed his own shoe, decided its USP, and even set a price for it! I was amazed hearing the creative ideas the kids shared.\n\nThe class is engaging, hands-on, and teaches real-world thinking in such a fun way. I often find myself listening in while doing chores because the discussions are genuinely interesting!";

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          Parent Testimonial
        </h2>
        
        <div className="relative">
          {/* Orange glow animation */}
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
          
          <Card className="relative p-6 md:p-8 shadow-coral-lg">
            <div className="space-y-4">
              {/* Name and location at top */}
              <div className="pb-4 border-b border-border">
                <p className="font-semibold text-foreground">Sarah</p>
                <p className="text-sm text-muted-foreground">California</p>
              </div>
              
              {/* Testimonial text with gradient fade effect when collapsed */}
              <div className="relative">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {isExpanded ? fullText : shortText}
                </p>
                
                {/* Gradient fade overlay when collapsed */}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* Show More/Less button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mx-auto"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                <span>{isExpanded ? "Show less" : "Show more"}</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonial;
