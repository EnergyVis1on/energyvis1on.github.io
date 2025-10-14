import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const teamMembers = [
  {
    name: "Clark Rellosa",
    role: "Web Developer & Web Designer",
    bio: "Designed and developed the website layout and interface.",
    photo: "public/team/clark.jpg",
  },
  {
    name: "CJ Avelino",
    role: "Multimedia Specialist",
    bio: "Created graphics, videos, and other media materials.",
    photo: "public/team/cj.jpg",
  },
  {
    name: "Emmanuel Berdin",
    role: "Quality Assurance Editor",
    bio: "Reviewed and edited content to ensure accuracy and clarity.",
    photo: "public/team/emmanuel.jpg",
  },
  {
    name: "Vaughn Pareja",
    role: "Group Leader",
    bio: "Led the team and coordinated all project activities.",
    photo: "public/team/vaughn.jpg",
  },
  {
    name: "Ronie Conje",
    role: "Content Researcher",
    bio: "Researched and gathered information for project content.",
    photo: "public/team/ronie.jpg",
  },
  {
    name: "Inaki Yokokawa",
    role: "Content Writer",
    bio: "Wrote and organized the written content for the project.",
    photo: "public/team/inaki.jpg",
  },
];

  const contributions = [
    {
      member: "Clark Rellosa",
      tasks: ["Website development", "UI/UX design", "Front-end implementation"],
    },
    {
      member: "CJ Avelino",
      tasks: ["Multimedia production", "Video editing", "Graphic design"],
    },
    {
      member: "Emmanuel Berdin",
      tasks: ["Editing and proofreading", "Content quality assurance", "Final review"],
    },
    {
      member: "Vaughn Pareja",
      tasks: ["Team coordination", "Project planning", "Leadership and strategy"],
    },
    {
      member: "Ronie Conje",
      tasks: ["Research and data gathering", "Fact-checking", "Information synthesis"],
    },
    {
      member: "Inaki Yokokawa",
      tasks: ["Content writing", "Script creation", "Copy development"],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
            We are a team of students dedicated to promoting SDG 7: Affordable and Clean Energy. Each of us contributed specific skills to bring this project to life.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              data-testid={`card-member-${index}`}
              className="p-6 text-center hover-elevate"
            >
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20">
                  <AvatarImage src="" alt={member.name} />
                </Avatar>

                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Contributions Section */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Project Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions.map((contribution, index) => (
              <Card
                key={index}
                data-testid={`card-contribution-${index}`}
                className="p-6"
              >
                <h3 className="font-bold text-lg mb-4">
                  {contribution.member}
                </h3>
                <ul className="space-y-2">
                  {contribution.tasks.map((task, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-center">
            Our Mission
          </h2>
          <Card className="p-8 text-center">
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              Our mission is to raise awareness about SDG 7: Affordable and Clean Energy. We aim to educate others about the importance of sustainable energy through research, design, and collaboration.
            </p>
            <p className="text-muted-foreground">
              This project shows how teamwork and innovation can contribute to a cleaner and brighter future.
            </p>
          </Card>
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
