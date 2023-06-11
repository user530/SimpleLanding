import Slider from 'react-slick';
import { TrafficCard } from './';
import { TrafficSection } from '../../../types';

interface ITrafficSlider extends Pick<TrafficSection, 'trafficCards'> {}

const TrafficSlider: React.FC<ITrafficSlider> = ({
  trafficCards,
}: ITrafficSlider) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider className="partners-traffic-slider" {...settings}>
        {trafficCards.map((card, ind) => (
          <TrafficCard key={ind} {...card} />
        ))}
      </Slider>
    </>
  );
};

export default TrafficSlider;
