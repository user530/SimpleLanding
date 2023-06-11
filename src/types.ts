export type AppLanguages = 'En' | 'De';

export type LandingContentType = {
  headerContent: HeaderSection;
  mainContent: MainSection;
  footerContent: FooterSection;
};

export type AppData = {
  [key in AppLanguages]: LandingContentType;
};

// === REDUCER ===

export interface ReducerState {
  menuOpen: boolean;
  currentLanguage: AppLanguages;
}

export type ReducerAction =
  | { type: 'SET_MENU'; payload: { menuState: boolean } }
  | { type: 'SET_LANGUAGE'; payload: { language: AppLanguages } };

// === CONTEXT ===

export interface AppContextType extends ReducerState {
  setMenu: (menuOpen: boolean) => void;
  setLanguage: (language: AppLanguages) => void;
}

// === HEADER ===

export interface HeaderSection {
  headerLogoBlock: {
    logoImg: string;
    logoUrl: string;
  };
  headerLanguages: LanguageSetting[];
  headerMenuItems: MenuItem[];
  headerBtn: LinkButton;
}

export interface LanguageSetting {
  langFlagURI: string;
  langShortTxt: AppLanguages;
}

export interface MenuItem {
  name: string;
  link: string;
}

export interface LinkButton {
  text: string;
  link: string;
}

// === MAIN SECTION ===

export interface MainSection {
  bannerSection: BannerSection;
  foundersSection: FoundersSection;
  growUsSection: GrowUsSection;
  guaranteeSection: GuaranteeSection;
  impactSection: ImpactSection;
  partnersSection: PartnersSection;
  resultsSection: ResultsSection;
  servicesSection: ServicesSection;
  standsForSection: StandsForSection;
  trafficSection: TrafficSection;
  wwdSection: WWDSection;
}

// === BANNER SECTION ===

export interface BannerSection {
  bannerHeading: string;
  bannerSlides: BannerSlide[];
}

export interface BannerSlide {
  heading: string;
  text: string;
  imgName: string;
}

// === RESULTS SECTION ===

export interface ResultsSection {
  resultsCta: ResultsCTA;
  resultItems: ResultsItem[];
}

export interface ResultsCTA {
  ctaBlockHeading: string;
  ctaBlockText: string;
  ctaBtnTxt: string;
  ctaBtnUri: string;
}

export interface ResultsItem {
  heading: string;
  text: string;
  img: string;
}

// === WHAT WE DO SECTION ===

export interface WWDSection {
  wwdMobTitle: WWDMobTitleBlock;

  wwdImg: string;

  wwdText: WWDTextBlock;
}

export interface WWDMobTitleBlock {
  heading1: string;
  heading2: string;
}

export interface WWDTextBlock {
  heading1: string;
  heading2: string;
  paragraph1: string;
  paragraph2: string;
}

// === GUARANTEE SECTION ===

export interface GuaranteeSection {
  headingTxt: string;
  grntContent: GuaranteeContentBlock;
}

export interface GuaranteeContentBlock {
  contentImg: string;
  txtBlock: GrntContTxtBlock;
}

export interface GrntContTxtBlock {
  txtBlockHeading: string;
  txtBlockIcons: GrntContTxtIcon[];
  txtBlockMotto: string;
  txtBlockText: string;
}

export interface GrntContTxtIcon {
  icon: string;
  iconName?: string;
  text: string;
}

// === SERVICES SECTION ===

export interface ServicesSection {
  servHeading: string;
  servCards: ServiceCard[];
}

export interface ServiceCard {
  cardIcon: string;
  cardIconName?: string;
  cardText: string;
}

// === PARTNERS SECTION ===

export interface PartnersSection {
  partnersHeading: string;
  partnersCards: PartnerCard[];
}

export interface PartnerCard {
  img: string;
  text: string;
  namePosition: string;
}

// === TRAFFIC SECTION ===

export interface TrafficSection {
  trafficHeading: string;
  trafficCards: TrafficCardBlock[];
  trafficBannerTxt: string;
  trafficBannerBtn: LinkButton;
}

export interface TrafficCardBlock {
  img: string;
  imgName?: string;
}

// === IMPACT SECTION ===

export interface ImpactSection {
  impactHeading: string;
  impactQuote: ImpactQuoteBlock;
  impactContent: ImpactContentBlock;
  impactCTA: ImpactCTABlock;
}

export interface ImpactQuoteBlock {
  quoteTxt: string;
  quoteAuthor: string;
}

export interface ImpactContentBlock {
  contentImg: string;
  contentResults: [ImpactContentSingleResult, ImpactContentSingleResult];
  contentText: ImpactContentTextBlock;
}

export interface ImpactContentSingleResult {
  img: string;
  heading: string;
  text: string;
}

export interface ImpactContentTextBlock {
  mainText: string;
  subText: string;
}

export interface ImpactCTABlock {
  text: string;
  button: LinkButton;
}

// === FOUNDERS SECTION ===

export interface FoundersSection {
  foundersHeading: string;
  foundersText: string;
  foundersCards: FounderCard[];
}

export interface FounderCard {
  founderImg: string;
  founderName: string;
  founderPosition: string;
}

// === STANDS SECTION ===

export interface StandsForSection {
  standsHeading: string;
  standsCards: StandsForCard[];
}

export interface StandsForCard {
  cardImg: string;
  cardHeading: string;
  cardText: string;
}

// === GROWUS SECTION ===

export interface GrowUsSection {
  growusHeading: string;
  growusContent: GrowUsContentBlock;
}

export interface GrowUsContentBlock {
  title: string;
  subtitle: string;
  multiImg: [string, string, string];
  btn: LinkButton;
}

// === FOOTER SECTION ===

export interface FooterSection {
  footerContactsBlock: FtrContactsBlock;
  footerBottomBlock: FtrBottomBlock;
}

export interface FtrContactsBlock {
  aboutUsBlock: FtrContactsAboutBlock;
  contactLinks: FtrContactsLinksBlock;
}

export interface FtrContactsAboutBlock {
  aboutUsHeading: string;
  aboutUsText: string;
}

export interface FtrContactsLinksBlock {
  heading: string;
  contactItems: {
    address: FtrContactLink;
    phone: FtrContactLink;
    email: FtrContactLink;
  };
  contactBtn: LinkButton;
}

export interface FtrContactLink {
  text: string;
  link: string;
}

export interface FtrBottomBlock {
  copyrightBlock: FtrBottomCopyright;
  menuBlock: MenuItem[];
}

export interface FtrBottomCopyright {
  copyrightImg: FtrBottomCopyImg;
  copyrightText: string;
}

export interface FtrBottomCopyImg {
  imageLink: string;
  imageName?: string;
  link: string;
}
