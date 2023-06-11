import { WWDTextBlock } from '../../../types';

interface IWWDText extends WWDTextBlock {}

const WWWDText: React.FC<IWWDText> = ({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
}: IWWDText) => {
  return (
    <>
      <div className="ww-do__text">
        <div className="ww-do__title-desktop">
          <h2 className="title-spacing">{heading1}</h2>
          <div className="h2 sub-line">{heading2}</div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: paragraph1 }} />
        <p dangerouslySetInnerHTML={{ __html: paragraph2 }} />
      </div>
    </>
  );
};

export default WWWDText;
