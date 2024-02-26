import Logo from "@/components/common/Logo";
import getCurYear from "@/utils/getCurYear";

const FooterText = () => (
  <div>
    <div className="flex justify-center pr-4">
      <Logo />
    </div>
    <p className="md:text-lg">Providing reliable clothes since 2022</p>
    <p className="md:text-lg">
      Copyright © {getCurYear()} - All right reserved
    </p>
  </div>
);

export default FooterText;
