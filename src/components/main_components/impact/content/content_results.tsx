import {
  ImpactContentBlock,
  ImpactContentSingleResult,
} from '../../../../types';
import { ImpContImg, ImpContCard } from './';

interface IImpContResults
  extends Pick<ImpactContentBlock, 'contentImg' | 'contentResults'> {}

const ImpContResults: React.FC<IImpContResults> = ({
  contentImg,
  contentResults,
}: IImpContResults) => {
  return (
    <>
      <div className="out-impact-results">
        <ImpContImg contentImg={contentImg} />

        {contentResults.map((resultObj, ind) => (
          <ImpContCard key={ind} {...resultObj} />
        ))}
      </div>
    </>
  );
};

export default ImpContResults;
