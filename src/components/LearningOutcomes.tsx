import { useState } from "react";
import { Lightbulb, MessageSquare, TrendingUp, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const learningPoints = [
  {
    icon: Lightbulb,
    description: "Explore iconic brands like Disney, Netflix, and SpaceX to uncover what turned big ideas into billion-dollar businesses.",
  },
  {
    icon: MessageSquare,
    description: "Design logos, pitch products, & tackle creative challenges by thinking like founders and C-suite leaders.",
  },
  {
    icon: TrendingUp,
    description: "Build real business skills such as branding, pricing, marketing, & strategy through real-world examples & case studies.",
  },
];

const schedule = [
  {
    week: "Week 1",
    company: "DreamWorks",
    topics: "Storytelling, franchises & creativity in business",
  },
  {
    week: "Week 2",
    company: "Apple",
    topics: "Product design, innovation & brand identity",
  },
  {
    week: "Week 3",
    company: "Starbucks",
    topics: "Experience-driven branding & global expansion",
  },
];

const LearningOutcomes = () => {
  const [isScheduleExpanded, setIsScheduleExpanded] = useState(false);

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-background to-coral-secondary/10">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-8 fade-in-up">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Kids Learn
          </h2>
        </div>
        
        <div className="space-y-4 fade-in">
          {/* Learning Points */}
          {learningPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div 
                key={index}
                className="flex gap-3 md:gap-4 items-start bg-card p-4 md:p-5 rounded-lg border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* Schedule Section */}
          <Card className="p-4 md:p-5 border-primary/20">
            <button
              onClick={() => setIsScheduleExpanded(!isScheduleExpanded)}
              className="w-full flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg md:text-xl">📅</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground text-left">
                  Next 3 Weeks' Schedule At A Glance
                </h3>
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                  isScheduleExpanded ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {isScheduleExpanded && (
              <div className="mt-4 space-y-3 animate-accordion-down">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className="pl-11 md:pl-13 border-l-2 border-primary/20 py-2"
                  >
                    <p className="font-semibold text-sm md:text-base text-foreground">
                      {item.company}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {item.topics}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
