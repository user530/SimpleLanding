import { GuaranteeSection } from '../../types';
import { GrntContent, GrntHeading } from './guarantee/';

interface IMainGuarantee extends GuaranteeSection {}

const MainGuarantee: React.FC<IMainGuarantee> = ({
  headingTxt,
  grntContent,
}: IMainGuarantee) => {
  return (
    <>
      <section className="guarantee">
        <div className="container">
          <GrntHeading headingTxt={headingTxt} />

          <GrntContent {...grntContent} />
        </div>
      </section>
    </>
  );
};

export default MainGuarantee;
