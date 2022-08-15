import * as locales from './locales';

export function getLangFromBrowser(){
  return window.navigator.language;
}

export function checkLangFromBrowserList(){
  return window.navigator.languages.find(lang => locales[lang])
}

export function getLangFromLocalStorage(){
  return localStorage.getItem('lang')
}

export function getLang(){
  const browserLang = getLangFromBrowser();
  // console.log('browserLang:', browserLang); 
  if(locales[browserLang]){
    return browserLang
  }

  const checkedLangFromBrowser = checkLangFromBrowserList();
  // console.log('checkedLangFromBrowser:', checkedLangFromBrowser); 
  if(locales[checkedLangFromBrowser]){
    return checkedLangFromBrowser
  }

  let lsLang = getLangFromLocalStorage();
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  // console.log('lsLang:', lsLang); // null
  if(locales[lsLang]){
    return lsLang
  }
  
  return 'en'
}

const lang = getLang();
// console.log('LANG:', lang);

function getLocalesByLang(lang) {
  return locales[lang]
}
const currentLocales = getLocalesByLang(lang);
// console.log('result:', result);
export function getLocale(key){
  console.log('currentLocales[key]:', currentLocales[key]);
  return currentLocales[key] || key
}
// console.log(getLocale('owr_work'));
// console.log(getLocale('get_in_touch'));


// import moment from 'moment';
// import 'moment/locale/fi';
// import * as locales from './locales';
// const translations = { ...locales };
// const availableLangs = ['en', 'fi'];

// const getLanguageFromBrowser = () => {
//   let langCode = (
//     ('languages' in navigator ? navigator.languages[0] : null) ||
//     navigator.language
//   ).substring(0, 2);

//   return langCode;
// };

// const getLang = () => {
//   let currentLang = localStorage.getItem('lang');
//   if (availableLangs.includes(currentLang)) {
//     return currentLang;
//   }
//   currentLang = getLanguageFromBrowser();
//   if (Object.prototype.hasOwnProperty.call(translations, currentLang)) {
//     localStorage.setItem('lang', currentLang);
//     return currentLang;
//   }
//   localStorage.setItem('lang', 'en');
//   return 'en';
// };

// const getSelectableLanguages = () => {
//   return Object.keys(translations);
// };

// export const setLanguage = (language) => {
//   localStorage.setItem('lang', language);
// };

// export const langCode = getLang();

// const localizations = translations[langCode];

// const localize = (key) => {
//   return localizations[key] || `${key}`;
// };

// export const selectableLanguages = getSelectableLanguages();

// export default localize;
