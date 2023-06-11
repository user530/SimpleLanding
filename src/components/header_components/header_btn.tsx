import { LinkButton } from '../../types';

interface IHeaderBtn extends LinkButton {}

const HeaderBtn: React.FC<IHeaderBtn> = ({ text, link }: IHeaderBtn) => {
  return (
    <>
      <div className="header-btn">
        <a className="btn btn--small" href={link}>
          {text}
        </a>
      </div>
    </>
  );
};

export default HeaderBtn;
