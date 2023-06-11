import { ImpactContentBlock } from '../../../types';
import { ImpContResults, ImpContText } from './content';

interface IImpactContent extends ImpactContentBlock {}

const ImpactContent: React.FC<IImpactContent> = ({
  contentImg,
  contentResults,
  contentText,
}: IImpactContent) => {
  return (
    <>
      <div className="out-impact__content">
        <ImpContResults
          contentImg={contentImg}
          contentResults={contentResults}
        />
        <ImpContText {...contentText} />
      </div>
    </>
  );
};

export default ImpactContent;
