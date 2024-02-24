import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect, useRef, useState } from "react";
import Button from "../common/CommonButton";
import SectionsTitle from "../common/SectionsTitle";
import img1 from "../../assets/gallery_img/gallery_1.png";
import img2 from "../../assets/gallery_img/gallery_2.png";
import img3 from "../../assets/gallery_img/gallery_3.png";
import img4 from "../../assets/gallery_img/gallery_4.png";
import img5 from "../../assets/gallery_img/gallery_5.png";

const imgs = [img1, img2, img3, img4, img5];
const imgsHidden = [img3, img4, img5, img1, img2];

const Gallery = (props) => {
  const [hiddenImg, setHiddenImg] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props.delegate || "[data-fancybox]";
    const options = props.options || {};

    NativeFancybox.bind(container, delegate, { ...options, toolbar: true });

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);

  return (
    <section ref={containerRef} id="gallery" className="relative mt-20">
      <div className="container grid gap-y-12 text-center">
        {/* Title */}
        <SectionsTitle isBgDark={false} isTitle={true} text="Gallery" />
        <div className="md:photos relative z-[888] grid gap-3 sm:grid-cols-2">
          {/* Images */}
          {imgs.map((img) => (
            <a
              key={img}
              data-fancybox="gallery"
              href={img}
              className="w-full transition hover:scale-95 hover:cursor-glass sm:max-w-full"
            >
              <img src={img} alt={img} className="h-full w-full object-cover" />
            </a>
          ))}

          {/* Hidden images */}
          {hiddenImg &&
            imgsHidden.map((img) => (
              <a
                key={img}
                data-fancybox="gallery"
                href={img}
                className="w-full transition hover:scale-95 hover:cursor-glass sm:max-w-full"
              >
                <img src={img} alt={img} className="w-full" />
              </a>
            ))}
        </div>
        <Button
          text={`See ${hiddenImg ? "less" : "more"}`}
          isActive={hiddenImg}
          onClick={() => setHiddenImg(!hiddenImg)}
        />
      </div>
    </section>
  );
};

export default Gallery;
