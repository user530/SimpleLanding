import { TrafficSection } from '../../../types';

interface ITrafficBanner
  extends Pick<TrafficSection, 'trafficBannerBtn' | 'trafficBannerTxt'> {}

const TrafficBanner: React.FC<ITrafficBanner> = ({
  trafficBannerBtn,
  trafficBannerTxt,
}: ITrafficBanner) => {
  return (
    <>
      <div className="container">
        <div className="results-cta">
          <div className="results-cta__text">
            <div className="text-32 text-bold">
              <p>{trafficBannerTxt}</p>
            </div>
          </div>
          <div className="results-cta__btn text-bold">
            <a className="btn" href={trafficBannerBtn.link}>
              {trafficBannerBtn.text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrafficBanner;
