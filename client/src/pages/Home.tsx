import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Lightbulb, Leaf, ArrowRight, Users, Target, TrendingUp } from "lucide-react";

export default function Home() {
  const goals = [
    {
      icon: Zap,
      title: "Universal Energy Access",
      description: "Ensure universal access to affordable, reliable, and modern energy services by 2030.",
    },
    {
      icon: Leaf,
      title: "Renewable Energy",
      description: "Substantially increase the share of renewable energy in the global energy mix.",
    },
    {
      icon: TrendingUp,
      title: "Energy Efficiency",
      description: "Double the global rate of improvement in energy efficiency across all sectors.",
    },
  ];

  const stats = [
    { label: "People Without Electricity", value: "733M", icon: Users },
    { label: "Renewable Energy Share", value: "29%", icon: Leaf },
    { label: "Energy Efficiency Gap", value: "2x", icon: Target },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sustainable Development Goal 7</span>
            </div>
            
            <h1 data-testid="text-hero-title" className="font-serif font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Affordable and <span className="text-primary">Clean Energy</span>
            </h1>
            
            <p data-testid="text-hero-slogan" className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Powering Progress, Protecting Our Planet
            </p>
            
            <p className="text-lg text-foreground/90 mb-10 max-w-2xl leading-relaxed">
              Access to affordable, reliable, sustainable and modern energy is essential for achieving many of the Sustainable Development Goals. Discover how innovative STEM solutions are transforming our energy future.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/challenge">
                <Button data-testid="button-explore-challenge" size="lg" className="gap-2">
                  Explore the Challenge
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button data-testid="button-stem-solutions" size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-background/50">
                  STEM Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 hover-elevate">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div data-testid={`text-stat-${index}`} className="text-4xl font-bold font-mono text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4">
              Key Targets for 2030
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SDG 7 encompasses three critical objectives that will shape our sustainable energy future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <Card key={index} data-testid={`card-goal-${index}`} className="p-8 hover-elevate">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-2xl mb-4">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Learn about the global energy challenges and discover how you can contribute to a sustainable future
          </p>
          <Link href="/take-action">
            <Button data-testid="button-get-started" size="lg" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
