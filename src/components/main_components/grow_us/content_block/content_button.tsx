import { GrowUsContentBlock } from '../../../../types';

interface IGrowusBtn extends Pick<GrowUsContentBlock, 'btn'> {}

const GrowusContentBtn: React.FC<IGrowusBtn> = ({
  btn: { text, link },
}: IGrowusBtn) => {
  return (
    <>
      <div className="grow-us__btn">
        <a className="btn" href={link}>
          {text}
        </a>
      </div>
    </>
  );
};

export default GrowusContentBtn;
