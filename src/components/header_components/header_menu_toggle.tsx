import { useAppContext } from '../../utils/context';

const HeaderMenuToggle: React.FC = () => {
  let menuOpen = false;
  let menuClickHandler = () => {};

  const context = useAppContext();
  if (context) {
    menuOpen = context.menuOpen;
    menuClickHandler = () => {
      context.setMenu(!menuOpen);
      document.body.classList.toggle('lock', !menuOpen);
    };
  }

  return (
    <>
      <div
        className={`toggle-menu ${menuOpen ? 'active' : ''}`}
        id="menu-toggle"
        onClick={menuClickHandler}
      >
        <span></span>
      </div>
    </>
  );
};

export default HeaderMenuToggle;
