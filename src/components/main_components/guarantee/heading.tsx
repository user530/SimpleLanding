import { GuaranteeSection } from '../../../types';

interface IGrntHeading extends Pick<GuaranteeSection, 'headingTxt'> {}

const GrntHeading: React.FC<IGrntHeading> = ({ headingTxt }: IGrntHeading) => {
  return (
    <>
      <h3 className="h2">{headingTxt}</h3>
    </>
  );
};

export default GrntHeading;
