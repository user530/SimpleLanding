import { FounderCard } from '../../../types';

interface IFounderCard extends FounderCard {}

const SingleFounderCard: React.FC<IFounderCard> = ({
  founderImg,
  founderName,
  founderPosition,
}: IFounderCard) => {
  return (
    <>
      <div className="founders-card">
        <div className="founders-card__img">
          <img
            src={require('../../../assets/img/' + founderImg)}
            alt={founderName}
          />
        </div>

        <div className="founders-card__text">
          <p>{founderName}</p>
          <span>{founderPosition}</span>
        </div>
      </div>
    </>
  );
};

export default SingleFounderCard;
