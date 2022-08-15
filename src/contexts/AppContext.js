import { createContext } from "react";
import { getLocale } from '../i18n'

const navLinks = [
  { id: "1", label: getLocale('home'), path: "", iconName: "home" },
  { id: "2", label: getLocale('owr_work'), path: "our-work", iconName: "team" },
  { id: "3", label: getLocale('about_us'), path: "about-us", iconName: "calendar" },
  { id: "4", label: getLocale('what_we_do'), path: "what-we-do", iconName: "documents" },
  {
    id: "5",
    label: getLocale('get_in_touch'),
    path: "get-in-touch",
    iconName: "projects",
  },
];

const user = {
  avatar:
    "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/277524241_698236647876478_1154644061046686344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lPnq9TctEMwAX-yO1Kx&_nc_ht=scontent-waw1-1.xx&oh=00_AT_2g5J_T5JuAnnxMV2aiI6kPTYfjg00Tvp8Ka9Z076vBg&oe=62F205C5",
  name: {
    firstName: "Sandra",
    lastName: "Hrevtsova",
  },
};

export const AppContext = createContext({ navLinks, user });
