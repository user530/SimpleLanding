import { GrowUsContentBlock } from '../../../../types';

interface IGrowusTitle extends Pick<GrowUsContentBlock, 'title'> {}

const GrowusContentTitle: React.FC<IGrowusTitle> = ({
  title,
}: IGrowusTitle) => {
  return (
    <>
      <div className="grow-us__title">
        <p>{title}</p>
      </div>
    </>
  );
};

export default GrowusContentTitle;
