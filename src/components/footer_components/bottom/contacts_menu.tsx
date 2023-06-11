import { FtrBottomBlock } from '../../../types';

interface IFooterMenu extends Pick<FtrBottomBlock, 'menuBlock'> {}

const FooterMenu: React.FC<IFooterMenu> = ({ menuBlock }: IFooterMenu) => {
  return (
    <>
      <div className="footer-menu">
        <ul>
          {menuBlock.map(({ link, name }, ind) => (
            <li key={ind}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
