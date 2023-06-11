import { ServiceCard } from '../../../types';

interface IServCard extends ServiceCard {}

const ServicesCard: React.FC<IServCard> = ({
  cardIcon,
  cardText,
  cardIconName,
}: IServCard) => {
  return (
    <>
      <div className="services-card">
        <div className="services-card__icon">
          <img
            src={require('../../../assets/img/' + cardIcon)}
            width="110"
            height="110"
            alt={cardIconName || 'card-icon'}
          />
        </div>

        <p>{cardText}</p>
      </div>
    </>
  );
};

export default ServicesCard;
