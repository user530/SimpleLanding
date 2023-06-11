import {
  ImpactCTABlock,
  ImpactContentBlock,
  ImpactQuoteBlock,
} from '../../types';

import {
  ImpactHeading,
  ImpactQuote,
  ImpactContent,
  ImpactCTA,
} from './impact/';

interface IMainImpact {
  impactHeading: string;
  impactQuote: ImpactQuoteBlock;
  impactContent: ImpactContentBlock;
  impactCTA: ImpactCTABlock;
}

const MainImpact: React.FC<IMainImpact> = ({
  impactHeading,
  impactQuote,
  impactContent,
  impactCTA,
}: IMainImpact) => {
  return (
    <>
      <section className="out-impact">
        <div className="container">
          <ImpactHeading impactHeading={impactHeading} />
          <ImpactQuote {...impactQuote} />
          <ImpactContent {...impactContent} />
          <ImpactCTA {...impactCTA} />
        </div>
      </section>
    </>
  );
};

export default MainImpact;
