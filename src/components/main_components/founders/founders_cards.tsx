import { FoundersSection } from '../../../types';
import { FounderCard } from './';

interface IFounderCards extends Pick<FoundersSection, 'foundersCards'> {}

const FounderCards: React.FC<IFounderCards> = ({
  foundersCards,
}: IFounderCards) => {
  return (
    <>
      <div className="founders-cards">
        {foundersCards.map((card, ind) => (
          <FounderCard key={ind} {...card} />
        ))}
      </div>
    </>
  );
};

export default FounderCards;
