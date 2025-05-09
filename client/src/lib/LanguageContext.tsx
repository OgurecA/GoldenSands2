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
  header: {
    title: {
      eng: 'Dubai Living',
      rus: 'Жизнь в Дубае'
    }
  },
  hero: {
    title: {
      eng: 'Explore Dubai Living Services',
      rus: 'Услуги Dubai Living'
    },
    subtitle: {
      eng: 'Your ultimate guide to living in Dubai. Get assistance with visas, bank accounts, loans, and more to make your move stress-free.',
      rus: 'Ваш путеводитель по жизни в Дубае. Получите помощь с визами, банковскими счетами, кредитами и другими услугами для комфортного переезда.'
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
      eng: 'Expert Guidance',
      rus: 'Экспертное руководство'
    },
    testimonialQuote: {
      eng: '"Their visa service saved me, since I didn\'t know anything about the visa creation process at the time."',
      rus: '"Их визовая служба меня выручила, так как я ничего не знал о процессе создания визы в то время."'
    },
    testimonialAuthor: {
      eng: 'Mari Kulnup',
      rus: 'Мари Кулнуп'
    }
  },
  video: {
    title: {
      eng: 'Experience Dubai',
      rus: 'Опыт Дубая'
    },
    description: {
      eng: 'A glimpse into the luxury and lifestyle that await you in this vibrant city.',
      rus: 'Взгляд на роскошь и образ жизни, которые ждут вас в этом ярком городе.'
    }
  },
  relocation: {
    title: {
      eng: 'Visa & Relocation Services',
      rus: 'Визовые и переезднные услуги'
    },
    description: {
      eng: 'We provide comprehensive visa processing and relocation assistance to make your move to Dubai seamless.',
      rus: 'Мы предоставляем комплексную обработку виз и помощь в переезде, чтобы ваш переезд в Дубай был безупречным.'
    }
  },
  banking: {
    title: {
      eng: 'Bank Account Setup',
      rus: 'Открытие банковского счета'
    },
    description: {
      eng: 'Our banking experts will guide you through the process of opening an account with the top banks in Dubai.',
      rus: 'Наши банковские специалисты проведут вас через процесс открытия счета в ведущих банках Дубая.'
    }
  },
  loan: {
    title: {
      eng: 'Loan Support',
      rus: 'Поддержка по кредитам'
    },
    description: {
      eng: 'Need financial assistance? We provide guidance on loans to help you secure the funds you need for your new life in Dubai.',
      rus: 'Нужна финансовая помощь? Мы предоставляем консультации по кредитам, чтобы помочь вам получить средства, необходимые для вашей новой жизни в Дубае.'
    }
  },
  testimonial: {
    title: {
      eng: 'What Our Clients Say',
      rus: 'Что говорят наши клиенты'
    },
    quote: {
      eng: 'Dubai Living made my transition to Dubai incredibly smooth. Their team handled everything from visa processing to bank account setup with utmost professionalism.',
      rus: 'Dubai Living сделали мой переезд в Дубай невероятно гладким. Их команда профессионально справилась со всем: от обработки визы до открытия банковского счета.'
    },
    author: {
      eng: 'Alexandra Smith',
      rus: 'Александра Смит'
    },
    position: {
      eng: 'Marketing Executive',
      rus: 'Маркетинг директор'
    }
  },
  cta: {
    title: {
      eng: 'Start Your Dubai Journey Today.',
      rus: 'Начните ваше путешествие в Дубай сегодня.'
    },
    button: {
      eng: 'Contact Us',
      rus: 'Связаться с нами'
    }
  },
  footer: {
    homepage: {
      eng: 'Homepage',
      rus: 'Домашняя страница'
    },
    rights: {
      eng: 'All rights reserved.',
      rus: 'Все права защищены.'
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