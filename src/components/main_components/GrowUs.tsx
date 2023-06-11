import { GrowUsSection } from '../../types';
import { GrowUsContent, GrowUsHeading } from './grow_us';

interface IMainGrowUs extends GrowUsSection {}

const MainGrowUs: React.FC<IMainGrowUs> = ({
  growusHeading,
  growusContent,
}: IMainGrowUs) => {
  return (
    <>
      <section className="grow-us">
        <div className="container">
          <GrowUsHeading growusHeading={growusHeading} />

          <GrowUsContent growusContent={growusContent} />
        </div>
      </section>
    </>
  );
};

export default MainGrowUs;
