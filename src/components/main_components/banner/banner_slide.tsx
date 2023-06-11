interface IBannerSlide {
  slideHeading: string;
  slideText: string;
  slideImgUrl: string;
}

const BannerSlide: React.FC<IBannerSlide> = ({
  slideHeading,
  slideImgUrl,
  slideText,
}: IBannerSlide) => {
  return (
    <>
      <div className="header-banner__item">
        <div className="header-banner__title">
          <div className="h3">{slideHeading}</div>
          <div className="text-20">{slideText}</div>
        </div>
        <div className="header-banner__img">
          <img
            src={require('../../../assets/img/' + slideImgUrl)}
            width="500"
            alt={`img-${slideHeading.split(' ')[0]}`}
          />
        </div>
      </div>
    </>
  );
};

export default BannerSlide;
