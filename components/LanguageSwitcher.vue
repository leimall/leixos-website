<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      :class="[
        'flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors',
        scrolled 
          ? 'border-gray-300 text-dark-gray hover:bg-gray-100' 
          : 'border-white/30 text-white hover:bg-white/10',
      ]"
    >
      <span class="text-sm font-medium">{{ currentLocaleLabel }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    
    <div 
      v-if="isOpen" 
      class="absolute right-0 mt-2 w-40 rounded-lg bg-white border border-gray-200 shadow-xl z-50"
    >
      <button
        v-for="locale in locales"
        :key="locale.code"
        @click="changeLocale(locale.code)"
        class="w-full px-4 py-3 text-left text-sm text-dark-gray hover:bg-light-gray transition-colors first:rounded-t-lg last:rounded-b-lg"
      >
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useLocaleStore } from '~/stores/locale'

const props = defineProps<{
  scrolled?: boolean
}>()

const localeStore = useLocaleStore()
const isOpen = ref(false)

const locales = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' },
]

const currentLocaleLabel = computed(() => {
  const current = locales.find(l => l.code === localeStore.currentLocale)
  return current ? current.name : '中文'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLocale = (localeCode: string) => {
  localeStore.setLocale(localeCode as 'zh' | 'en')
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>