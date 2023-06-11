import { GrowUsContentBlock } from '../../../../types';

interface IGrowusMultiImg extends Pick<GrowUsContentBlock, 'multiImg'> {}

const GrowusContentMultiImg: React.FC<IGrowusMultiImg> = ({
  multiImg,
}: IGrowusMultiImg) => {
  return (
    <>
      <div className="grow-us__img">
        <img
          className="img-base"
          src={require('../../../../assets/img/' + multiImg[0])}
          alt="img-1"
        />
        <img
          className="img-rocket"
          src={require('../../../../assets/img/' + multiImg[1])}
          alt="img-1"
        />
        <img
          className="img-text"
          src={require('../../../../assets/img/' + multiImg[2])}
          alt="img-1"
        />
      </div>
    </>
  );
};

export default GrowusContentMultiImg;
