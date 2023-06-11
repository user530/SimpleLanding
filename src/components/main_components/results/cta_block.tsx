import { ResultsCTA } from '../../../types';

interface IResultsCTABlock extends ResultsCTA {}

const ResultsCTABlock: React.FC<IResultsCTABlock> = ({
  ctaBlockHeading,
  ctaBlockText,
  ctaBtnTxt,
  ctaBtnUri,
}: IResultsCTABlock) => {
  return (
    <>
      <div className="results-cta">
        <div className="results-cta__text">
          <div className="text-36 text-bold">
            <p> {ctaBlockHeading}</p>
          </div>

          <div className="text-32 text-bold">
            <p>{ctaBlockText}</p>
          </div>
        </div>

        <div className="results-cta__btn text-bold">
          <a className="btn" href={ctaBtnUri}>
            {ctaBtnTxt}
          </a>
        </div>
      </div>
    </>
  );
};

export default ResultsCTABlock;
