import { FoundersSection } from '../../types';
import { FoundersTextBlock, FounderCards } from './founders/';

interface IMainFounders extends FoundersSection {}

const MainFounders: React.FC<IMainFounders> = ({
  foundersHeading,
  foundersText,
  foundersCards,
}: IMainFounders) => {
  return (
    <>
      <section className="founders">
        <FoundersTextBlock
          foundersHeading={foundersHeading}
          foundersText={foundersText}
        />

        <FounderCards foundersCards={foundersCards} />
      </section>
    </>
  );
};

export default MainFounders;
