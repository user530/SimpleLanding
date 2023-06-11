import { MenuItem } from '../../../types';

interface INavMenu {
  menuItems: MenuItem[];
}

const NavMenu: React.FC<INavMenu> = ({ menuItems }: INavMenu) => {
  return (
    <>
      <ul>
        {menuItems.map(({ link, name }, ind) => (
          <a key={ind} href={link}>
            {name}
          </a>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
