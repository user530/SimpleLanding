import { BannerSection } from '../../../types';
import BannerSlide from './banner_slide';
import Slider from 'react-slick';

interface IBannerSlider extends Pick<BannerSection, 'bannerSlides'> {}

const BannerSlider: React.FC<IBannerSlider> = ({
  bannerSlides,
}: IBannerSlider) => {
  const settings = {
    infinite: true,
    speed: 800,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider className="header-banner-slider" {...settings}>
        {bannerSlides.map(({ heading, text, imgName }, ind) => (
          <BannerSlide
            key={ind}
            slideHeading={heading}
            slideText={text}
            slideImgUrl={imgName}
          />
        ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
