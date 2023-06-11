import { HeaderSection } from '../../types';

interface IHeaderLogo extends Pick<HeaderSection, 'headerLogoBlock'> {}

const HeaderLogo: React.FC<IHeaderLogo> = ({
  headerLogoBlock: { logoImg, logoUrl },
}: IHeaderLogo) => {
  return (
    <>
      <a className="logo" href={logoUrl}>
        <img src={require('../../assets/img/' + logoImg)} alt="logo" />
      </a>
    </>
  );
};

export default HeaderLogo;
