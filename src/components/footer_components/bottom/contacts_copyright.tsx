import { FtrBottomCopyright } from '../../../types';

interface IFooterCopyright extends FtrBottomCopyright {}

const FooterCopyright: React.FC<IFooterCopyright> = ({
  copyrightImg: { imageLink, link, imageName },
  copyrightText,
}: IFooterCopyright) => {
  return (
    <>
      <div className="footer-copyright">
        <a className="logo" href={link}>
          <img
            src={require('../../../assets/img/' + imageLink)}
            alt={imageName || 'copyright-img'}
          />
        </a>
        <p dangerouslySetInnerHTML={{ __html: copyrightText }}></p>
      </div>
    </>
  );
};

export default FooterCopyright;
