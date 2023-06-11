import { GrowUsSection } from '../../../types';

interface IGrowusHeading extends Pick<GrowUsSection, 'growusHeading'> {}

const GrowUsHeading: React.FC<IGrowusHeading> = ({
  growusHeading,
}: IGrowusHeading) => {
  return (
    <>
      <h3 className="h2">{growusHeading}</h3>
    </>
  );
};

export default GrowUsHeading;
