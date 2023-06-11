import { ImpactQuoteBlock } from '../../../types';

interface IImpactQuote extends ImpactQuoteBlock {}

const ImpactQuote: React.FC<IImpactQuote> = ({
  quoteTxt,
  quoteAuthor,
}: IImpactQuote) => {
  return (
    <>
      <div className="quote">
        <div className="quote__text">
          <p>{quoteTxt}</p>
        </div>
        <div className="quote__author">
          <p>{quoteAuthor}</p>
        </div>
      </div>
    </>
  );
};

export default ImpactQuote;
