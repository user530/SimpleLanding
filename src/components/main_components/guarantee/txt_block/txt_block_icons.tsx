import { GrntContTxtBlock } from '../../../../types';
import TxtBlockIcon from './txt_block_icon';

interface ITxtBlockIcons extends Pick<GrntContTxtBlock, 'txtBlockIcons'> {}

const TxtBlockIcons: React.FC<ITxtBlockIcons> = ({
  txtBlockIcons,
}: ITxtBlockIcons) => {
  return (
    <>
      <div className="guarantee-icons">
        {txtBlockIcons.map(({ icon, text }, ind) => (
          <TxtBlockIcon
            key={ind}
            icon={icon}
            iconName={icon.split('.')[0]}
            text={text}
          />
        ))}
      </div>
    </>
  );
};

export default TxtBlockIcons;
