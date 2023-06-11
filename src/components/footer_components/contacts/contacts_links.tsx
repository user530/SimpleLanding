import { FtrContactsLinksBlock } from '../../../types';

interface IContactsLinks extends FtrContactsLinksBlock {}

const FooterContactsLinks: React.FC<IContactsLinks> = ({
  heading,
  contactItems: { address, phone, email },
  contactBtn,
}: IContactsLinks) => {
  return (
    <>
      <div className="footer-contacts-col">
        <div className="h5">{heading}</div>

        <a className="text-13" href={address.link}>
          <div className="icon-pin"></div>
          <span>{address.text}</span>
        </a>

        <a className="text-13" href={phone.link}>
          <div className="icon-phone"></div>
          <span>{phone.text}</span>
        </a>

        <a className="text-13" href={email.link}>
          <div className="icon-mail"></div>
          <span>{email.text}</span>
        </a>

        <a className="btn btn--small" href={contactBtn.link}>
          {contactBtn.text}
        </a>
      </div>
    </>
  );
};

export default FooterContactsLinks;
