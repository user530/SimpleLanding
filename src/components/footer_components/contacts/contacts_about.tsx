import { FtrContactsAboutBlock } from '../../../types';

interface IContactsAbout extends FtrContactsAboutBlock {}

const FooterContactsAbout: React.FC<IContactsAbout> = ({
  aboutUsHeading,
  aboutUsText,
}: IContactsAbout) => {
  return (
    <>
      <div className="footer-contacts-col">
        <div className="h5">{aboutUsHeading}</div>
        <div className="text-13">
          <p dangerouslySetInnerHTML={{ __html: aboutUsText }}></p>
        </div>
      </div>
    </>
  );
};

export default FooterContactsAbout;
