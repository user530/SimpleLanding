import { WWDSection } from '../../types';
import { WWDImg, WWDMobTitle, WWWDText } from './what_we_do';

interface IMainWWD extends WWDSection {}

const MainWWDo: React.FC<IMainWWD> = ({
  wwdMobTitle,
  wwdImg,
  wwdText,
}: IMainWWD) => {
  return (
    <>
      <section className="ww-do">
        <div className="container">
          <WWDMobTitle {...wwdMobTitle} />

          <WWDImg wwdImg={wwdImg} />

          <WWWDText {...wwdText} />
        </div>
      </section>
    </>
  );
};

export default MainWWDo;
