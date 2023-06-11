import { BannerSection } from '../../../types';

interface IBannerHeading extends Pick<BannerSection, 'bannerHeading'> {}

const BannerHeading: React.FC<IBannerHeading> = ({
  bannerHeading,
}: IBannerHeading) => {
  return (
    <>
      <h1 className="h1">{bannerHeading}</h1>
    </>
  );
};

export default BannerHeading;
