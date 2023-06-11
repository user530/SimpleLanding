import { GrowUsSection } from '../../../types';
import { GrowusContentMultiImg } from './content_block';
import {
  GrowusContentBtn,
  GrowusContentSubtitle,
  GrowusContentTitle,
} from './content_block';

interface IGrowusContent extends Pick<GrowUsSection, 'growusContent'> {}

const GrowUsContent: React.FC<IGrowusContent> = ({
  growusContent: { title, subtitle, multiImg, btn },
}: IGrowusContent) => {
  return (
    <>
      <div className="grow-us__content">
        <GrowusContentTitle title={title} />
        <GrowusContentSubtitle subtitle={subtitle} />
        <GrowusContentMultiImg multiImg={multiImg} />
        <GrowusContentBtn btn={btn} />
      </div>
    </>
  );
};

export default GrowUsContent;
