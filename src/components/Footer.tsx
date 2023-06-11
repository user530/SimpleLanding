import { FooterSection } from '../types';
import { FooterBottom, FooterContacts } from './footer_components';

interface IFooter extends FooterSection {}

const Footer: React.FC<IFooter> = ({
  footerContactsBlock,
  footerBottomBlock,
}: IFooter) => {
  return (
    <>
      <footer className="footer">
        <FooterContacts {...footerContactsBlock} />
        <FooterBottom {...footerBottomBlock} />
      </footer>
    </>
  );
};

export default Footer;
