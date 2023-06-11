import { ServicesSection } from '../../../types';
import { ServicesCard } from './';

interface IServCards extends Pick<ServicesSection, 'servCards'> {}

const ServicesCards: React.FC<IServCards> = ({ servCards }: IServCards) => {
  return (
    <>
      <div className="services-wrapper">
        {servCards.map((cardData, ind) => (
          <ServicesCard
            key={ind}
            {...cardData}
            cardIconName={cardData.cardIcon.split('.')[0]}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesCards;
