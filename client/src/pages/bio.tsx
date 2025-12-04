import { User, Target, Award, Trophy, MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHead } from "@/components/page-head";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profilePhoto from "@assets/pic2.jpg";

const personalInfo = [
  { label: "Full Name", value: "Mudunuri Shrilekha", icon: User },
  { label: "Location", value: "Bangalore, Karnataka", icon: MapPin },
  { label: "Phone", value: "+91 8277389690", icon: Phone },
  { label: "Email", value: "shrilekha.cse@gmail.com", icon: Mail },
  { label: "Education Status", value: "Pre-final Year, B.E. CSE", icon: Calendar },
];

const awards = [
  {
    title: "1st Place - Collegiate Poster Competition",
    event: "WE Local Bengaluru 2025",
    description: "Presented research poster on 'Optimizing Cancer Detection Through Gene Expression Data'",
    category: "Research",
  },
  {
    title: "International Representation - AGLOA",
    event: "West Virginia, USA (2016)",
    description: "Only international team among 1000+ U.S. participants. 3rd place in Linguishtiks, Special Mention in Mathematics",
    category: "International",
  },
  {
    title: "Finalist - International CS Competition 2025",
    event: "Global Competition",
    description: "Ranked in Top 10% globally",
    category: "Competition",
  },
  {
    title: "Silver Honour - International Youth Math Challenge",
    event: "2024",
    description: "Ranked in Top 8% globally",
    category: "Mathematics",
  },
  {
    title: "1st Place - Chess Tournament",
    event: "Inter-departmental, CMRIT 2025",
    description: "CSE Girls Team champion",
    category: "Sports",
  },
  {
    title: "Bronze Medal - Kalaripayattu Championship",
    event: "National Level 2017-18",
    description: "National-level martial arts competition",
    category: "Sports",
  },
];

const academicExcellence = [
  "College Topper (Semester I) - B.E. in C.S.E., CMRIT",
  "Centum in Engineering Physics (Semester II)",
  "Centum in Computer Science with Python (Class 12)",
  "Centum in Computer Applications (Class 10)",
];

export default function Bio() {
  return (
    <div className="py-12 lg:py-20">
      <PageHead
        title="Bio-data"
        description="Shrilekha Mudunuri's bio-data - Career objective, personal information, awards and achievements including international representation at AGLOA USA and multiple hackathon wins."
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight" data-testid="text-bio-title">Bio-data</h1>
          <p className="text-muted-foreground mt-2">
            Career objective, personal information, and achievements
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-objective-title">Career Objective</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed" data-testid="text-career-objective">
                Pre-final year CSE student passionate about cybersecurity, threat intelligence, 
                and digital forensics. Skilled in analyzing and mitigating security threats using 
                tools like Wireshark, Burp Suite, and Metasploit. Eager to apply technical knowledge, 
                problem-solving ability, and teamwork to real-world security operations.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="w-24 h-24" data-testid="avatar-bio">
              <AvatarImage src={profilePhoto} alt="Shrilekha Mudunuri" />
              <AvatarFallback className="text-2xl font-bold">SM</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold" data-testid="text-personal-title">Personal Information</h2>
              </div>
              <p className="text-muted-foreground mt-1">Mudunuri Shrilekha</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {personalInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-muted">
                      <info.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium" data-testid={`text-info-${index}`}>{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-awards-title">Awards & Achievements</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <Badge variant="outline" className="text-xs">
                      {award.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-base leading-snug" data-testid={`text-award-title-${index}`}>
                    {award.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-2">{award.event}</p>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-academic-title">Academic Excellence</h2>
          </div>

          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {academicExcellence.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span data-testid={`text-academic-${index}`}>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
