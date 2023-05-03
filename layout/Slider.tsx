import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-[100px] mb-14">
      <Slider {...settings}>
        <div>
          <img
            src="https://kontakt.az/wp-content/uploads/2023/03/Mac-does-that-web-site-banner-1800x260-1.png"
            alt=""
            className="h-[200px] w-full object-cover object-center"
          />
        </div>
        <div>
          <img
            src="https://kontakt.az/wp-content/uploads/2022/12/720x380-copy@3x-scaled.webp"
            alt=""
            className="h-[200px] w-full object-cover object-center"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
