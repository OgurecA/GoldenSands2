import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем типы для наших переводов
type LanguageOption = 'eng' | 'rus';

type TranslationEntry = {
  [key in LanguageOption]: string;
};

type Translations = {
  [section: string]: {
    [key: string]: TranslationEntry;
  };
};

// Создаем словарь с переводами
const translations: Translations = {
  cookie: {
    message: {
      eng: 'This website uses cookies to ensure you get the best experience on our website.',
      rus: 'Этот сайт использует файлы cookie для обеспечения наилучшего опыта на нашем сайте.'
    },
    acceptNecessary: {
      eng: 'Accept only necessary',
      rus: 'Принять необходимые'
    },
    acceptAll: {
      eng: 'Accept all',
      rus: 'Принять все'
    }
  },
  header: {
    title: {
      eng: 'GoldenSands',
      rus: 'GoldenSands'
    }
  },
  hero: {
    title: {
      eng: 'Explore GoldenSands Services',
      rus: 'Услуги GoldenSands'
    },
    subtitle: {
      eng: 'Your trusted partner for relocating to Dubai. We help with visas, bank accounts, mortgages, and more — ensuring a smooth and stress-free transition.',
      rus: 'Надёжный партнёр для переезда в Дубай. Поможем с визами, счетами, ипотекой и другими услугами — всё для вашего комфортного и спокойного старта.'
    },
    ctaButton: {
      eng: 'Contact Us',
      rus: 'Связаться с нами'
    },
    relocationServices: {
      eng: 'Relocation Services',
      rus: 'Услуги по переезду'
    },
    expertGuidance: {
      eng: 'Trusted Expert Guidance',
      rus: 'Надёжное экспертное сопровождение'
    },    
    testimonialQuote: {
      eng: '"Dubai Living offers exceptional relocation services for expats like me."',
      rus: '"Dubai Living предлагает исключительные услуги по релокации для экспатов, таких как я."'
    },
    testimonialAuthor: {
      eng: 'Mari Kulnup',
      rus: 'Мари Кулнуп'
    }
  },
  video: {
    title: {
      eng: 'Experience Dubai',
      rus: 'Откройте для себя Дубай'
    },
    description: {
      eng: 'A glimpse into the luxury and lifestyle that await you in this vibrant city.',
      rus: 'Взгляд на роскошь и образ жизни, которые ждут вас в этом ярком городе.'
    },
    clickToUnmute: {
      eng: 'Click to unmute',
      rus: 'Нажмите, чтобы включить звук'
    }
  },
  relocation: {
    mainTitle: {
      eng: 'Relocation Made Easy',
      rus: 'Простой переезд'
    },
    mainDescription: {
      eng: 'Simplify your move with our services.',
      rus: 'Упростите ваш переезд с нашими услугами.'
    },
    title: {
      eng: 'Visa Assistance',
      rus: 'Помощь в оформлении виз'
    },    
    description: {
      eng: 'We provide full support in obtaining UAE residency visas, helping you relocate to Dubai with ease. Our team handles the paperwork, appointments, and legal processes, ensuring your transition is stress-free. A UAE residence visa opens access to local bank accounts, zero income tax, and eligibility for long-term stays for you and your family.',
      rus: 'Мы полностью сопровождаем процесс получения резидентской визы ОАЭ, упрощая ваш переезд в Дубай. Берём на себя документы, запись на биометрию и юридические процедуры. Резидентская виза позволяет открыть банковский счёт, пользоваться нулевым подоходным налогом и оставаться в стране долгосрочно — для вас и вашей семьи.'
    },
    feature1: {
      eng: 'Fast visa processing for all types of residency',
      rus: 'Быстрое оформление виз для всех типов резиденции'
    },
    feature2: {
      eng: 'Expert guidance through the entire visa process',
      rus: 'Экспертное сопровождение на протяжении всего визового процесса'
    },
    feature3: {
      eng: 'Support with document preparation and submission',
      rus: 'Поддержка в подготовке и подаче документов'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  banking: {
    title: {
      eng: 'Bank Account Setup',
      rus: 'Открытие банковского счета'
    },
    description: {
      eng: 'Our banking experts provide full support in opening personal or corporate accounts with the top banks in Dubai. We help you choose the right bank based on your needs, prepare all required documents, and assist with compliance procedures. With a UAE bank account, you gain access to global financial services, multi-currency support, and a strong banking infrastructure trusted by businesses and individuals worldwide.',
      rus: 'Наши специалисты сопровождают процесс открытия личных и корпоративных счетов в ведущих банках Дубая. Мы поможем выбрать подходящий банк под ваши цели, подготовим все документы и пройдём вместе с вами комплаенс. С банковским счётом в ОАЭ вы получаете доступ к международным финансовым услугам, мультивалютной поддержке и надёжной инфраструктуре, признанной во всём мире.'
    },
    feature1: {
      eng: 'Access to international and local banks',
      rus: 'Доступ к международным и местным банкам'
    },
    feature2: {
      eng: 'Simplified account opening process with our assistance',
      rus: 'Упрощенный процесс открытия счета с нашей помощью'
    },
    feature3: {
      eng: 'Various account options for personal and business needs',
      rus: 'Различные варианты счетов для личных и бизнес-потребностей'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  business: {
    title: {
      eng: 'Business Setup',
      rus: 'Открытие бизнеса'
    },
    description: {
      eng: 'Start your business in Dubai with confidence. We assist with company registration, legal structure selection, licensing, and compliance with UAE regulations. Whether you need a mainland, free zone, or offshore setup, our team ensures a smooth launch with minimal bureaucracy and maximum efficiency.',
      rus: 'Откройте бизнес в Дубае с нашей профессиональной поддержкой. Мы поможем выбрать юридическую форму, оформить лицензию и пройти все этапы регистрации компании — будь то в материковой зоне, фризоне или оффшоре. Обеспечим полное соответствие законам ОАЭ и максимально упростим запуск вашего бизнеса.'
    }
  },
  loan: {
    title: {
      eng: 'Mortgage Assistance',
      rus: 'Помощь с ипотекой'
    },
    description: {
      eng: 'Looking to buy property in Dubai? We help you navigate the mortgage process, from selecting the right bank to preparing documentation and improving approval chances. Get expert support to finance your new home in the UAE.',
      rus: 'Планируете покупку недвижимости в Дубае? Мы сопровождаем процесс оформления ипотеки: помогаем выбрать банк, подготовить документы и повысить шансы на одобрение. Получите профессиональную поддержку для приобретения жилья в ОАЭ.'
    },
    feature1: {
      eng: 'Access to competitive interest rates with top Dubai banks',
      rus: 'Доступ к выгодным процентным ставкам в ведущих банках Дубая'
    },
    feature2: {
      eng: 'Fast application process with our assistance',
      rus: 'Быстрый процесс подачи заявки с нашей помощью'
    },
    feature3: {
      eng: 'Financing options for properties in Palm Jumeirah and other premium locations',
      rus: 'Варианты финансирования недвижимости на Пальме Джумейра и в других престижных районах'
    },
    learnMore: {
      eng: 'Learn More',
      rus: 'Узнать больше'
    }
  },
  testimonial: {
    quote: {
      eng: 'Dubai Living offers comprehensive support for all your relocation needs.',
      rus: 'Dubai Living предлагает комплексную поддержку для всех ваших потребностей при переезде.'
    },
    author: {
      eng: 'Natalie Thompson',
      rus: 'Наталья Томпсон'
    }
  },
  cta: {
    title: {
      eng: 'Take the First Step Toward Dubai',
      rus: 'Сделайте первый шаг навстречу Дубаю'
    },
    button: {
      eng: 'Contact Us',
      rus: 'Связаться с нами'
    }
  },
  footer: {
    homepage: {
      eng: 'Homepage',
      rus: 'Homepage'
    },
    rights: {
      eng: 'All rights reserved.',
      rus: 'All rights reserved.'
    }
  }
};

// Создаем типы для нашего контекста
type LanguageContextType = {
  language: 'eng' | 'rus';
  setLanguage: (lang: 'eng' | 'rus') => void;
  t: (section: string, key: string) => string;
};

// Создаем контекст
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Создаем провайдер для контекста
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'eng' | 'rus'>('eng');

  // Функция для получения перевода
  const t = (section: string, key: string): string => {
    try {
      return translations[section][key][language] || `${section}.${key}`;
    } catch (error) {
      console.warn(`Translation not found for ${section}.${key}`);
      return `${section}.${key}`;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};