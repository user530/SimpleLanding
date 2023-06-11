import { BannerSection } from '../../types';
import { BannerHeading, BannerSlider } from './banner/';

interface IMainBanner extends BannerSection {}

const MainBanner: React.FC<IMainBanner> = ({
  bannerHeading,
  bannerSlides,
}: IMainBanner) => {
  return (
    <>
      <div className="header-banner">
        <div className="container">
          <BannerHeading bannerHeading={bannerHeading} />

          <BannerSlider bannerSlides={bannerSlides} />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
