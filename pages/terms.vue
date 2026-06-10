<template>
  <div>
    <section class="gradient-bg text-white pt-16 pb-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1200 400">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.3" class="float-animation"/>
        </svg>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="py-12 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ t('termsPage.title') }}</h1>
          <p class="text-lg text-white/90">{{ t('termsPage.updated') }}: 2026-06-01</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.acceptance.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.acceptance.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.services.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('termsPage.services.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('termsPage.services.item1') }}</li>
              <li>{{ t('termsPage.services.item2') }}</li>
              <li>{{ t('termsPage.services.item3') }}</li>
              <li>{{ t('termsPage.services.item4') }}</li>
              <li>{{ t('termsPage.services.item5') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.account.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.account.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.payment.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('termsPage.payment.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('termsPage.payment.item1') }}</li>
              <li>{{ t('termsPage.payment.item2') }}</li>
              <li>{{ t('termsPage.payment.item3') }}</li>
              <li>{{ t('termsPage.payment.item4') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.conduct.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('termsPage.conduct.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('termsPage.conduct.item1') }}</li>
              <li>{{ t('termsPage.conduct.item2') }}</li>
              <li>{{ t('termsPage.conduct.item3') }}</li>
              <li>{{ t('termsPage.conduct.item4') }}</li>
              <li>{{ t('termsPage.conduct.item5') }}</li>
              <li>{{ t('termsPage.conduct.item6') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.ip.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.ip.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.disclaimer.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.disclaimer.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.liability.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.liability.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.termination.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.termination.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.governing.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.governing.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.changes.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.changes.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('termsPage.contact.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('termsPage.contact.content') }}</p>
            <p class="text-primary font-semibold mt-4">legal@leixos.com</p>
          </div>
        </article>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '服务条款 - LeiMall',
  description: 'LeiMall 服务条款 - 使用我们的跨境电商SaaS服务前请仔细阅读以下条款',
})
</script>
