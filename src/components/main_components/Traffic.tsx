import { TrafficSection } from '../../types';
import { TrafficHeading, TrafficSlider, TrafficBanner } from './traffic/';

interface IMainTraffic extends TrafficSection {}

const MainTraffic: React.FC<IMainTraffic> = ({
  trafficHeading,
  trafficCards,
  trafficBannerBtn,
  trafficBannerTxt,
}: IMainTraffic) => {
  return (
    <>
      <section className="partners-traffic">
        <TrafficHeading trafficHeading={trafficHeading} />

        <TrafficSlider trafficCards={trafficCards} />

        <TrafficBanner
          trafficBannerBtn={trafficBannerBtn}
          trafficBannerTxt={trafficBannerTxt}
        />
      </section>
    </>
  );
};

export default MainTraffic;
