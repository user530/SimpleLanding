import { GrntContTxtBlock } from '../../../types';
import {
  TxtBlockHeading,
  TxtBlockIcons,
  TxtBlockMotto,
  TxtBlockText,
} from './txt_block';

interface IGrntContTxtBlock extends GrntContTxtBlock {}

const GrntContentTxtBlock: React.FC<IGrntContTxtBlock> = ({
  txtBlockHeading,
  txtBlockIcons,
  txtBlockMotto,
  txtBlockText,
}: IGrntContTxtBlock) => {
  return (
    <>
      <div className="guarantee-text">
        <TxtBlockHeading txtBlockHeading={txtBlockHeading} />

        <TxtBlockIcons txtBlockIcons={txtBlockIcons} />

        <TxtBlockText txtBlockText={txtBlockText} />

        <TxtBlockMotto txtBlockMotto={txtBlockMotto} />
      </div>
    </>
  );
};

export default GrntContentTxtBlock;
