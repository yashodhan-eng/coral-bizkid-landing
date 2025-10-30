import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const ParentTestimonial = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "I have a business background, and honestly, I wish I had something like this when I was a kid.\nMy 9-year-old is super into Shark Tank, lemonade stands, and how companies make money. We've tried a couple of online classes before, but this class remains his favourite.";
  
  const fullText = "I have a business background, and honestly, I wish I had something like this when I was a kid.\nMy 9-year-old is super into Shark Tank, lemonade stands, and how companies make money. We've tried a couple of online classes before, but this class remains his favourite.\n\nEvery week, they discuss real companies like how LEGO bounced back from bankruptcy or how big brands got started. But what I really appreciate is that it's not just passive learning. During the Nike class, my son designed his own shoe, gave it a name, figured out the pricing, and even pitched it to his friends. I was genuinely impressed by the thought he put into it.\n\nI often find myself listening in while doing chores because the discussions are genuinely interesting. I can't thank the teacher and the platform enough for such a hands-on, fun class.";

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
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">S</span>
                </div>
                <div>
                  <p className="font-bold text-lg text-foreground">Sarah</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="text-primary">📍</span>
                    California
                  </p>
                </div>
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
