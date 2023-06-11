import { ResultsSection } from '../../types';
import { ResultsCTABlock, ResultItems } from './results/';

interface IMainResults extends ResultsSection {}

const MainResults: React.FC<IMainResults> = ({
  resultsCta,
  resultItems,
}: IMainResults) => {
  return (
    <>
      <section className="results">
        <div className="container">
          <ResultsCTABlock {...resultsCta} />

          <ResultItems resultItems={resultItems} />
        </div>
      </section>
    </>
  );
};

export default MainResults;
