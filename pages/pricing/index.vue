<template>
  <div>
    <section class="gradient-bg text-white pt-16 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1200 400">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.3" class="float-animation"/>
          <circle cx="900" cy="200" r="60" fill="white" opacity="0.2" class="float-animation" style="animation-delay: 1s;"/>
        </svg>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center py-12">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 fade-in-up">{{ t('pricingPage.hero.title') }}</h1>
          <p class="text-xl text-white/90 fade-in-up" style="animation-delay: 0.2s;">{{ t('pricingPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 card-hover">
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold text-dark-gray mb-2">{{ t('pricingPage.plans.basic.title') }}</h3>
              <p class="text-sm text-mid-gray mb-4">{{ t('pricingPage.plans.basic.subtitle') }}</p>
              <div class="text-4xl font-bold text-primary mb-2">¥0<span class="text-lg font-normal text-mid-gray">/{{ t('pricingPage.month') }}</span></div>
              <p class="text-sm text-mid-gray">{{ t('pricingPage.plans.basic.priceNote') }}</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start space-x-3">
                <span class="text-primary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.basic.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-primary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.basic.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-primary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.basic.feature3') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-primary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.basic.feature4') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-primary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.basic.feature5') }}</span>
              </li>
            </ul>
            <button class="w-full border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
              {{ t('pricingPage.plans.basic.cta') }}
            </button>
          </div>

          <div class="bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl shadow-2xl p-8 transform md:scale-105 relative">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary px-4 py-1 rounded-full text-sm font-semibold">
              {{ t('pricingPage.plans.professional.popular') }}
            </div>
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold mb-2">{{ t('pricingPage.plans.professional.title') }}</h3>
              <p class="text-sm text-white/80 mb-4">{{ t('pricingPage.plans.professional.subtitle') }}</p>
              <div class="text-4xl font-bold mb-2">¥2,999<span class="text-lg font-normal text-white/80">/{{ t('pricingPage.month') }}</span></div>
              <p class="text-sm text-white/80">{{ t('pricingPage.plans.professional.priceNote') }}</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature3') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature4') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature5') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature6') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="font-bold">✓</span>
                <span class="text-white/90">{{ t('pricingPage.plans.professional.feature7') }}</span>
              </li>
            </ul>
            <button class="w-full bg-white text-primary py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
              {{ t('pricingPage.plans.professional.cta') }}
            </button>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 card-hover">
            <div class="text-center mb-8">
              <h3 class="text-xl font-semibold text-dark-gray mb-2">{{ t('pricingPage.plans.enterprise.title') }}</h3>
              <p class="text-sm text-mid-gray mb-4">{{ t('pricingPage.plans.enterprise.subtitle') }}</p>
              <div class="text-4xl font-bold text-secondary mb-2">{{ t('pricingPage.plans.enterprise.custom') }}</div>
              <p class="text-sm text-mid-gray">{{ t('pricingPage.plans.enterprise.priceNote') }}</p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature1') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature2') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature3') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature4') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature5') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature6') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature7') }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-secondary font-bold">✓</span>
                <span class="text-mid-gray">{{ t('pricingPage.plans.enterprise.feature8') }}</span>
              </li>
            </ul>
            <NuxtLink to="/enterprise" class="block w-full text-center border-2 border-secondary text-secondary py-3 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all">
              {{ t('pricingPage.plans.enterprise.cta') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('pricingPage.comparison.title')"
          :subtitle="t('pricingPage.comparison.subtitle')"
          align="center"
        />
        <div class="mt-12 bg-white rounded-2xl shadow-lg overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-dark-gray text-white">
                <th class="text-left py-4 px-6 font-semibold">{{ t('pricingPage.comparison.feature') }}</th>
                <th class="text-center py-4 px-6 font-semibold">{{ t('pricingPage.plans.basic.title') }}</th>
                <th class="text-center py-4 px-6 font-semibold bg-primary">{{ t('pricingPage.plans.professional.title') }}</th>
                <th class="text-center py-4 px-6 font-semibold">{{ t('pricingPage.plans.enterprise.title') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.stores') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.storesBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.storesPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.unlimited') }}</td>
              </tr>
              <tr class="border-b border-gray-100 bg-gray-50">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.products') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.productsBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.unlimited') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.unlimited') }}</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.payment') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.paymentBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.paymentPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.custom') }}</td>
              </tr>
              <tr class="border-b border-gray-100 bg-gray-50">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.logistics') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.logisticsBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.logisticsPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.custom') }}</td>
              </tr>
              <tr class="border-b border-gray-100">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.ai') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.aiBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.aiPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.custom') }}</td>
              </tr>
              <tr class="border-b border-gray-100 bg-gray-50">
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.support') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.supportBasic') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.supportPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.supportEnterprise') }}</td>
              </tr>
              <tr>
                <td class="py-4 px-6 text-mid-gray">{{ t('pricingPage.comparison.customization') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.no') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray bg-blue-50">{{ t('pricingPage.comparison.customizationPro') }}</td>
                <td class="text-center py-4 px-6 text-dark-gray">{{ t('pricingPage.comparison.custom') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('pricingPage.faq.title')"
          :subtitle="t('pricingPage.faq.subtitle')"
          align="center"
        />
        <div class="space-y-4 mt-12">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-light-gray rounded-xl overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full text-left p-6 flex justify-between items-center font-semibold text-dark-gray hover:bg-gray-100 transition-all"
            >
              <span>{{ faq.question }}</span>
              <span class="text-primary text-2xl transition-transform" :class="{ 'rotate-45': openFaq === index }">+</span>
            </button>
            <div v-show="openFaq === index" class="px-6 pb-6 text-mid-gray">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import SectionHeader from '~/components/SectionHeader.vue'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '定价方案 - LeiMall | 灵活透明的价格体系',
  description: 'LeiMall 提供基础版、专业版、企业版三种灵活的定价方案，满足不同规模企业的出海需求',
})

const openFaq = ref<number | null>(0)

const faqs = ref([
  { question: t('pricingPage.faq.q1'), answer: t('pricingPage.faq.a1') },
  { question: t('pricingPage.faq.q2'), answer: t('pricingPage.faq.a2') },
  { question: t('pricingPage.faq.q3'), answer: t('pricingPage.faq.a3') },
  { question: t('pricingPage.faq.q4'), answer: t('pricingPage.faq.a4') },
  { question: t('pricingPage.faq.q5'), answer: t('pricingPage.faq.a5') },
])

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>
