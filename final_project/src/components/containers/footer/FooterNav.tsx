import links from "./footerLinks";
import { nanoid } from "@reduxjs/toolkit";

const FooterNav = () => (
  <nav>
    <ul className="grid cursor-pointer grid-flow-col gap-4 text-3xl">
      {links.map(({ link, icon }) => (
        <li key={nanoid()}>
          <a
            href={link}
            target="_blank"
            className="transition-colors duration-200 hover:text-white"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterNav;
