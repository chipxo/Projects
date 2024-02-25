import getCurYear from "@/utils/getCurYear";

const FooterText = () => (
  <div>
    <h2 className="mb-4 text-2xl font-bold md:text-4xl">Vivo.</h2>
    <p className="md:text-lg">Providing reliable clothes since 2022</p>
    <p className="md:text-lg">
      Copyright © {getCurYear()} - All right reserved
    </p>
  </div>
);

export default FooterText;
