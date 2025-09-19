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
    url: "/",
    item: "Internships",
  },
  {
    url: "/",
    item: "About",
  },
  {
    url: "/",
    item: "Workmethods",
  },
  {
    url: "/growth",
    item: "Growth",
  },
  {
    url: "/",
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
    url: "/",
    item: "Services",
  },
  {
    url: "/",
    item: "Apply",
  },
];

export type HomeCards<T> = {
  title: T;
  slogan: T;
  icon: T;
};

export const home_cards: HomeCards<string>[] = [
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
