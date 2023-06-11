import { ResultsItem } from '../../../types';

interface IResultItem extends ResultsItem {
  number: number;
}

const ResultItem: React.FC<IResultItem> = ({
  heading,
  img,
  text,
  number,
}: IResultItem) => {
  return (
    <>
      <div className="results-item">
        <img
          className={'svg-result' + number}
          src={require('../../../assets/img/' + img)}
          alt={'result-icon-' + number}
        />

        <div className="text-46 text-bold">{heading}</div>

        <div className="text-18">{text}</div>
      </div>
    </>
  );
};

export default ResultItem;
