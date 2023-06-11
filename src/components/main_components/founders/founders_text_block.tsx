import { FoundersSection } from '../../../types';

interface IFounderText
  extends Pick<FoundersSection, 'foundersHeading' | 'foundersText'> {}

const FoundersTextBlock: React.FC<IFounderText> = ({
  foundersHeading,
  foundersText,
}: IFounderText) => {
  return (
    <>
      <div className="container">
        <h3 className="h2">{foundersHeading}</h3>

        <div className="text-20">
          <p>{foundersText}</p>
        </div>
      </div>
    </>
  );
};

export default FoundersTextBlock;
