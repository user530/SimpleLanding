import { StandsForSection } from '../../../types';

interface IStandsHeading extends Pick<StandsForSection, 'standsHeading'> {}

const StandsForHeading: React.FC<IStandsHeading> = ({
  standsHeading,
}: IStandsHeading) => {
  return (
    <>
      <h3 className="h2">{standsHeading}</h3>
    </>
  );
};

export default StandsForHeading;
