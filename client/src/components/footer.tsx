import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { href: "https://www.linkedin.com/in/mudunurishrilekha/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Shrilekha-369", icon: Github, label: "GitHub" },
  { href: "https://leetcode.com/u/shrilekha_23/", icon: Code2, label: "LeetCode" },
  { href: "mailto:shrilekha.cse@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold" data-testid="text-footer-name">Mudunuri Shrilekha</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Cybersecurity Enthusiast | Pre-final Year CSE Student
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                data-testid={`link-footer-social-${link.label.toLowerCase()}`}
              >
                <Button variant="ghost" size="icon">
                  <link.icon className="h-5 w-5" />
                </Button>
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {currentYear} Shrilekha Mudunuri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
