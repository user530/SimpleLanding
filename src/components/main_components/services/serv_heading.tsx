import { ServicesSection } from '../../../types';

interface IServHeading extends Pick<ServicesSection, 'servHeading'> {}

const ServicesHeading: React.FC<IServHeading> = ({
  servHeading,
}: IServHeading) => {
  return (
    <>
      <h3 className="h2">{servHeading}</h3>
    </>
  );
};

export default ServicesHeading;
