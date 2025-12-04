import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description?: string;
}

export function PageHead({ title, description }: PageHeadProps) {
  useEffect(() => {
    document.title = `${title} | Shrilekha Mudunuri - Cybersecurity & CSE Portfolio`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute("content", description);
    } else if (description) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => {
      document.title = "Shrilekha Mudunuri - Cybersecurity & CSE Portfolio";
    };
  }, [title, description]);

  return null;
}
