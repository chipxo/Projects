import Container from "@/components/ui/container";
import WhyChooseBg from "./WhyChooseBg";
import WhyChooseText from "./WhyChooseText";
import WhyChooseImgs from "./WhyChooseImgs";

const WhyChooseUs = () => (
  <section className="relative py-12 text-white md:py-28">
    <WhyChooseBg />

    <Container className="space-y-6">
      <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:gap-32">
        <WhyChooseText />
        <WhyChooseImgs />
      </div>
    </Container>
  </section>
);

export default WhyChooseUs;
