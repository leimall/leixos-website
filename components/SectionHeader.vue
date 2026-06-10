<template>
  <div :class="alignClass">
    <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray mb-4">
      {{ displayTitle }}
    </h2>
    <div v-if="subtitle" :class="[align === 'center' ? 'mx-auto' : '', 'w-16 h-1 bg-primary mb-8']"></div>
    <p v-if="displaySubtitle" class="text-base text-mid-gray">
      {{ displaySubtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const props = defineProps<{
  title?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}>()

const { t } = useTranslation()

const alignClass = computed(() => {
  const alignment = props.align || 'center'
  if (alignment === 'center') return 'text-center mb-16'
  if (alignment === 'right') return 'text-right mb-16'
  return 'text-left mb-16'
})

const displayTitle = computed(() => props.title || t('features.title'))
const displaySubtitle = computed(() => props.subtitle || '')
</script>
