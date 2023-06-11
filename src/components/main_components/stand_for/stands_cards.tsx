import { StandsForSingleCard } from './';
import { StandsForSection } from '../../../types';

interface IStandsCard extends Pick<StandsForSection, 'standsCards'> {}

const StandsForCards: React.FC<IStandsCard> = ({
  standsCards,
}: IStandsCard) => {
  return (
    <>
      <div className="stand-for-cards">
        {standsCards.map((card, ind) => (
          <StandsForSingleCard key={ind} {...card} />
        ))}
      </div>
    </>
  );
};

export default StandsForCards;
