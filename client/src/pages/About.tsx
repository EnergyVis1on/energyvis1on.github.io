import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Linkedin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
    {
      name: "Emma Rodriguez",
      role: "Project Lead & Researcher",
      bio: "Environmental science major passionate about renewable energy solutions and sustainable development.",
      initials: "ER",
      email: "emma.r@example.com",
      linkedin: "#",
    },
    {
      name: "Marcus Chen",
      role: "Data Analyst",
      bio: "Computer science student specializing in data visualization and energy consumption analytics.",
      initials: "MC",
      email: "marcus.c@example.com",
      linkedin: "#",
    },
    {
      name: "Aisha Patel",
      role: "Content Writer",
      bio: "Communications major focused on science communication and environmental advocacy.",
      initials: "AP",
      email: "aisha.p@example.com",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Web Developer",
      bio: "Software engineering student building digital solutions for social impact and sustainability.",
      initials: "DK",
      email: "david.k@example.com",
      linkedin: "#",
    },
  ];

  const contributions = [
    {
      member: "Emma Rodriguez",
      tasks: ["Research coordination", "Data collection", "Expert interviews"],
    },
    {
      member: "Marcus Chen",
      tasks: ["Data visualization", "Chart creation", "Statistical analysis"],
    },
    {
      member: "Aisha Patel",
      tasks: ["Content writing", "Copyediting", "Social media strategy"],
    },
    {
      member: "David Kim",
      tasks: ["Website development", "UI/UX design", "Technical implementation"],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          
          <h1 data-testid="text-page-title" className="font-serif font-bold text-5xl md:text-6xl mb-6">
            About <span className="text-primary">Our Group</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a dedicated team of students committed to raising awareness about SDG 7 and promoting sustainable energy solutions through education and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} data-testid={`card-member-${index}`} className="p-6 text-center hover-elevate">
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20">
                  <AvatarImage src="" alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex items-center space-x-2 pt-4 border-t border-border w-full justify-center">
                  <Button
                    data-testid={`button-email-${index}`}
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => console.log(`Email ${member.email}`)}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    data-testid={`button-linkedin-${index}`}
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => console.log(`LinkedIn ${member.linkedin}`)}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Project Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions.map((contribution, index) => (
              <Card key={index} data-testid={`card-contribution-${index}`} className="p-6">
                <h3 className="font-bold text-lg mb-4">{contribution.member}</h3>
                <ul className="space-y-2">
                  {contribution.tasks.map((task, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Our Mission
          </h2>
          <Card className="p-8 text-center">
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              Our mission is to educate and inspire action on SDG 7: Affordable and Clean Energy. Through research, data visualization, and accessible content, we aim to demonstrate how STEM innovations are addressing global energy challenges and how individuals can contribute to a sustainable future.
            </p>
            <p className="text-muted-foreground">
              This project was created as part of our commitment to the United Nations Sustainable Development Goals and our belief that every student can be an agent of change.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-6">
              Have questions or want to collaborate on SDG initiatives? We'd love to hear from you!
            </p>
            <Button data-testid="button-contact" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Our Team
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
