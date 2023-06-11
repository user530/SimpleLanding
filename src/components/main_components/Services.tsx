import { ServicesSection } from '../../types';
import { ServicesCards, ServicesHeading } from './services/';

interface IMainServices extends ServicesSection {}

const MainServices: React.FC<IMainServices> = ({
  servCards,
  servHeading,
}: IMainServices) => {
  return (
    <>
      <section className="services">
        <div className="container">
          <ServicesHeading servHeading={servHeading} />

          <ServicesCards servCards={servCards} />
        </div>
      </section>
    </>
  );
};

export default MainServices;
