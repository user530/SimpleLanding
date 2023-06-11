import Slider from 'react-slick';
import { PartnersCard } from './';
import { PartnersSection } from '../../../types';

interface IPartnersSlider extends Pick<PartnersSection, 'partnersCards'> {}

const PartnersSlider: React.FC<IPartnersSlider> = ({
  partnersCards,
}: IPartnersSlider) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider className="partners-slider" {...settings}>
        {partnersCards.map((partnerCard, ind) => (
          <PartnersCard key={ind} {...partnerCard} />
        ))}
      </Slider>
    </>
  );
};

export default PartnersSlider;
