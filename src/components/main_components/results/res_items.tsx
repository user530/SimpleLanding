import { ResultsSection } from '../../../types';
import ResultItem from './res_item';

interface IResultItems extends Pick<ResultsSection, 'resultItems'> {}

const ResultItems: React.FC<IResultItems> = ({ resultItems }: IResultItems) => {
  return (
    <>
      <div className="results-wrapper">
        {resultItems.map(({ heading, text, img }, ind) => (
          <ResultItem
            key={ind}
            heading={heading}
            text={text}
            img={img}
            number={ind + 1}
          />
        ))}
      </div>
    </>
  );
};

export default ResultItems;
