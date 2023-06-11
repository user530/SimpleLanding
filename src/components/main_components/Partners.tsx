import { PartnersSection } from '../../types';
import { PartnersHeading, PartnersSlider } from './partners/';

interface IMainPartners extends PartnersSection {}

const MainPartners: React.FC<IMainPartners> = ({
  partnersCards,
  partnersHeading,
}: IMainPartners) => {
  return (
    <>
      <section className="partners">
        <PartnersHeading partnersHeading={partnersHeading} />

        <PartnersSlider partnersCards={partnersCards} />
      </section>
    </>
  );
};

export default MainPartners;
