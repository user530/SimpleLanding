import { TrafficCardBlock } from '../../../types';

interface ITrafficCard extends TrafficCardBlock {}

const TrafficCard: React.FC<ITrafficCard> = ({
  img,
  imgName,
}: ITrafficCard) => {
  return (
    <>
      <div className="partners-traffic-item">
        <img
          src={require('../../../assets/img/' + img)}
          width="214"
          height="71"
          alt={imgName || 'partner-logo'}
        />
      </div>
    </>
  );
};

export default TrafficCard;
