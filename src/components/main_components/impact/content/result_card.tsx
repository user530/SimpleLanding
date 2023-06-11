import { ImpactContentSingleResult } from '../../../../types';

interface IImpContCard extends ImpactContentSingleResult {}

const ImpContCard: React.FC<IImpContCard> = ({
  img,
  heading,
  text,
}: IImpContCard) => {
  return (
    <>
      <div className="results-item">
        <img
          className="svg-payment"
          src={require('../../../../assets/img/' + img)}
          alt={'result-' + heading}
        />
        <div className="text-52">{heading}</div>
        <div className="text-21">{text}</div>
      </div>
    </>
  );
};

export default ImpContCard;
