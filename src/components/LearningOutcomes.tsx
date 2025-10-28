import { Lightbulb, MessageSquare, TrendingUp, Globe } from "lucide-react";

const outcomes = [
  {
    icon: Lightbulb,
    title: "Think Like Founders",
    description: "Discover how famous brands began.",
  },
  {
    icon: MessageSquare,
    title: "Pitch & Design",
    description: "Build logos, products, and creative ideas.",
  },
  {
    icon: TrendingUp,
    title: "Money Made Simple",
    description: "Learn basics of profit, pricing, and marketing.",
  },
  {
    icon: Globe,
    title: "Real-World Skills",
    description: "Build confidence, leadership, and teamwork.",
  },
];

const LearningOutcomes = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-background to-coral-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Kids Learn in Mini Business Series
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 fade-in">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div 
                key={index}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-md hover:shadow-coral transition-all duration-300 hover:scale-105 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-muted-foreground">{outcome.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-3xl mx-auto text-center space-y-6 fade-in-up">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Designed by top educators from Stanford-led Coral Academy, these weekly live classes make learning practical, social, and inspiring — with real interaction and zero boredom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;
