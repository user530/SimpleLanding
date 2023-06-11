import { ImpactContentTextBlock } from '../../../../types';

interface IImpContText extends ImpactContentTextBlock {}

const ImpContText: React.FC<IImpContText> = ({
  mainText,
  subText,
}: IImpContText) => {
  return (
    <>
      <div className="out-impact__text">
        <div className="text-32 text-demi">{mainText}</div>
        <div className="text-20 text-light">
          <p>{subText}</p>
        </div>
      </div>
    </>
  );
};

export default ImpContText;
