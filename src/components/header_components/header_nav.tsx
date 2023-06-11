import { HeaderSection } from '../../types';
import { useAppContext } from '../../utils/context';
import { NavLanguage, NavMenu } from './nav';

interface IHeaderNav
  extends Pick<HeaderSection, 'headerLanguages' | 'headerMenuItems'> {}

const HeaderNav: React.FC<IHeaderNav> = ({
  headerLanguages,
  headerMenuItems,
}: IHeaderNav) => {
  let mobileOpen = false;

  const context = useAppContext();
  if (context) mobileOpen = context.menuOpen;

  return (
    <>
      <div
        className={`header-menu ${mobileOpen ? 'open' : ''}`}
        id="header-menu"
      >
        <div className="header-menu__content">
          <NavLanguage headerLanguages={headerLanguages} mode="mobile" />

          <NavMenu menuItems={headerMenuItems} />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
