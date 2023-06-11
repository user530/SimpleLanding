import { FtrBottomBlock } from '../../types';
import { FooterCopyright, FooterMenu } from './bottom';

interface IFooterBottom extends FtrBottomBlock {}

const FooterBottom: React.FC<IFooterBottom> = ({
  copyrightBlock,
  menuBlock,
}: IFooterBottom) => {
  return (
    <>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__content">
            <FooterCopyright {...copyrightBlock} />
            <FooterMenu menuBlock={menuBlock} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
