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

export function getInitLang(){
  let lsLang = getLangFromLocalStorage();
  lsLang = lsLang === 'ua' ? 'uk' : lsLang
  // console.log('lsLang:', lsLang); // null
  if(locales[lsLang]){
    return lsLang
  }

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

  return 'en'
}

export const lang = getInitLang();
// console.log('LANG:', lang);

function getLocalesByLang(lang) {
  return locales[lang]
}
const currentLocales = getLocalesByLang(lang);
// console.log('result:', result);

export function getLocale(key){
  // console.log('currentLocales[key]:', currentLocales[key]);
  return currentLocales[key] || key
}