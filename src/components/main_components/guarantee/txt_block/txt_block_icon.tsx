import { GrntContTxtIcon } from '../../../../types';

interface ITxtBlockIcon extends GrntContTxtIcon {}

const TxtBlockIcon: React.FC<ITxtBlockIcon> = ({
  icon,
  iconName,
  text,
}: ITxtBlockIcon) => {
  return (
    <>
      <div className="guarantee-icons__item">
        <img
          className="svg-guarant1"
          src={require('../../../../assets/img/' + icon)}
          alt={iconName || 'icon'}
        />
        <div className="text-20">{text}</div>
      </div>
    </>
  );
};

export default TxtBlockIcon;
