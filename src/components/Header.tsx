import {
  HeaderBtn,
  HeaderLogo,
  HeaderMenuToggle,
  HeaderNav,
} from './header_components';
import { HeaderSection } from '../types';
import { NavLanguage } from './header_components/nav';

interface IHeader extends HeaderSection {}

const Header: React.FC<IHeader> = ({
  headerLogoBlock,
  headerLanguages,
  headerMenuItems,
  headerBtn,
}: IHeader) => {
  return (
    <>
      <header className="header" id="top">
        <div className="container-xl">
          <div className="header-content">
            <HeaderLogo headerLogoBlock={headerLogoBlock} />

            <HeaderNav
              headerLanguages={headerLanguages}
              headerMenuItems={headerMenuItems}
            />

            <NavLanguage headerLanguages={headerLanguages} mode="tablet" />

            <HeaderBtn {...headerBtn} />

            <HeaderMenuToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
