import { Download, ExternalLink, Calendar, MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHead } from "@/components/page-head";

const education = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "CMR Institute of Technology (CMRIT)",
    location: "Bengaluru",
    period: "2023 - 2027 (Pursuing)",
    grade: "CGPA: 9.25",
    highlight: "College Topper (Sem I), Centum in Engineering Physics (Sem II)",
  },
  {
    degree: "12th Grade - Science",
    institution: "Shishya BEML Public School",
    location: "Bengaluru",
    period: "2023",
    grade: "91.8%",
    highlight: "Centum in Computer Science with Python",
  },
  {
    degree: "10th Grade",
    institution: "Isha Home School",
    location: "Coimbatore, Tamil Nadu",
    period: "2021",
    grade: "95.6%",
    highlight: "Centum in Computer Applications",
  },
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Java", "Python", "Bash", "SQL"],
  },
  {
    title: "Cyber Forensics & Intelligence Tools",
    skills: ["Burp Suite", "Wireshark", "Nmap", "Metasploit", "Shodan"],
  },
  {
    title: "Domains & Techniques",
    skills: ["Threat Intelligence", "Incident Response", "Vulnerability Assessment", "Digital Forensics"],
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Ubuntu", "Kali Linux"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "MariaDB", "SQLite"],
  },
  {
    title: "Tools & IDEs",
    skills: ["VS Code", "Eclipse", "Anaconda", "BlueJ", "Git", "GitHub"],
  },
];

const projects = [
  {
    title: "Web Application Firewall (WAF)",
    description: "Built a Flask-based firewall detecting OWASP Top 10 attacks with 100% regex accuracy. Reduced brute-force attempts by 90% through IP rate limiting, and rotating logging system.",
    techStack: ["Python", "Flask", "Regex", "SQLite", "Logging"],
    link: null,
  },
  {
    title: "Bookstore Management System",
    description: "Developed a role-based application with SHA-256 authentication and audit logs. Ensured secure transactional order processing with rollback support.",
    techStack: ["Python", "Tkinter", "MySQL"],
    link: null,
  },
];

const internships = [
  {
    company: "Edunet Foundation",
    role: "Cybersecurity Intern",
    period: "Jan 2025 - Feb 2025",
    achievements: [
      "Implemented image steganography to securely conceal data using OpenCV and cryptography",
      "Maintained proper documentation of digital evidence handling",
      "Earned Cybersecurity Fundamentals - IBM SkillsBuild Badge",
      "Acquired knowledge on Cyber Kill Chain and MITRE ATT&CK Framework",
    ],
    projectLink: "https://github.com/Shrilekha-369/Steganography",
  },
];

export default function Resume() {
  return (
    <div className="py-12 lg:py-20">
      <PageHead
        title="Resume"
        description="View Shrilekha Mudunuri's resume - B.E. Computer Science at CMRIT (9.25 CGPA), technical skills in Python, Java, cybersecurity tools, projects, and internship experience."
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight" data-testid="text-resume-title">Resume</h1>
            <p className="text-muted-foreground mt-2">
              Education, skills, projects, and professional experience
            </p>
          </div>
          <a href="/api/resume/download" download>
            <Button data-testid="button-download-resume-page">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-education-title">Education</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative md:pl-12">
                  <div className="absolute left-2.5 top-6 w-3 h-3 rounded-full bg-primary hidden md:block" />
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg" data-testid={`text-edu-degree-${index}`}>
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </span>
                          </div>
                          {edu.highlight && (
                            <p className="mt-2 text-sm text-primary">{edu.highlight}</p>
                          )}
                        </div>
                        <Badge variant="secondary" className="font-mono">
                          {edu.grade}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-skills-title">Technical Skills</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base" data-testid={`text-skill-category-${index}`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="font-mono text-xs"
                        data-testid={`badge-skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-projects-title">Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-lg" data-testid={`text-project-title-${index}`}>
                      {project.title}
                    </CardTitle>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold" data-testid="text-internships-title">Internships</h2>
          </div>

          <div className="space-y-6">
            {internships.map((internship, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg" data-testid={`text-internship-company-${index}`}>
                        {internship.company}
                      </CardTitle>
                      <p className="text-muted-foreground">{internship.role}</p>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {internship.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {internship.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  {internship.projectLink && (
                    <a
                      href={internship.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                      data-testid={`link-project-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project on GitHub
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
