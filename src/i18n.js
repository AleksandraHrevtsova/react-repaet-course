import * as localesModule from './locales';
const locales = {...localesModule};
const { navigator: {language, languages} } = window;

const langFromBrowser = Object.keys(locales).find((localeCode) => language.includes(localeCode))
const langFromBrowserList = Object.keys(locales).find((locale) => languages.find(lang => lang).includes(locale))

export function getLangFromLocalStorage(){
  return localStorage.getItem('lang')
}

export function getInitLang(){
  let lsLang = getLangFromLocalStorage();
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  if(locales[lsLang]) return lsLang;
  if(langFromBrowser) return langFromBrowser;
  if(langFromBrowserList) return langFromBrowserList;
  return 'en'
}

export const lang = getInitLang();

function getLocalesByLang(lang) {
  return locales[lang]
}

const currentLocales = getLocalesByLang(lang);

export const getLocale = (key) => currentLocales[key] || key;

export const setSelectedLanguage = (e) => {
  console.log(e);
  if (e.target.id === 'options-view-button') return;
  localStorage.setItem('lang', e.target.value)
  window.location.reload();
}

export const availableLanguages = Object.keys(locales).map((langCode) => {
  return {
    langCode,
    label: getLocale(`${langCode}_lang`)
  }
});

