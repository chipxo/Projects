import SectionsTitle from "../common/SectionsTitle";
import Slider from "../containers/sliderNews/Slider";
import bgNews from "../../assets/backgrounds/bg_news.jpg";

const LatestNews = () => {
  return (
    <section
      id="news"
      className="relative scroll-mt-6 bg-news bg-cover bg-center"
    >
      <img src={bgNews} className="absolute inset-0 h-full w-full" />
      <div className="container px-4 py-20 md:px-0">
        <div className="mb-10 lg:mb-20">
          <SectionsTitle text="Latest News" isBgDark={true} isTitle={true} />
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default LatestNews;
