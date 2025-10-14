import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, School, Users, CheckCircle2, Send, Lightbulb, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase, type ActionCommitment } from "@/lib/supabase";

export default function TakeAction() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [surveyData, setSurveyData] = useState({
    name: "",
    energyUsage: "",
    commitment: "",
    ideas: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const commitmentData: Omit<ActionCommitment, 'id' | 'created_at'> = {
        name: surveyData.name,
        energy_usage: surveyData.energyUsage,
        commitment: surveyData.commitment,
        ideas: surveyData.ideas,
      };

      const { data, error } = await supabase
        .from('action_commitments')
        .insert([commitmentData])
        .select();

      if (error) {
        throw error;
      }

      console.log("Survey submitted successfully:", data);
      toast({
        title: "Thank you for your commitment!",
        description: "Your response has been recorded. Together we can make a difference.",
      });
      setSurveyData({ name: "", energyUsage: "", commitment: "", ideas: "" });
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast({
        title: "Submission failed",
        description: "There was an error saving your commitment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const actionCategories = [
    {
      icon: Home,
      title: "At Home",
      color: "chart-1",
      actions: [
        "Switch to LED bulbs (75% less energy)",
        "Unplug devices when not in use",
        "Use smart power strips",
        "Install a programmable thermostat",
        "Choose ENERGY STAR appliances",
        "Seal windows and doors for better insulation",
      ],
    },
    {
      icon: School,
      title: "At School",
      color: "chart-2",
      actions: [
        "Start an energy audit club",
        "Organize renewable energy awareness campaigns",
        "Advocate for solar panels on school buildings",
        "Create educational content about SDG 7",
        "Monitor and reduce classroom energy usage",
        "Participate in energy-saving competitions",
      ],
    },
    {
      icon: Users,
      title: "In Your Community",
      color: "chart-3",
      actions: [
        "Advocate for local renewable energy projects",
        "Support community solar initiatives",
        "Organize neighborhood energy-saving challenges",
        "Volunteer for environmental organizations",
        "Promote public transportation and cycling",
        "Share energy-saving tips on social media",
      ],
    },
  ];

  const quickTips = [
    "A laptop uses 80% less energy than a desktop computer",
    "Air-drying clothes saves 5% of household electricity",
    "Lowering thermostat by 1°C reduces heating bills by 8%",
    "Cold water washing saves 90% of laundry energy",
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Make an Impact</span>
          </div>
          
          <h1 data-testid="text-page-title" className="font-serif font-bold text-5xl md:text-6xl mb-6">
            Take <span className="text-primary">Action</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Every action counts. Discover practical steps you can take today to contribute to a sustainable energy future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {actionCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} data-testid={`card-category-${index}`} className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-bold text-xl">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.actions.map((action, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">
            Energy-Saving Quick Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <Card key={index} data-testid={`card-tip-${index}`} className="p-4 hover-elevate">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-foreground/90">{tip}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">
            Your Energy Action Commitment
          </h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-medium mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="name"
                  data-testid="input-name"
                  placeholder="Enter your name"
                  value={surveyData.name}
                  onChange={(e) => setSurveyData({ ...surveyData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  What's your current energy usage awareness?
                </Label>
                <RadioGroup
                  value={surveyData.energyUsage}
                  onValueChange={(value) => setSurveyData({ ...surveyData, energyUsage: value })}
                  required
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="low" id="low" data-testid="radio-usage-low" />
                    <Label htmlFor="low" className="cursor-pointer flex-1">
                      I rarely think about my energy consumption
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="medium" id="medium" data-testid="radio-usage-medium" />
                    <Label htmlFor="medium" className="cursor-pointer flex-1">
                      I'm somewhat aware but could do more
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="high" id="high" data-testid="radio-usage-high" />
                    <Label htmlFor="high" className="cursor-pointer flex-1">
                      I actively monitor and reduce my energy use
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">
                  Which action will you commit to this month?
                </Label>
                <RadioGroup
                  value={surveyData.commitment}
                  onValueChange={(value) => setSurveyData({ ...surveyData, commitment: value })}
                  required
                >
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="home" id="home" data-testid="radio-commit-home" />
                    <Label htmlFor="home" className="cursor-pointer flex-1">
                      Reduce home energy by 10%
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="school" id="school" data-testid="radio-commit-school" />
                    <Label htmlFor="school" className="cursor-pointer flex-1">
                      Start an energy awareness initiative at school
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="community" id="community" data-testid="radio-commit-community" />
                    <Label htmlFor="community" className="cursor-pointer flex-1">
                      Organize a community energy-saving event
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg hover-elevate">
                    <RadioGroupItem value="advocate" id="advocate" data-testid="radio-commit-advocate" />
                    <Label htmlFor="advocate" className="cursor-pointer flex-1">
                      Advocate for renewable energy policies
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="ideas" className="text-base font-medium mb-2 block">
                  Share your ideas for promoting clean energy
                </Label>
                <Textarea
                  id="ideas"
                  data-testid="textarea-ideas"
                  placeholder="What innovative ideas do you have to promote SDG 7 in your community?"
                  value={surveyData.ideas}
                  onChange={(e) => setSurveyData({ ...surveyData, ideas: e.target.value })}
                  rows={4}
                />
              </div>

              <Button data-testid="button-submit-survey" type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Your Commitment
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Share Your Impact
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Inspire others by sharing your energy-saving journey and commitment to SDG 7 on social media.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button data-testid="button-share-twitter" variant="outline" size="default">
                Share on Twitter
              </Button>
              <Button data-testid="button-share-facebook" variant="outline" size="default">
                Share on Facebook
              </Button>
              <Button data-testid="button-share-linkedin" variant="outline" size="default">
                Share on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
