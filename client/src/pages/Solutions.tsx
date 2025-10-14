import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Wind, Zap, Battery, Lightbulb, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Solutions() {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      icon: Sun,
      title: "Solar Power Technology",
      subtitle: "Harnessing the sun's unlimited energy",
      description: "Advanced photovoltaic cells and solar thermal systems are making solar energy more efficient and affordable than ever before.",
      details: "Modern solar panels achieve 22-26% efficiency, with emerging perovskite cells reaching 30%. Costs have dropped 90% since 2010, making solar the cheapest energy source in history.",
      benefits: ["Zero emissions", "Declining costs", "Scalable deployment", "Grid independence"],
      capacity: "1,200 GW globally installed",
    },
    {
      icon: Wind,
      title: "Wind Energy Systems",
      subtitle: "Converting air flow into clean electricity",
      description: "Both offshore and onshore wind turbines are revolutionizing renewable energy generation with unprecedented efficiency.",
      details: "Modern turbines generate 15MW offshore, enough to power 16,000 homes each. Floating wind farms unlock deeper waters with stronger, more consistent winds.",
      benefits: ["Minimal land use", "High capacity factor", "Job creation", "Coastal energy solution"],
      capacity: "950 GW globally installed",
    },
    {
      icon: Battery,
      title: "Energy Storage Solutions",
      subtitle: "Storing renewable energy for 24/7 availability",
      description: "Advanced battery systems and pumped hydro storage enable reliable renewable energy by storing excess power for peak demand.",
      details: "Lithium-ion costs dropped 97% since 1991. Grid-scale batteries now provide hours of backup power, while flow batteries offer days of storage.",
      benefits: ["Grid stability", "Peak shaving", "Renewable integration", "Backup power"],
      capacity: "500 GWh storage capacity",
    },
    {
      icon: Zap,
      title: "Smart Grid Technology",
      subtitle: "Intelligent energy distribution networks",
      description: "AI-powered grids optimize energy distribution, reduce waste, and integrate renewable sources seamlessly.",
      details: "Smart grids use IoT sensors, machine learning, and real-time data to balance supply and demand, reducing transmission losses by up to 30%.",
      benefits: ["Reduced losses", "Demand response", "Renewable integration", "Outage prevention"],
      capacity: "Deployed in 50+ countries",
    },
    {
      icon: Lightbulb,
      title: "Energy Efficiency Tech",
      subtitle: "Doing more with less energy",
      description: "LED lighting, smart thermostats, and efficient appliances dramatically reduce energy consumption in buildings and industry.",
      details: "LED bulbs use 75% less energy than incandescent. Smart building systems cut HVAC consumption by 40%, while industrial IoT reduces manufacturing energy by 20%.",
      benefits: ["Cost savings", "Immediate impact", "Comfort improvement", "Emissions reduction"],
      capacity: "30% efficiency gain potential",
    },
    {
      icon: Cpu,
      title: "Green Hydrogen",
      subtitle: "Clean fuel for heavy industry",
      description: "Electrolyzers powered by renewables produce hydrogen fuel without carbon emissions, perfect for sectors hard to electrify.",
      details: "Green hydrogen can decarbonize steel, cement, and shipping industries. Production costs are projected to drop 60% by 2030, making it competitive.",
      benefits: ["Zero emissions", "Long-term storage", "Industrial fuel", "Transport solution"],
      capacity: "Growing to 40 GW by 2030",
    },
  ];

  const comparison = [
    { tech: "Solar PV", cost: "Lowest", scalability: "High", maturity: "Mature", impact: "High" },
    { tech: "Wind", cost: "Low", scalability: "High", maturity: "Mature", impact: "High" },
    { tech: "Battery Storage", cost: "Medium", scalability: "Medium", maturity: "Growing", impact: "Critical" },
    { tech: "Smart Grids", cost: "Medium", scalability: "High", maturity: "Growing", impact: "High" },
    { tech: "Green Hydrogen", cost: "High", scalability: "Medium", maturity: "Emerging", impact: "Future" },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">STEM Innovations</span>
          </div>
          
          <h1 data-testid="text-page-title" className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Innovative <span className="text-primary">Solutions</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Cutting-edge science and technology are transforming our energy landscape, making clean, affordable power a reality for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isExpanded = expandedSolution === index;
            
            return (
              <Card key={index} data-testid={`card-solution-${index}`} className="p-6 hover-elevate">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{solution.title}</h3>
                      <p className="text-sm text-primary mb-2">{solution.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border space-y-4">
                    <p className="text-sm text-foreground/90 leading-relaxed">{solution.details}</p>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Key Benefits:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-primary">{solution.capacity}</span>
                    </div>
                  </div>
                )}

                <Button
                  data-testid={`button-expand-${index}`}
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-full gap-2"
                  onClick={() => setExpandedSolution(isExpanded ? null : index)}
                >
                  {isExpanded ? "Show Less" : "Learn More"}
                  <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">
            Technology Comparison
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-bold">Technology</th>
                    <th className="text-left p-4 font-bold">Cost</th>
                    <th className="text-left p-4 font-bold">Scalability</th>
                    <th className="text-left p-4 font-bold">Maturity</th>
                    <th className="text-left p-4 font-bold">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} data-testid={`row-tech-${index}`} className="border-b border-border last:border-0 hover-elevate">
                      <td className="p-4 font-medium">{row.tech}</td>
                      <td className="p-4">
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                          row.cost === "Lowest" || row.cost === "Low" 
                            ? "bg-primary/10 text-primary" 
                            : row.cost === "Medium"
                            ? "bg-chart-5/10 text-chart-5"
                            : "bg-destructive/10 text-destructive"
                        }`}>
                          {row.cost}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{row.scalability}</td>
                      <td className="p-4 text-muted-foreground">{row.maturity}</td>
                      <td className="p-4 text-muted-foreground">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Innovation in Action
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These technologies are already deployed globally, reducing emissions by 2.5 billion tons of CO₂ annually and providing power to millions.
            </p>
            <Button data-testid="button-take-action" size="lg" className="gap-2">
              Join the Movement
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
