import FooterNav from "./FooterNav";
import FooterText from "./FooterText";
import MadeBy from "@/components/common/MadeBy";

const Footer = () => (
  <footer className="grid place-items-center gap-y-4 bg-background bg-footer-bg bg-cover bg-center p-10 text-center">
    <FooterText />

    <FooterNav />

    <MadeBy />
  </footer>
);

export default Footer;
