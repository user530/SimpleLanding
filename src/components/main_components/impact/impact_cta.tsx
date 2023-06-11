import { ImpactCTABlock } from '../../../types';

interface IImpactCTA extends ImpactCTABlock {}

const ImpactCTA: React.FC<IImpactCTA> = ({ button, text }: IImpactCTA) => {
  return (
    <>
      <div className="results-cta">
        <div className="results-cta__text">
          <div className="text-32 text-bold">
            <p>{text}</p>
          </div>
        </div>
        <div className="results-cta__btn text-bold">
          <a className="btn" href={button.link}>
            {button.text}
          </a>
        </div>
      </div>
    </>
  );
};

export default ImpactCTA;
