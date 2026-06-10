<template>
  <NuxtLink v-if="to" :to="to" :class="cardClass">
    <div :class="iconBgClass" class="relative">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="iconName === 'global'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path v-else-if="iconName === 'location'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path v-else-if="iconName === 'globe'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        <path v-else-if="iconName === 'factory'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        <path v-else-if="iconName === 'data'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
        <path v-else-if="iconName === 'brand'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
      <span v-if="tag" :class="tagClass" class="absolute -top-2 -right-2 text-white text-xs px-2 py-0.5 rounded">{{ tag }}</span>
    </div>
    <h3 class="text-xl font-semibold mb-3 text-dark-gray">
      {{ displayTitle }}
    </h3>
    <p class="text-sm text-mid-gray leading-relaxed mb-4">
      {{ displayDescription }}
    </p>
    <span :class="linkTextClass" class="text-sm font-medium transition-colors">
      {{ t('solutions.global.learnMore') }} →
    </span>
  </NuxtLink>
  <div v-else :class="cardClass">
    <div :class="iconBgClass" class="relative">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="iconName === 'global'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path v-else-if="iconName === 'location'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path v-else-if="iconName === 'globe'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        <path v-else-if="iconName === 'factory'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        <path v-else-if="iconName === 'data'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
        <path v-else-if="iconName === 'brand'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
      <span v-if="tag" :class="tagClass" class="absolute -top-2 -right-2 text-white text-xs px-2 py-0.5 rounded">{{ tag }}</span>
    </div>
    <h3 class="text-xl font-semibold mb-3 text-dark-gray">
      {{ displayTitle }}
    </h3>
    <p class="text-sm text-mid-gray leading-relaxed mb-4">
      {{ displayDescription }}
    </p>
    <span :class="linkTextClass" class="text-sm font-medium transition-colors">
      {{ t('solutions.global.learnMore') }} →
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const props = defineProps<{
  iconName?: string
  title?: string
  description?: string
  tag?: string
  color?: string
  to?: string
}>()

const { t } = useTranslation()

const colorMap: Record<string, { bg: string; tag: string; text: string }> = {
  primary: { bg: 'from-blue-500 to-blue-600', tag: 'bg-blue-500', text: 'text-primary hover:text-blue-800' },
  secondary: { bg: 'from-orange-500 to-orange-600', tag: 'bg-orange-500', text: 'text-secondary hover:text-orange-700' },
  sky: { bg: 'from-sky-500 to-sky-600', tag: 'bg-sky-500', text: 'text-primary hover:text-blue-800' },
  green: { bg: 'from-green-500 to-green-600', tag: 'bg-green-500', text: 'text-green-600 hover:text-green-700' },
  purple: { bg: 'from-purple-500 to-purple-600', tag: 'bg-purple-500', text: 'text-primary hover:text-blue-800' },
  cyan: { bg: 'from-cyan-500 to-cyan-600', tag: 'bg-cyan-500', text: 'text-primary hover:text-blue-800' },
  pink: { bg: 'from-pink-500 to-pink-600', tag: 'bg-pink-500', text: 'text-primary hover:text-blue-800' },
}

const colorConfig = computed(() => colorMap[props.color || 'primary'] || colorMap.primary)

const iconBgClass = computed(() => `w-12 h-12 bg-gradient-to-br ${colorConfig.value.bg} rounded-xl flex items-center justify-center mb-5`)
const tagClass = computed(() => colorConfig.value.tag)
const linkTextClass = computed(() => colorConfig.value.text)

const cardClass = computed(() => {
  const base = 'rounded-xl p-8 shadow-md card-hover cursor-pointer'
  if (props.color === 'green') {
    return `${base} bg-green-50 border-2 border-green-500`
  }
  return `${base} bg-white border border-gray-200`
})

const displayTitle = computed(() => props.title || t('solutions.title'))
const displayDescription = computed(() => props.description || t('solutions.global.description'))
</script>
