import FooterNav from "./FooterNav";
import FooterText from "./FooterText";
import MadeBy from "@/components/common/MadeBy";

const Footer = () => (
  <footer className="grid place-items-center gap-y-4 border-y-2 border-primary/85 bg-background bg-footer-bg bg-cover bg-center p-3 text-center md:p-10">
    <FooterText />

    <FooterNav />

    <MadeBy />
  </footer>
);

export default Footer;
