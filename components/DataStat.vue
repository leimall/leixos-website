<template>
  <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
    <div :class="['text-4xl font-bold mb-2', textColorClass]">
      {{ value }}
    </div>
    <div class="text-sm text-mid-gray">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const props = defineProps<{
  value: string
  label: string
  color?: string
}>()

const { t } = useTranslation()

const colorMap: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  blue: 'text-primary',
  orange: 'text-secondary',
}

const textColorClass = computed(() => colorMap[props.color || 'primary'] || colorMap.primary)
</script>
