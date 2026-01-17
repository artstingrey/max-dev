export const mainLangs = [
  { locale: 'en', name: 'English' },
  { locale: 'ru', name: 'Russian' }
];

export const getMainLocales = () => {
  return mainLangs.map(lang => lang.locale);
};

type Locale = typeof mainLangs[number]['locale'];

export const getLangByLocale = (locale: Locale) => {
  return mainLangs.find(lang => lang.locale === locale) || null;
};