import { ROUTES } from "./routes";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
export const SERVICES = [
  {
    title: "Web Development",
    href: ROUTES.WEB_DEVELOPMENT,
    description: "Custom web solutions tailored to your business needs",
  },
  {
    title: "Mobile Apps",
    href: ROUTES.MOBILE_APPS,
    description: "Native and cross-platform mobile application development",
  },
  {
    title: "Cloud Solutions",
    href: ROUTES.CLOUD_SOLUTIONS,
    description: "Scalable cloud infrastructure and migration services",
  },
  {
    title: "UI/UX Design",
    href: ROUTES.UI_UX_DESIGN,
    description: "User-centered interface design and experience optimization",
  },
  {
    title: "E-commerce",
    href: ROUTES.E_COMMERCE,
    description:
      "Complete online store solutions with integrated payment systems",
  },
  {
    title: "CMS Solutions",
    href: ROUTES.CMS,
    description: "Content management systems for easy website administration",
  },
];

export const NAV_ITEMS = [
  {
    title: "Digital Solutions",
    subItems: SERVICES,
  },
  {
    title: "Digital Marketing",
    subItems: SERVICES, // Consider creating separate MARKETING_SERVICES if different
  },
  {
    title: "BPO",
    subItems: SERVICES, // Consider creating separate BPO_SERVICES if different
  },
  {
    title: "Blog",
    href: ROUTES.BLOG,
  },
  {
    title: "Contact",
    href: ROUTES.CONTACT,
  },
];

export const FOOTER_LINKS = [
  { title: "Home", href: ROUTES.HOME },
  { title: "About", href: ROUTES.ABOUT },
  { title: "Services", href: ROUTES.SERVICES },
  { title: "Blog", href: ROUTES.BLOG },
  { title: "Contact", href: ROUTES.CONTACT },
  { title: "Terms & Conditions", href: ROUTES.TERMS },
  { title: "Privacy Policy", href: ROUTES.PRIVACY },
];

export const CONTACT_INFO = {
  addresses: [
    {
      text: "Main Branch: 112 Capitol Tr, Newark, DE 19711",
      icon: MdLocationOn,
    },
    {
      text: "Sub-Branch: 1 Floor - 322 G3, Johar Town, Lahore",
      icon: MdLocationOn,
    },
  ],
  contacts: [
    {
      text: "1-302-797-8888",
      icon: FaPhoneAlt,
      href: "tel:1-302-797-8888",
    },
    {
      text: "support@nexcelsolutions.com",
      icon: FaEnvelope,
      href: "mailto:support@nexcelsolutions.com",
    },
  ],
};
