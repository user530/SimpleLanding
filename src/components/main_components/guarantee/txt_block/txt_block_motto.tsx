import { GrntContTxtBlock } from '../../../../types';

interface ITxtBlockMotto extends Pick<GrntContTxtBlock, 'txtBlockMotto'> {}

const TxtBlockMotto: React.FC<ITxtBlockMotto> = ({
  txtBlockMotto,
}: ITxtBlockMotto) => {
  return (
    <>
      <div className="text-upper text-26">{txtBlockMotto}</div>
    </>
  );
};

export default TxtBlockMotto;
