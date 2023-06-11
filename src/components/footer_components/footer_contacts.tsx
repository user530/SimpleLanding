import { FtrContactsBlock } from '../../types';
import { FooterContactsAbout, FooterContactsLinks } from './contacts';

interface IFooterContacts extends FtrContactsBlock {}

const FooterContacts: React.FC<IFooterContacts> = ({
  aboutUsBlock,
  contactLinks,
}: IFooterContacts) => {
  return (
    <>
      <div className="footer-contacts">
        <div className="container">
          <div className="footer-contacts-wrapper">
            <FooterContactsAbout {...aboutUsBlock} />

            <FooterContactsLinks {...contactLinks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContacts;
