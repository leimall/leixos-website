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
          <h1 class="text-4xl lg:text-5xl font-bold mb-4">{{ t('privacyPage.title') }}</h1>
          <p class="text-lg text-white/90">{{ t('privacyPage.updated') }}: 2026-06-01</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.intro.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.intro.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.collection.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('privacyPage.collection.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('privacyPage.collection.item1') }}</li>
              <li>{{ t('privacyPage.collection.item2') }}</li>
              <li>{{ t('privacyPage.collection.item3') }}</li>
              <li>{{ t('privacyPage.collection.item4') }}</li>
              <li>{{ t('privacyPage.collection.item5') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.usage.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('privacyPage.usage.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('privacyPage.usage.item1') }}</li>
              <li>{{ t('privacyPage.usage.item2') }}</li>
              <li>{{ t('privacyPage.usage.item3') }}</li>
              <li>{{ t('privacyPage.usage.item4') }}</li>
              <li>{{ t('privacyPage.usage.item5') }}</li>
              <li>{{ t('privacyPage.usage.item6') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.sharing.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.sharing.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.security.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.security.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.rights.title') }}</h2>
            <p class="text-mid-gray leading-relaxed mb-4">{{ t('privacyPage.rights.content') }}</p>
            <ul class="space-y-2 text-mid-gray pl-6 list-disc">
              <li>{{ t('privacyPage.rights.item1') }}</li>
              <li>{{ t('privacyPage.rights.item2') }}</li>
              <li>{{ t('privacyPage.rights.item3') }}</li>
              <li>{{ t('privacyPage.rights.item4') }}</li>
              <li>{{ t('privacyPage.rights.item5') }}</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.cookies.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.cookies.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.changes.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.changes.content') }}</p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-gray mb-4">{{ t('privacyPage.contact.title') }}</h2>
            <p class="text-mid-gray leading-relaxed">{{ t('privacyPage.contact.content') }}</p>
            <p class="text-primary font-semibold mt-4">privacy@leixos.com</p>
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
  title: '隐私政策 - LeiMall',
  description: 'LeiMall 隐私政策 - 了解我们如何收集、使用和保护您的个人信息',
})
</script>
