import { StandsForSection } from '../../types';
import { StandsForHeading, StandsForCards } from './stand_for';

interface IMainStandsFor extends StandsForSection {}

const MainStandFor: React.FC<IMainStandsFor> = ({
  standsHeading,
  standsCards,
}: IMainStandsFor) => {
  return (
    <>
      <section className="stand-for">
        <div className="container">
          <StandsForHeading standsHeading={standsHeading} />

          <StandsForCards standsCards={standsCards} />
        </div>
      </section>
    </>
  );
};

export default MainStandFor;
