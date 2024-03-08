import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderItemOne from "@/assets/images/slider-image-one.webp";
import SliderItemTwo from "@/assets/images/slider-image-two.webp";
import Image from "next/image";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[20px] lg:px-[40px] xl:px-[100px] mb-14">
      <Slider {...settings}>
        <div>
          <Image
            src={SliderItemOne}
            alt=""
            className="h-[200px] w-full object-cover object-center"
          />
        </div>

        <div>
          <Image
            src={SliderItemTwo}
            alt=""
            className="h-[200px] w-full object-cover object-center"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
