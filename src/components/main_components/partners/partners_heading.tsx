import { PartnersSection } from '../../../types';

interface IPartnersHeading extends Pick<PartnersSection, 'partnersHeading'> {}

const PartnersHeading: React.FC<IPartnersHeading> = ({
  partnersHeading,
}: IPartnersHeading) => {
  return (
    <>
      <div className="container">
        <h3 className="h2">{partnersHeading}</h3>
      </div>
    </>
  );
};

export default PartnersHeading;
