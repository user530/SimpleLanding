import { TrafficSection } from '../../../types';

interface ITrafficHeading extends Pick<TrafficSection, 'trafficHeading'> {}

const TrafficHeading: React.FC<ITrafficHeading> = ({
  trafficHeading,
}: ITrafficHeading) => {
  return (
    <>
      <div className="container">
        <h3 className="h2">{trafficHeading}</h3>
      </div>
    </>
  );
};

export default TrafficHeading;
