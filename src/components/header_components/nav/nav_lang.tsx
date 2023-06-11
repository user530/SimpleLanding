import { AppLanguages, HeaderSection } from '../../../types';
import { useAppContext } from '../../../utils/context';

interface INavLanguage extends Pick<HeaderSection, 'headerLanguages'> {
  mode: 'mobile' | 'tablet';
}

const NavLanguage: React.FC<INavLanguage> = ({
  headerLanguages,
  mode,
}: INavLanguage) => {
  let flagClickHandler: (lang: AppLanguages) => void;

  const context = useAppContext();
  if (context)
    flagClickHandler = (lang: AppLanguages) => context.setLanguage(lang);

  return (
    <>
      <div className={`header-lang flex-${mode}`}>
        {headerLanguages.map(({ langFlagURI, langShortTxt }, ind) => (
          <button
            key={ind}
            className={`header-lang__item ${ind === 0 ? 'active' : ''}`}
            onClick={() => flagClickHandler(langShortTxt)}
          >
            <img
              src={require('../../../assets/img/' + langFlagURI)}
              width="30"
              height="20"
              alt={`flag-${langShortTxt}`}
            />

            <span>{langShortTxt}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default NavLanguage;
