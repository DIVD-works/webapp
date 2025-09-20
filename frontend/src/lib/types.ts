import Victor from "$lib/assets/team/victor.jpg";
import Akiko from "$lib/assets/team/akiko.jpeg";
import Default from "$lib/assets/team/default.jpg";
import Liam from "$lib/assets/team/liam.jpeg";
import Baran from "$lib/assets/team/baran.jpeg";
import Loek from "$lib/assets/team/loek.jpeg";
import Luc from "$lib/assets/team/luc.jpeg";
import Dirk from "$lib/assets/team/dirk.jpeg";
import Nigel from "$lib/assets/team/nigel.png";
import Ahmed from "$lib/assets/team/ahmed.jpg";
import Marcel from "$lib/assets/team/marcel.jpg";

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
    url: "/about",
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

export type Team<T> = {
  source: T;
  identifier: T;
  position: T;
};

export const team: Team<string>[] = [
  {
    source: Victor,
    identifier: "Victor Gevers",
    position: "CEO",
  },
  {
    source: Akiko,
    identifier: "Akiko Takashima",
    position: "Chief Financial Officer",
  },
  {
    source: Default,
    identifier: "Jared Hofman",
    position: "SVP, Business Operations",
  },
  {
    source: Liam,
    identifier: "Liam Plokkaar",
    position: "SVP, Sales",
  },
  {
    source: Baran,
    identifier: "Baran Canakci",
    position: "Chief Marketing Officer",
  },
  {
    source: Loek,
    identifier: "Loek Ota",
    position: "SVP, Chief People Office",
  },
  {
    source: Luc,
    identifier: "Luc van Kessel",
    position: "SVP, Support",
  },
  {
    source: Dirk,
    identifier: "Dirk Rijntalder",
    position: "SVP, Chief Legal Officer",
  },
  {
    source: Nigel,
    identifier: "Nigel van Maanen",
    position: "Chief Creative Officer (CCO)",
  },
  {
    source: Ahmed,
    identifier: "Ahmed Ezzammouri",
    position: "CISO",
  },
  {
    source: Marcel,
    identifier: "Marcel van der Kuil",
    position: "COO",
  },
  {
    source: Default,
    identifier: "Vacant",
    position: "Vacant",
  },
];
