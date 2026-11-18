export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: "linkedin" | "instagram" | "github" | "mail";
  primary?: boolean;
}

export const EMAIL = "luckydabhi77@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/lucky-dabhi-b6b054434/";

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    handle: "lucky-dabhi",
    icon: "linkedin",
    primary: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dabhi_lucky555/",
    handle: "@dabhi_lucky555",
    icon: "instagram",
    primary: false,
  },
  {
    name: "Email",
    url: `mailto:${EMAIL}`,
    handle: EMAIL,
    icon: "mail",
    primary: true,
  },
];
