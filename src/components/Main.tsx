import { MainSection } from '../types';

import {
  MainBanner,
  MainFounders,
  MainGrowUs,
  MainGuarantee,
  MainImpact,
  MainPartners,
  MainResults,
  MainServices,
  MainStandFor,
  MainTraffic,
  MainWWDo,
} from './main_components';

interface IMain extends MainSection {}

const Main: React.FC<IMain> = ({
  bannerSection,
  foundersSection,
  growUsSection,
  guaranteeSection,
  impactSection,
  partnersSection,
  resultsSection,
  servicesSection,
  standsForSection,
  trafficSection,
  wwdSection,
}: IMain) => {
  return (
    <>
      <main className="main">
        <MainBanner {...bannerSection} />

        <MainResults {...resultsSection} />

        <MainWWDo {...wwdSection} />

        <MainGuarantee {...guaranteeSection} />

        <MainServices {...servicesSection} />

        <MainPartners {...partnersSection} />

        <MainTraffic {...trafficSection} />

        <MainImpact {...impactSection} />

        <MainFounders {...foundersSection} />

        <MainStandFor {...standsForSection} />

        <MainGrowUs {...growUsSection} />
      </main>
    </>
  );
};

export default Main;
