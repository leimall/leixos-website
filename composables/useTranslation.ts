import { useLocaleStore } from '~/stores/locale'
import zh from '~/locales/zh.json'
import en from '~/locales/en.json'

type Translations = typeof zh

export const useTranslation = () => {
  const localeStore = useLocaleStore()
  
  const translations: Record<string, Translations> = {
    zh,
    en,
  }
  
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[localeStore.currentLocale]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value || key
  }
  
  return {
    t,
  }
}