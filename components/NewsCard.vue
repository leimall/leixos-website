<template>
  <NuxtLink v-if="to" :to="to" class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden block">
    <div :class="['h-48 flex items-center justify-center relative', imageBgClass]">
      <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="category === 'project'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        <path v-else-if="category === 'regional'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        <path v-else-if="category === 'industry'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
      <span v-if="category" :class="tagBgClass" class="absolute top-4 left-4 text-white text-xs px-2 py-1 rounded">{{ displayCategory }}</span>
    </div>
    <div class="p-6">
      <div v-if="date" class="text-sm text-mid-gray mb-2">{{ date }}</div>
      <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">
        {{ displayTitle }}
      </h3>
    </div>
  </NuxtLink>
  <div v-else class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
    <div :class="['h-48 flex items-center justify-center relative', imageBgClass]">
      <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="category === 'project'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        <path v-else-if="category === 'regional'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        <path v-else-if="category === 'industry'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
      <span v-if="category" :class="tagBgClass" class="absolute top-4 left-4 text-white text-xs px-2 py-1 rounded">{{ displayCategory }}</span>
    </div>
    <div class="p-6">
      <div v-if="date" class="text-sm text-mid-gray mb-2">{{ date }}</div>
      <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">
        {{ displayTitle }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const props = defineProps<{
  category?: string
  categoryColor?: string
  date?: string
  title?: string
  image?: string
  to?: string
}>()

const { t } = useTranslation()

const colorMap: Record<string, { bg: string; tag: string }> = {
  primary: { bg: 'from-blue-100 to-blue-200', tag: 'bg-blue-500' },
  secondary: { bg: 'from-orange-100 to-orange-200', tag: 'bg-orange-500' },
  blue: { bg: 'from-blue-100 to-blue-200', tag: 'bg-blue-500' },
  green: { bg: 'from-green-100 to-green-200', tag: 'bg-green-500' },
  purple: { bg: 'from-purple-100 to-purple-200', tag: 'bg-purple-500' },
  cyan: { bg: 'from-cyan-100 to-cyan-200', tag: 'bg-cyan-500' },
}

const colorConfig = computed(() => colorMap[props.categoryColor || 'primary'] || colorMap.primary)

const imageBgClass = computed(() => `bg-gradient-to-br ${colorConfig.value.bg}`)
const tagBgClass = computed(() => colorConfig.value.tag)

const displayTitle = computed(() => props.title || t('news.title'))
const displayCategory = computed(() => {
  if (!props.category) return ''
  const categoryMap: Record<string, string> = {
    project: t('news.project'),
    regional: t('news.regional'),
    industry: t('news.industry'),
  }
  return categoryMap[props.category] || props.category
})
</script>
