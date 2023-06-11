import { GrntContTxtBlock } from '../../../../types';

interface ITxtBlockText extends Pick<GrntContTxtBlock, 'txtBlockText'> {}

const TxtBlockText: React.FC<ITxtBlockText> = ({
  txtBlockText,
}: ITxtBlockText) => {
  return (
    <>
      <div className="guarantee-desk text-20 text-light">
        <p>{txtBlockText}</p>
      </div>
    </>
  );
};

export default TxtBlockText;
