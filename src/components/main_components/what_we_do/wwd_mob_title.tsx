import { WWDMobTitleBlock } from '../../../types';

interface IWWDMobTitle extends WWDMobTitleBlock {}

const WWDMobTitle: React.FC<IWWDMobTitle> = ({
  heading1,
  heading2,
}: IWWDMobTitle) => {
  return (
    <>
      <div className="ww-do__title-mobile">
        <h2 className="title-spacing">{heading1}</h2>
        <h3 className="h2">{heading2}</h3>
      </div>
    </>
  );
};

export default WWDMobTitle;
