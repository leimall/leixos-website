<template>
  <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold mb-5">
        {{ displayTitle }}
      </h2>
      <p class="text-xl text-white/90 mb-10 leading-relaxed">
        {{ displayDescription }}
      </p>
      <NuxtLink v-if="ctaTo" :to="ctaTo" class="inline-block bg-white text-primary px-14 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
        {{ displayCtaText }}
      </NuxtLink>
      <span v-else class="inline-block bg-white text-primary px-14 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
        {{ displayCtaText }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const props = defineProps<{
  title?: string
  description?: string
  ctaText?: string
  ctaTo?: string
}>()

const { t } = useTranslation()

const displayTitle = computed(() => props.title || t('cta.title'))
const displayDescription = computed(() => props.description || t('cta.description'))
const displayCtaText = computed(() => props.ctaText || t('cta.cta'))
</script>
