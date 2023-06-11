import { GrntContTxtBlock } from '../../../../types';

interface ITxtBlockHeading extends Pick<GrntContTxtBlock, 'txtBlockHeading'> {}

const TxtBlockHeading: React.FC<ITxtBlockHeading> = ({
  txtBlockHeading,
}: ITxtBlockHeading) => {
  return (
    <>
      <div className="text-upper text-32 text-bold">{txtBlockHeading}</div>
    </>
  );
};

export default TxtBlockHeading;
