import { PartnerCard } from '../../../types';

interface IPartnerCard extends PartnerCard {}

const PartnersCard: React.FC<IPartnerCard> = ({
  img,
  text,
  namePosition,
}: IPartnerCard) => {
  return (
    <>
      <div className="partners-slider-item">
        <div className="partners-slider__logo">
          <img
            src={require('../../../assets/img/' + img)}
            height="35"
            alt={'logo-' + namePosition.split(' ')[0]}
          />
        </div>

        <div className="partners-slider__card">
          <p>{text}</p>
          <span>{namePosition}</span>
        </div>
      </div>
    </>
  );
};

export default PartnersCard;
