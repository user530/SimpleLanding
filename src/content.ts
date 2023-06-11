import { AppData } from './types';

const LandingContent: AppData = {
  En: {
    headerContent: {
      headerLogoBlock: {
        logoImg: 'logo.svg',
        logoUrl: '#top',
      },
      headerLanguages: [
        { langFlagURI: 'flag-en.webp', langShortTxt: 'En' },
        { langFlagURI: 'flag-de.webp', langShortTxt: 'De' },
      ],
      headerMenuItems: [
        { name: 'Home', link: '#!' },
        { name: 'Agency', link: '#!' },
        { name: 'Join our team', link: '#!' },
        { name: 'Contact', link: '#!' },
      ],
      headerBtn: {
        text: 'Grow with us',
        link: '#!',
      },
    },
    mainContent: {
      bannerSection: {
        bannerHeading: 'Cutting Edge Performance\xa0Marketing At Scale',
        bannerSlides: [
          {
            heading: 'TAILORED CREATIVES',
            text: "We'll provide you with a team of creative geniuses",
            imgName: 'header-slider/slide1.svg',
          },
          {
            heading: 'Experienced Media Buying',
            text: 'Best in className at delivering results fast - at scale!',
            imgName: 'header-slider/slide2.svg',
          },
          {
            heading: 'Marketing Solutions That Deliver',
            text: "We've generated over 250 million Euros in revenue for clients around the world",
            imgName: 'header-slider/slide3.svg',
          },
        ],
      },

      resultsSection: {
        resultsCta: {
          ctaBlockHeading: '6H in numbers',
          ctaBlockText:
            'We have driven over €250 Million+ in revenue for our clients!',
          ctaBtnTxt: 'Grow with us',
          ctaBtnUri: '#!',
        },

        resultItems: [
          {
            heading: '300M+',
            text: 'Ad Clicks',
            img: 'result1.svg',
          },
          {
            heading: '5M+',
            text: 'Leads Acquired',
            img: 'result2.svg',
          },
          {
            heading: '250M+',
            text: 'Revenue Generated',
            img: 'result3.svg',
          },
          {
            heading: '500K+',
            text: 'Creative Variations',
            img: 'result4.svg',
          },
        ],
      },

      wwdSection: {
        wwdMobTitle: {
          heading1: 'agency',
          heading2: 'What We Do',
        },

        wwdImg: 'ww-do.svg',

        wwdText: {
          heading1: 'agency',
          heading2: 'What We Do',
          paragraph1:
            '<b>6H has driven millions of sales for our clients</b> across the globe. Our largest markets are the US, UK, and Germany.',
          paragraph2:
            'We work closely with large clients, supporting their in-house marketing teams and managing their ad accounts. As a premium partner for <b>Taboola</b>, in the DACH region, we fully manage our clients Native advertising efforts.',
        },
      },

      guaranteeSection: {
        headingTxt: 'Our Performance Guarantee',
        grntContent: {
          contentImg: 'guarantee.svg',

          txtBlock: {
            txtBlockHeading: 'In 3 months we will',
            txtBlockIcons: [
              {
                icon: 'guarant1.svg',
                text: 'Scale up your AD Spend',
              },
              {
                icon: 'guarant2.svg',
                text: 'Reduce your CPA/CPL',
              },
              {
                icon: 'guarant3.svg',
                text: 'Grow your business',
              },
            ],
            txtBlockMotto: 'WE DELIVER RESULTS!',
            txtBlockText:
              'We promise our partners transparency, creativity, and performance. From onboarding and brainstorming creative approaches to executing and optimizing campaigns.',
          },
        },
      },

      servicesSection: {
        servHeading: 'We Offer The Following Services',
        servCards: [
          {
            cardIcon: 'service1.svg',
            cardText: 'Account audit \n and setup',
          },
          {
            cardIcon: 'service2.svg',
            cardText: 'Efficient \n Scaling',
          },
          {
            cardIcon: 'service3.svg',
            cardText: 'High Quality \n Creatives',
          },
          {
            cardIcon: 'service4.svg',
            cardText: 'Optimized and Agile \n Landing Pages',
          },
          {
            cardIcon: 'service5.svg',
            cardText: 'Experienced \n Copywriting',
          },
          {
            cardIcon: 'service6.svg',
            cardText: 'Elite Team Of \n Media Buyers',
          },
        ],
      },

      partnersSection: {
        partnersHeading: 'string',
        partnersCards: [
          {
            img: 'partners/1.webp',
            text: '6H has helped us increase our campaigns and lowered our costs greatly! They are our 1-stop shop advertising solution for all advertising solutions.',
            namePosition: 'Ali Gani, Head of Marketing McMakler.',
          },
          {
            img: 'partners/2.webp',
            text: '6H agency is the best partner for us for data-driven and extremely fast scalable native advertising. In addition, there is a perceived 24/7 support with a consulting offering that extends beyond the main projects.',
            namePosition: 'Johannes Juretzka, Founder/Owner',
          },
          {
            img: 'partners/3.webp',
            text: 'Michael and his team are the ideal partners for us: fast, competent, results-driven and fit into our corporate culture.',
            namePosition: 'Cosimo Helmboldt, Chief Marketing Officer',
          },
          {
            img: 'partners/4.webp',
            text: 'When we think performance and Taboola, we think 6H. The team in Cologne has consistently delivered impressive results for a huge range of clients. Our Go-To Partner in the German space.',
            namePosition:
              'Emina Biscevic Sales director, Enterprise and Performance DACH at Taboola.',
          },
          {
            img: 'partners/5.webp',
            text: '6H is consistently delivering top-notch performance at scale. The team in Cologne has helped us build up our native campaigns and funnels from scratch. They are honest and transparent partners.',
            namePosition:
              'Sascha Arndt, Head of Display, Affiliate & E-Mail at ERGO Group AG.',
          },
        ],
      },

      trafficSection: {
        trafficHeading: 'Traffic Source Partners',
        trafficCards: [
          {
            img: 'partners/outbrain.webp',
            imgName: 'outbrain',
          },
          {
            img: 'partners/facebook.webp',
            imgName: 'facebook',
          },
          {
            img: 'partners/google.webp',
            imgName: 'google',
          },
          {
            img: 'partners/instagram_logo.svg',
            imgName: 'instagram',
          },
          {
            img: 'partners/LiquidM.webp',
            imgName: 'liquidm',
          },
          {
            img: 'partners/adup.webp',
            imgName: 'adup',
          },
          {
            img: 'partners/taboola.webp',
            imgName: 'taboola',
          },
          {
            img: 'partners/google.webp',
            imgName: 'google',
          },
        ],
        trafficBannerTxt: 'Let us scale your marketing campaigns',
        trafficBannerBtn: {
          text: 'Grow with us',
          link: '#!',
        },
      },

      impactSection: {
        impactHeading: 'Our impact',
        impactQuote: {
          quoteTxt:
            '“Those who are happiest are those who do the most for others”',
          quoteAuthor: 'Booker T. Washington',
        },
        impactContent: {
          contentImg: 'big-spot.svg',
          contentResults: [
            {
              img: 'hands.svg',
              heading: '€1.4M+',
              text: 'Raised \n for Charity',
            },
            {
              img: 'payment.svg',
              heading: '3',
              text: 'Initiatives \n Supported',
            },
          ],
          contentText: {
            mainText: 'Our CSR initiatives in numbers',
            subText:
              'We believe in helping others, and pursuing a variety of projects and ideas around CSR. Although our CSR initiatives are in their infancy, they remain a fundamental part of our corporate identity.',
          },
        },
        impactCTA: {
          text: 'Do Good With Marketing',
          button: {
            text: 'Grow with us',
            link: '#!',
          },
        },
      },

      foundersSection: {
        foundersHeading: 'Our Founders',
        foundersText:
          "With over 20 years of combined marketing experience at it's helm, 6H Agency aims to change the way traditional client - agency partnerships work, focusing instead on value added and quality of service delivered.",
        foundersCards: [
          {
            founderImg: 'team1.webp',
            founderName: 'Michael Brenner',
            founderPosition: 'CEO, Co-founder',
          },
          {
            founderImg: 'team2.webp',
            founderName: 'Max Gabath',
            founderPosition: 'Co-founder',
          },
          {
            founderImg: 'team1.webp',
            founderName: 'Michael Brenner',
            founderPosition: 'CEO, Co-founder',
          },
          {
            founderImg: 'team2.webp',
            founderName: 'Max Gabath',
            founderPosition: 'Co-founder',
          },
        ],
      },

      standsForSection: {
        standsHeading: 'What We Stand For',
        standsCards: [
          {
            cardImg: 'stand-for1.svg',
            cardHeading: 'DIVERSITY',
            cardText:
              'We believe blending our unique backgrounds, international mindsets, and multi-cultural awareness enriches us as one global team, yields stellar results for our customers, and challenges us to be better every single day.',
          },
          {
            cardImg: 'stand-for2.svg',
            cardHeading: 'PASSION',
            cardText:
              'While each of us forms our own unique path, we are united by entrepreneurship, humbleness, and the desire to be the best version of ourselves. We live and breathe what we do. And that is what makes us experts in helping our customers’ businesses thrive.',
          },
          {
            cardImg: 'stand-for3.svg',
            cardHeading: 'TEAM SPIRIT',
            cardText:
              'We welcome candidates from all academic and professional backgrounds. We are looking for innovative thinkers and hands-on enthusiasts with a passion for the start-up environment to join our international team.',
          },
        ],
      },

      growUsSection: {
        growusHeading: 'GROW WITH US',
        growusContent: {
          title: 'Tired of stagnant growth or expensive marketing gurus?',
          subtitle:
            "Take our agency onboarding quiz and we'll get in touch with you!",
          multiImg: [
            'grow-rocket-bg.svg',
            'grow-rocket.svg',
            'grow-img-text.svg',
          ],
          btn: { text: 'Take the Quiz', link: '#!' },
        },
      },
    },
    footerContent: {
      footerContactsBlock: {
        aboutUsBlock: {
          aboutUsHeading: 'ABOUT US',
          aboutUsText:
            '<strong>6H Agency</strong> is the leading Performance Marketing Agency for companies looking to grow their business',
        },
        contactLinks: {
          heading: 'CONTACT US',
          contactItems: {
            address: { link: '#!', text: 'Brüsseler Str. 21, 50674 Köln' },
            phone: { link: 'tel:+4922167059045', text: '(+49) 221 670 59045' },
            email: { link: 'mailto:hello@6h.agency', text: 'hello@6h.agency' },
          },
          contactBtn: {
            text: 'Grow with us',
            link: '#!',
          },
        },
      },

      footerBottomBlock: {
        copyrightBlock: {
          copyrightImg: {
            imageLink: 'logo.svg',
            link: '#top',
            imageName: 'logo',
          },
          copyrightText:
            'Cutting Edge <strong>Performance Marketing</strong> At Scale &copy; 2020 All rights reserved',
        },

        menuBlock: [
          { link: '#top', name: 'Home' },
          { link: '#!', name: 'About' },
          { link: '#!', name: 'Services' },
          { link: '#!', name: 'Support' },
          { link: '#!', name: 'Datenschutzerklärung' },
          { link: '#!', name: 'AGB' },
          { link: '#!', name: 'Impressum' },
        ],
      },
    },
  },
  De: {
    headerContent: {
      headerLogoBlock: {
        logoImg: 'logo.svg',
        logoUrl: '#top',
      },
      headerLanguages: [
        { langFlagURI: 'flag-en.webp', langShortTxt: 'En' },
        { langFlagURI: 'flag-de.webp', langShortTxt: 'De' },
      ],
      headerMenuItems: [
        { name: 'Heim', link: '#!' },
        { name: 'Agentur', link: '#!' },
        { name: 'Trete unserem Team bei', link: '#!' },
        { name: 'Kontakt', link: '#!' },
      ],
      headerBtn: {
        text: 'Wachsen Sie mit uns',
        link: '#!',
      },
    },
    mainContent: {
      bannerSection: {
        bannerHeading: 'Modernstes Performance-Marketing im großen Maßstab',
        bannerSlides: [
          {
            heading: 'TAILORED CREATIVES',
            text: "We'll provide you with a team of creative geniuses",
            imgName: 'header-slider/slide1.svg',
          },
          {
            heading: 'Experienced Media Buying',
            text: 'Best in className at delivering results fast - at scale!',
            imgName: 'header-slider/slide2.svg',
          },
          {
            heading: 'Marketing Solutions That Deliver',
            text: "We've generated over 250 million Euros in revenue for clients around the world",
            imgName: 'header-slider/slide3.svg',
          },
        ],
      },

      resultsSection: {
        resultsCta: {
          ctaBlockHeading: '6H in numbers',
          ctaBlockText:
            'We have driven over €250 Million+ in revenue for our clients!',
          ctaBtnTxt: 'Grow with us',
          ctaBtnUri: '#!',
        },

        resultItems: [
          {
            heading: '300M+',
            text: 'Ad Clicks',
            img: 'result1.svg',
          },
          {
            heading: '5M+',
            text: 'Leads Acquired',
            img: 'result2.svg',
          },
          {
            heading: '250M+',
            text: 'Revenue Generated',
            img: 'result3.svg',
          },
          {
            heading: '500K+',
            text: 'Creative Variations',
            img: 'result4.svg',
          },
        ],
      },

      wwdSection: {
        wwdMobTitle: {
          heading1: 'agency',
          heading2: 'What We Do',
        },

        wwdImg: 'ww-do.svg',

        wwdText: {
          heading1: 'agency',
          heading2: 'What We Do',
          paragraph1:
            '<b>6H has driven millions of sales for our clients</b> across the globe. Our largest markets are the US, UK, and Germany.',
          paragraph2:
            'We work closely with large clients, supporting their in-house marketing teams and managing their ad accounts. As a premium partner for <b>Taboola</b>, in the DACH region, we fully manage our clients Native advertising efforts.',
        },
      },

      guaranteeSection: {
        headingTxt: 'Our Performance Guarantee',
        grntContent: {
          contentImg: 'guarantee.svg',

          txtBlock: {
            txtBlockHeading: 'In 3 months we will',
            txtBlockIcons: [
              {
                icon: 'guarant1.svg',
                text: 'Scale up your AD Spend',
              },
              {
                icon: 'guarant2.svg',
                text: 'Reduce your CPA/CPL',
              },
              {
                icon: 'guarant3.svg',
                text: 'Grow your business',
              },
            ],
            txtBlockMotto: 'WE DELIVER RESULTS!',
            txtBlockText:
              'We promise our partners transparency, creativity, and performance. From onboarding and brainstorming creative approaches to executing and optimizing campaigns.',
          },
        },
      },

      servicesSection: {
        servHeading: 'We Offer The Following Services',
        servCards: [
          {
            cardIcon: 'service1.svg',
            cardText: 'Account audit \n and setup',
          },
          {
            cardIcon: 'service2.svg',
            cardText: 'Efficient \n Scaling',
          },
          {
            cardIcon: 'service3.svg',
            cardText: 'High Quality \n Creatives',
          },
          {
            cardIcon: 'service4.svg',
            cardText: 'Optimized and Agile \n Landing Pages',
          },
          {
            cardIcon: 'service5.svg',
            cardText: 'Experienced \n Copywriting',
          },
          {
            cardIcon: 'service6.svg',
            cardText: 'Elite Team Of \n Media Buyers',
          },
        ],
      },

      partnersSection: {
        partnersHeading: 'string',
        partnersCards: [
          {
            img: 'partners/1.webp',
            text: '6H has helped us increase our campaigns and lowered our costs greatly! They are our 1-stop shop advertising solution for all advertising solutions.',
            namePosition: 'Ali Gani, Head of Marketing McMakler.',
          },
          {
            img: 'partners/2.webp',
            text: '6H agency is the best partner for us for data-driven and extremely fast scalable native advertising. In addition, there is a perceived 24/7 support with a consulting offering that extends beyond the main projects.',
            namePosition: 'Johannes Juretzka, Founder/Owner',
          },
          {
            img: 'partners/3.webp',
            text: 'Michael and his team are the ideal partners for us: fast, competent, results-driven and fit into our corporate culture.',
            namePosition: 'Cosimo Helmboldt, Chief Marketing Officer',
          },
          {
            img: 'partners/4.webp',
            text: 'When we think performance and Taboola, we think 6H. The team in Cologne has consistently delivered impressive results for a huge range of clients. Our Go-To Partner in the German space.',
            namePosition:
              'Emina Biscevic Sales director, Enterprise and Performance DACH at Taboola.',
          },
          {
            img: 'partners/5.webp',
            text: '6H is consistently delivering top-notch performance at scale. The team in Cologne has helped us build up our native campaigns and funnels from scratch. They are honest and transparent partners.',
            namePosition:
              'Sascha Arndt, Head of Display, Affiliate & E-Mail at ERGO Group AG.',
          },
        ],
      },

      trafficSection: {
        trafficHeading: 'Traffic Source Partners',
        trafficCards: [
          {
            img: 'partners/outbrain.webp',
            imgName: 'outbrain',
          },
          {
            img: 'partners/facebook.webp',
            imgName: 'facebook',
          },
          {
            img: 'partners/google.webp',
            imgName: 'google',
          },
          {
            img: 'partners/instagram_logo.svg',
            imgName: 'instagram',
          },
          {
            img: 'partners/LiquidM.webp',
            imgName: 'liquidm',
          },
          {
            img: 'partners/adup.webp',
            imgName: 'adup',
          },
          {
            img: 'partners/taboola.webp',
            imgName: 'taboola',
          },
          {
            img: 'partners/google.webp',
            imgName: 'google',
          },
        ],
        trafficBannerTxt: 'Let us scale your marketing campaigns',
        trafficBannerBtn: {
          text: 'Grow with us',
          link: '#!',
        },
      },

      impactSection: {
        impactHeading: 'Our impact',
        impactQuote: {
          quoteTxt:
            '“Those who are happiest are those who do the most for others”',
          quoteAuthor: 'Booker T. Washington',
        },
        impactContent: {
          contentImg: 'big-spot.svg',
          contentResults: [
            {
              img: 'hands.svg',
              heading: '€1.4M+',
              text: 'Raised \n for Charity',
            },
            {
              img: 'payment.svg',
              heading: '3',
              text: 'Initiatives \n Supported',
            },
          ],
          contentText: {
            mainText: 'Our CSR initiatives in numbers',
            subText:
              'We believe in helping others, and pursuing a variety of projects and ideas around CSR. Although our CSR initiatives are in their infancy, they remain a fundamental part of our corporate identity.',
          },
        },
        impactCTA: {
          text: 'Do Good With Marketing',
          button: {
            text: 'Grow with us',
            link: '#!',
          },
        },
      },

      foundersSection: {
        foundersHeading: 'Our Founders',
        foundersText:
          "With over 20 years of combined marketing experience at it's helm, 6H Agency aims to change the way traditional client - agency partnerships work, focusing instead on value added and quality of service delivered.",
        foundersCards: [
          {
            founderImg: 'team1.webp',
            founderName: 'Michael Brenner',
            founderPosition: 'CEO, Co-founder',
          },
          {
            founderImg: 'team2.webp',
            founderName: 'Max Gabath',
            founderPosition: 'Co-founder',
          },
          {
            founderImg: 'team1.webp',
            founderName: 'Michael Brenner',
            founderPosition: 'CEO, Co-founder',
          },
          {
            founderImg: 'team2.webp',
            founderName: 'Max Gabath',
            founderPosition: 'Co-founder',
          },
        ],
      },

      standsForSection: {
        standsHeading: 'What We Stand For',
        standsCards: [
          {
            cardImg: 'stand-for1.svg',
            cardHeading: 'DIVERSITY',
            cardText:
              'We believe blending our unique backgrounds, international mindsets, and multi-cultural awareness enriches us as one global team, yields stellar results for our customers, and challenges us to be better every single day.',
          },
          {
            cardImg: 'stand-for2.svg',
            cardHeading: 'PASSION',
            cardText:
              'While each of us forms our own unique path, we are united by entrepreneurship, humbleness, and the desire to be the best version of ourselves. We live and breathe what we do. And that is what makes us experts in helping our customers’ businesses thrive.',
          },
          {
            cardImg: 'stand-for3.svg',
            cardHeading: 'TEAM SPIRIT',
            cardText:
              'We welcome candidates from all academic and professional backgrounds. We are looking for innovative thinkers and hands-on enthusiasts with a passion for the start-up environment to join our international team.',
          },
        ],
      },

      growUsSection: {
        growusHeading: 'GROW WITH US',
        growusContent: {
          title: 'Tired of stagnant growth or expensive marketing gurus?',
          subtitle:
            "Take our agency onboarding quiz and we'll get in touch with you!",
          multiImg: [
            'grow-rocket-bg.svg',
            'grow-rocket.svg',
            'grow-img-text.svg',
          ],
          btn: { text: 'Take the Quiz', link: '#!' },
        },
      },
    },
    footerContent: {
      footerContactsBlock: {
        aboutUsBlock: {
          aboutUsHeading: 'ABOUT US',
          aboutUsText:
            '<strong>6H Agency</strong> is the leading Performance Marketing Agency for companies looking to grow their business',
        },
        contactLinks: {
          heading: 'CONTACT US',
          contactItems: {
            address: { link: '#!', text: 'Brüsseler Str. 21, 50674 Köln' },
            phone: { link: 'tel:+4922167059045', text: '(+49) 221 670 59045' },
            email: { link: 'mailto:hello@6h.agency', text: 'hello@6h.agency' },
          },
          contactBtn: {
            text: 'Grow with us',
            link: '#!',
          },
        },
      },

      footerBottomBlock: {
        copyrightBlock: {
          copyrightImg: {
            imageLink: 'logo.svg',
            link: '#top',
            imageName: 'logo',
          },
          copyrightText:
            'Cutting Edge <strong>Performance Marketing</strong> At Scale &copy; 2020 All rights reserved',
        },

        menuBlock: [
          { link: '#top', name: 'Home' },
          { link: '#!', name: 'About' },
          { link: '#!', name: 'Services' },
          { link: '#!', name: 'Support' },
          { link: '#!', name: 'Datenschutzerklärung' },
          { link: '#!', name: 'AGB' },
          { link: '#!', name: 'Impressum' },
        ],
      },
    },
  },
};

export default LandingContent;
