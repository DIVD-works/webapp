export type NavigationRoutes<T> = {
  url: T;
  item: T;
};

export const navigation_routes: NavigationRoutes<string>[] = [
  {
    url: "/",
    item: "Home",
  },
  {
    url: "/internships",
    item: "Internships",
  },
  {
    url: "/",
    item: "About",
  },
  {
    url: "/workmethods",
    item: "Workmethods",
  },
  {
    url: "/growth",
    item: "Growth",
  },
  {
    url: "/careers",
    item: "Careers",
  },
  {
    url: "/",
    item: "FAQ",
  },
  {
    url: "/",
    item: "Projects",
  },
  {
    url: "/services",
    item: "Services",
  },
  {
    url: "/",
    item: "Apply",
  },
];

export type Cards<T> = {
  title: T;
  slogan: T;
  icon: T;
};

export const home_cards: Cards<string>[] = [
  {
    title: "Students",
    slogan: "Students gain Real-World experience",
    icon: "mdi:account-student",
  },
  {
    title: "Companies",
    slogan: "Companies discover motivated talent",
    icon: "mdi:company",
  },
  {
    title: "Education",
    slogan: "Education prepares students for the future",
    icon: "mdi:education-outline",
  },
  {
    title: "Communities",
    slogan: "Communities connect, collaborate and innovate",
    icon: "mdi:connect-without-contact",
  },
  {
    title: "Workset",
    slogan: "Workset empowers mentorship and growth",
    icon: "mdi:computer",
  },
  {
    title: "Freedom",
    slogan: "Freedom embarks a journey of lifelong learning",
    icon: "mdi:bird",
  },
];

export type TechnologyIcons<T> = {
  icon: T;
  style: T;
};

export const technology_icons: TechnologyIcons<string>[] = [
  {
    icon: "tabler:brand-svelte",
    style: "text-orange-600",
  },
  {
    icon: "mdi:language-typescript",
    style: "text-blue-500",
  },
  {
    icon: "mdi:tailwind",
    style: "text-sky-400",
  },
  {
    icon: "mdi:language-rust",
    style: "text-orange-500",
  },
  {
    icon: "mdi:database",
    style: "text-yellow-400",
  },
  {
    icon: "mdi:language-python",
    style: "text-green-500",
  },
  {
    icon: "tabler:brand-flutter",
    style: "text-blue-300",
  },
  {
    icon: "mdi:github",
    style: "text-black dark:text-white",
  },
  {
    icon: "mdi:linux",
    style: "text-black dark:text-white",
  },
  {
    icon: "mdi:google",
    style: "text-red-500",
  },
];

export type SEO<T> = {
  title: T;
  description: T;
};

export const internship_cards: Cards<string>[] = [
  {
    title: "Skill Development",
    slogan:
      "Engage in hands-on projects that enhance both technical and soft skills crucial for the global digital landscape.",
    icon: "mdi:tool-clock",
  },
  {
    title: "International Exposure",
    slogan:
      "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
    icon: "mdi:globe",
  },
  {
    title: "Career Advancement",
    slogan:
      "Build a robust foundation that prepares you for opportunities in international organizations and the broader digital economy.",
    icon: "mdi:stairs-up",
  },
];

export const service_cards: Cards<string>[] = [
  {
    title: "Cybersecurity",
    slogan: "Protects your data, prevents breaches.",
    icon: "mdi:encryption-check",
  },
  {
    title: "Vanilla Open-Source Support",
    slogan: "Simplifies adoption, boosts collaboration.",
    icon: "mdi:computer",
  },
  {
    title: "Talent Growth",
    slogan: "Expands knowledge, fuels progress.",
    icon: "mdi:chart-areaspline",
  },
];
