import { StandsForCard } from '../../../types';

interface IStandsCard extends StandsForCard {}

const StandsForSingleCard: React.FC<IStandsCard> = ({
  cardHeading,
  cardImg,
  cardText,
}: IStandsCard) => {
  return (
    <>
      <div className="stand-for-item">
        <div className="stand-for__icon">
          <img
            src={require('../../../assets/img/' + cardImg)}
            alt={'img-' + cardHeading}
          />
        </div>
        <div className="stand-for__text">
          <div className="h4">{cardHeading}</div>
          <p>{cardText}</p>
        </div>
      </div>
    </>
  );
};

export default StandsForSingleCard;
