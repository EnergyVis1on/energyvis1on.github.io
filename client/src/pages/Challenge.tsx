import { Card } from "@/components/ui/card";
import { AlertCircle, Users, DollarSign, Flame, Globe, TrendingDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
  Legend,
} from "recharts";

export default function Challenge() {
  const energyAccessData = [
    { region: "Sub-Saharan Africa", withoutAccess: 568, population: 1100 },
    { region: "South Asia", withoutAccess: 92, population: 1900 },
    { region: "East Asia", withoutAccess: 25, population: 1650 },
    { region: "Latin America", withoutAccess: 17, population: 650 },
    { region: "Middle East", withoutAccess: 21, population: 400 },
  ];

  const emissionsData = [
    { year: "2010", coal: 35, gas: 20, renewables: 10 },
    { year: "2015", coal: 38, gas: 22, renewables: 15 },
    { year: "2020", coal: 36, gas: 24, renewables: 29 },
    { year: "2023", coal: 35, gas: 25, renewables: 32 },
  ];

  const challenges = [
    {
      icon: Users,
      title: "733 Million Without Electricity",
      description: "Nearly 1 in 10 people globally still lack access to electricity, primarily in Sub-Saharan Africa and parts of Asia.",
      impact: "Critical",
    },
    {
      icon: DollarSign,
      title: "Energy Poverty",
      description: "2.3 billion people rely on polluting fuels for cooking, causing 3.7 million premature deaths annually.",
      impact: "High",
    },
    {
      icon: Flame,
      title: "Fossil Fuel Dependency",
      description: "80% of global energy still comes from fossil fuels, driving climate change and air pollution.",
      impact: "Critical",
    },
    {
      icon: TrendingDown,
      title: "Slow Transition Speed",
      description: "Current renewable energy adoption rates are insufficient to meet 2030 climate targets.",
      impact: "High",
    },
  ];

  const localChallenges = [
    "Aging power grid infrastructure requiring modernization",
    "Limited renewable energy integration capabilities",
    "High energy costs affecting low-income communities",
    "Insufficient energy efficiency in buildings and transportation",
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Global Energy Crisis</span>
          </div>
          
          <h1 data-testid="text-page-title" className="font-serif font-bold text-5xl md:text-6xl mb-6">
            The <span className="text-primary">Challenge</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Despite significant progress, the world faces unprecedented energy challenges that threaten sustainable development and climate stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card key={index} data-testid={`card-challenge-${index}`} className="p-6 hover-elevate">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-destructive/10 shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{challenge.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        challenge.impact === "Critical" 
                          ? "bg-destructive/10 text-destructive" 
                          : "bg-chart-5/10 text-chart-5"
                      }`}>
                        {challenge.impact}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">
            Energy Access Gap by Region
          </h2>
          <Card className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={energyAccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="region" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Millions of People', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Bar dataKey="withoutAccess" fill="hsl(var(--destructive))" name="Without Access" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">
            Global Energy Source Trends
          </h2>
          <Card className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={emissionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--popover))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="coal" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Coal" />
                <Line type="monotone" dataKey="gas" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Natural Gas" />
                <Line type="monotone" dataKey="renewables" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Renewables" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h2 className="font-serif font-bold text-3xl md:text-4xl">
              Local Challenges
            </h2>
          </div>
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {localChallenges.map((challenge, index) => (
                <div key={index} data-testid={`text-local-challenge-${index}`} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-foreground/90 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
