import './App.css';
import { Header, Main, Footer } from './components';
import { AppLanguages, LandingContentType } from './types';
import LandingContent from './content';
import { useAppContext } from './utils/context';

const App = () => {
  let language: AppLanguages = 'En';

  const context = useAppContext();
  if (context) language = context.currentLanguage;

  const { headerContent, mainContent, footerContent }: LandingContentType =
    LandingContent[language];

  return (
    <>
      <Header {...headerContent} />
      <Main {...mainContent} />
      <Footer {...footerContent} />
    </>
  );
};

export default App;
