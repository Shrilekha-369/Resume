import { Link } from "wouter";
import { ArrowRight, Download, Mail, Award, GraduationCap, Trophy, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHead } from "@/components/page-head";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@assets/pic2.jpg";

const stats = [
  { value: "9.25", label: "CGPA", icon: GraduationCap },
  { value: "1st", label: "Hackathon Winner", icon: Trophy },
  { value: "Top 9%", label: "TryHackMe Global", icon: Globe },
  { value: "15+", label: "Certifications", icon: Award },
];

const featuredAchievements = [
  {
    title: "1st Place - AptiCode Showdown 2.0",
    description: "All-rounder winner at CMRIT 2025 hackathon",
    category: "Hackathon",
  },
  {
    title: "IEEE Codeathon Finalist",
    description: "Top 50 out of 300+ teams across Asia-Pacific",
    category: "Competition",
  },
  {
    title: "Collegiate Poster Competition Winner",
    description: "1st Place at WE Local Bengaluru 2025 for cancer detection research",
    category: "Research",
  },
];

const skills = [
  "Python", "Java", "Burp Suite", "Wireshark", "Nmap", "Metasploit", "SQL", "Flask"
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageHead
        title="Home"
        description="Shrilekha Mudunuri - Pre-final year CSE student specializing in cybersecurity, threat intelligence, and digital forensics. College topper with 9.25 CGPA at CMRIT Bengaluru."
      />
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="font-mono text-xs">
                  Cybersecurity
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Threat Intelligence
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Digital Forensics
                </Badge>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" data-testid="text-hero-name">
                Mudunuri{" "}
                <span className="text-primary">Shrilekha</span>
              </h1>

              <p className="text-lg text-muted-foreground lg:text-xl" data-testid="text-hero-tagline">
                Pre-final year CSE student passionate about cybersecurity, threat intelligence, 
                and digital forensics. Building secure solutions and protecting digital assets.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-contact-hero">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </Link>
                <a href="/api/resume/download" download>
                  <Button variant="outline" size="lg" data-testid="button-download-resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                  <div className="text-center p-8">
                    <Avatar className="w-40 h-40 mx-auto mb-4" data-testid="avatar-hero">
                      <AvatarImage src={profilePhoto} alt="Shrilekha Mudunuri" />
                      <AvatarFallback className="text-5xl font-bold">SM</AvatarFallback>
                    </Avatar>
                    <p className="text-lg font-medium">CMR Institute of Technology</p>
                    <p className="text-sm text-muted-foreground">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-bold" data-testid={`text-stat-${index}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight" data-testid="text-achievements-title">
                  Featured Achievements
                </h2>
                <p className="text-muted-foreground mt-2">
                  Recent wins and recognitions in academics and competitions
                </p>
              </div>
              <Link href="/experience">
                <Button variant="ghost" data-testid="link-view-all-achievements">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredAchievements.map((achievement, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="pt-6">
                    <Badge variant="outline" className="mb-3">
                      {achievement.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2" data-testid={`text-achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight" data-testid="text-skills-title">
                Technical Expertise
              </h2>
              <p className="text-muted-foreground mt-2">
                Tools and technologies I work with
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-mono"
                  data-testid={`badge-skill-${index}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/resume">
                <Button variant="outline" data-testid="link-view-all-skills">
                  View Full Skillset <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
                  Let's Work Together
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Looking for internship opportunities in cybersecurity, threat intelligence, 
                  or digital forensics. Open to collaborating on security research projects.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" data-testid="button-cta-contact">
                      Contact Me
                    </Button>
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/mudunurishrilekha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground" data-testid="link-cta-linkedin">
                      Connect on LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
