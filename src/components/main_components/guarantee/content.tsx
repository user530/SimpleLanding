import { GuaranteeContentBlock } from '../../../types';
import { GrntContentImg, GrntContentTxtBlock } from './';

interface IGrntContent extends GuaranteeContentBlock {}

const GrntContent: React.FC<IGrntContent> = ({
  contentImg,
  txtBlock,
}: IGrntContent) => {
  return (
    <>
      <div className="guarantee__content">
        <GrntContentImg
          contentImg={contentImg}
          contentImgAlt={contentImg.split('.')[0]}
        />

        <GrntContentTxtBlock {...txtBlock} />
      </div>
    </>
  );
};

export default GrntContent;
