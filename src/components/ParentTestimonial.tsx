import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ParentTestimonial = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "As a parent with an MBA, I genuinely wish I had something like this growing up. My 9-year-old son dreams of becoming an entrepreneur — he loves watching Shark Tank, setting up lemonade stands, and learning how companies are built. We've tried a few online classes before, but Coral Academy's Mini Business Series truly stands out.";
  
  const fullText = "As a parent with an MBA, I genuinely wish I had something like this growing up. My 9-year-old son dreams of becoming an entrepreneur — he loves watching Shark Tank, setting up lemonade stands, and learning how companies are built. We've tried a few online classes before, but Coral Academy's Mini Business Series truly stands out.\n\nEach week, they explore a real company — from LEGO's bankruptcy turnaround to how founders built their brands. What I love most is that it's not just storytelling — kids get to think, create, and present their ideas. In a recent class on Nike, my son designed his own shoe, decided its USP, and even set a price for it! I was amazed hearing the creative ideas the kids shared.\n\nThe class is engaging, hands-on, and teaches real-world thinking in such a fun way. I often find myself listening in while doing chores because the discussions are genuinely interesting!";

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          What Parents Are Saying
        </h2>
        
        <Card className="p-6 md:p-8 shadow-lg">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
              {isExpanded ? fullText : shortText}
            </p>
            
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="default"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
            
            <div className="pt-4 border-t border-border">
              <p className="font-semibold text-foreground">Sarah</p>
              <p className="text-sm text-muted-foreground">California</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ParentTestimonial;
