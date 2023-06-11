import { WWDSection } from '../../../types';

interface IWWDImg extends Pick<WWDSection, 'wwdImg'> {}

const WWDImg: React.FC<IWWDImg> = ({ wwdImg }: IWWDImg) => {
  return (
    <>
      <div className="ww-do__img">
        <img
          src={require('../../../assets/img/' + wwdImg)}
          width="540"
          alt="img"
        />
      </div>
    </>
  );
};

export default WWDImg;
