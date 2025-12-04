import { useState } from "react";
import { Trophy, Award, Users, Briefcase, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHead } from "@/components/page-head";

const hackathons = [
  {
    title: "1st Place All-rounder",
    event: "AptiCode Showdown 2.0, CMRIT",
    year: "2025",
    description: "Overall winner of the hackathon combining coding, aptitude, and problem-solving",
  },
  {
    title: "Finalist - Top 50/300+",
    event: "IEEE Sustainable Solutions for Humanity Codeathon",
    year: "2024",
    description: "Led a 3-member team across Asia-Pacific competition",
  },
  {
    title: "Top 6/100+",
    event: "Aptitude Hackathon, CMRIT",
    year: "2024",
    description: "Ranked among top performers in aptitude and reasoning competition",
  },
  {
    title: "National Participant",
    event: "Smart India Hackathon",
    year: "2024 & 2025",
    description: "Competed in India's largest open innovation model",
  },
];

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    provider: "CISCO",
    category: "Cybersecurity",
  },
  {
    title: "TryHackMe Labs",
    provider: "TryHackMe",
    category: "Cybersecurity",
    highlight: "Ranked Top 9% globally",
  },
  {
    title: "Hands-On Penetration Testing with Metasploit",
    provider: "Infosys Springboard",
    category: "Cybersecurity",
  },
  {
    title: "OPSWAT Security Certifications",
    provider: "OPSWAT",
    category: "Cybersecurity",
    highlight: "OESA, OFSA, OLSA, ONSA, OSSA, OWPA",
  },
  {
    title: "Complete Ethical Hacking Bootcamp",
    provider: "Udemy",
    category: "Cybersecurity",
  },
  {
    title: "Google Threat Intelligence Badge",
    provider: "Google Cloud Skills Boost",
    category: "Cybersecurity",
  },
  {
    title: "Practical Cyber Security",
    provider: "NPTEL (IIT Kanpur)",
    category: "Cybersecurity",
  },
  {
    title: "Introduction to Machine Learning",
    provider: "NPTEL (IIT Madras)",
    category: "AI/ML",
  },
  {
    title: "Cybersecurity Fundamentals",
    provider: "IBM SkillsBuild",
    category: "Cybersecurity",
  },
  {
    title: "Preparing for ISC2 Certified in Cybersecurity",
    provider: "ISC2",
    category: "Cybersecurity",
    highlight: "In Progress",
  },
];

const leadership = [
  {
    role: "President",
    organization: "SWE Student Chapter, CMRIT",
    period: "2024 - Present",
    description: "Leading a diverse student team, driving initiatives to strengthen women's representation in engineering, and representing CMRIT on a global platform.",
  },
  {
    role: "Associate Director",
    organization: "CSE Student Senate, CMRIT",
    period: "Current",
    description: "Leading student representation, coordinating academic initiatives, and supporting policy improvements.",
  },
  {
    role: "Core Team Member",
    organization: "Torvalds Club, CMRIT",
    period: "March 2025 - Present",
    description: "Lead Organizer of 'Flowcode' hackathon with 40+ teams. Assisted in conducting multiple college-level technical events.",
  },
  {
    role: "Class Representative",
    organization: "CMRIT",
    period: "2 Semesters",
    description: "Represented 75+ students, rescheduled 10+ classes with 5+ professors to ensure syllabus coverage, escalated issues leading to 2 new policies.",
  },
  {
    role: "SWE CLI Cohort Member",
    organization: "Society of Women Engineers",
    period: "2024-25",
    description: "Selected for SWE Collegiate Leadership Institute. Developed confidence, resilience, and leadership communication skills.",
  },
];

const seminars = [
  {
    title: "WeLocal Bengaluru",
    organizer: "Society of Women Engineers (SWE)",
    years: "2024 & 2025",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("hackathons");

  return (
    <div className="py-12 lg:py-20">
      <PageHead
        title="Experience & Activities"
        description="Shrilekha Mudunuri's hackathons, certifications, and leadership roles. President of SWE Student Chapter CMRIT, TryHackMe Top 9%, and multiple OPSWAT certifications."
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight" data-testid="text-experience-title">
            Experience & Activities
          </h1>
          <p className="text-muted-foreground mt-2">
            Hackathons, certifications, leadership roles, and extracurricular activities
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="hackathons" className="flex items-center gap-2" data-testid="tab-hackathons">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Hackathons</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2" data-testid="tab-certifications">
              <Award className="h-4 w-4" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="leadership" className="flex items-center gap-2" data-testid="tab-leadership">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Leadership</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2" data-testid="tab-events">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hackathons" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {hackathons.map((hackathon, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {hackathon.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-hackathon-title-${index}`}>
                      {hackathon.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-primary mb-2">{hackathon.event}</p>
                    <p className="text-sm text-muted-foreground">{hackathon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline" className="w-fit text-xs">
                        {cert.category}
                      </Badge>
                      <h3 className="font-semibold" data-testid={`text-cert-title-${index}`}>
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      {cert.highlight && (
                        <Badge variant="secondary" className="w-fit text-xs">
                          {cert.highlight}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leadership" className="mt-0">
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg" data-testid={`text-leadership-role-${index}`}>
                          {role.role}
                        </CardTitle>
                        <p className="text-primary font-medium">{role.organization}</p>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {role.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg" data-testid="text-seminars-title">
                    Seminars & Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {seminars.map((seminar, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium">{seminar.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {seminar.organizer} - {seminar.years}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg" data-testid="text-clubs-title">
                    Club Memberships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Society of Women Engineers (SWE)</p>
                        <p className="text-sm text-muted-foreground">Collegiate Member since 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Torvalds Club, CMRIT</p>
                        <p className="text-sm text-muted-foreground">Core Team Member since March 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
