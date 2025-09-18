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
    url: "/",
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
