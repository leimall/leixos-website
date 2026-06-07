import { defineStore } from 'pinia'
import { ref } from 'vue'

type Locale = 'zh' | 'en'

export const useLocaleStore = defineStore('locale', () => {
  const currentLocale = ref<Locale>('zh')
  
  const locales = [
    { code: 'zh', name: '中文' },
    { code: 'en', name: 'English' },
  ]
  
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
  }
  
  return {
    currentLocale,
    locales,
    setLocale,
  }
})