import { GrowUsContentBlock } from '../../../../types';

interface IGrowusSubtitle extends Pick<GrowUsContentBlock, 'subtitle'> {}

const GrowusContentSubtitle: React.FC<IGrowusSubtitle> = ({
  subtitle,
}: IGrowusSubtitle) => {
  return (
    <>
      <div className="grow-us__subtitle">
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default GrowusContentSubtitle;
