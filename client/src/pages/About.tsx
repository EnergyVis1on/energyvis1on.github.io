import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
    {
      name: "Clark Rellosa",
      role: "WEB DEVELOPER & WEB DESIGNER",
      task: "Develops and designs the project website.",
      image: "https://i.imgur.com/abcd123.jpg", // 🖼️ replace with your link
    },
    {
      name: "CJ Avelino",
      role: "MULTIMEDIA SPECIALIST",
      task: "Creates and edits multimedia content.",
      image: "https://i.imgur.com/mX6ETzs.jpeg",
    },
    {
      name: "Emmanuel Berdin",
      role: "QUALITY ASSURANCE EDITOR",
      task: "Reviews and ensures content accuracy.",
      image: "https://i.imgur.com/zVYjXhk.jpeg",
    },
    {
      name: "Vaughn Pareja",
      role: "GROUP LEADER",
      task: "Leads and coordinates the team.",
      image: "https://i.imgur.com/mnop012.jpg",
    },
    {
      name: "Ronie Conje",
      role: "CONTENT RESEARCHER",
      task: "Gathers and verifies research materials.",
      image: "https://i.imgur.com/mBDPyDa.jpeg",
    },
    {
      name: "Inaki Yokokawa",
      role: "CONTENT WRITER",
      task: "Writes and organizes project content.",
      image: "https://i.imgur.com/wilj459.jpeg",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>

          <h1
            data-testid="text-page-title"
            className="font-serif font-bold text-5xl md:text-6xl mb-6"
          >
            About <span className="text-primary">Our Group</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a team of students working together to promote SDG 7: Affordable and Clean Energy.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              data-testid={`card-member-${index}`}
              className="p-6 text-center hover-elevate"
            >
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20">
                  <AvatarImage src={member.image} alt={member.name} />
                </Avatar>

                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.task}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
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
