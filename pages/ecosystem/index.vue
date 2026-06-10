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
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 fade-in-up">{{ t('ecosystemPage.hero.title') }}</h1>
          <p class="text-xl text-white/90 fade-in-up" style="animation-delay: 0.2s;">{{ t('ecosystemPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('ecosystemPage.program.title')"
          :subtitle="t('ecosystemPage.program.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-light-gray rounded-2xl p-8 text-center card-hover">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-white text-3xl">💼</span>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('ecosystemPage.program.agency.title') }}</h3>
            <p class="text-mid-gray text-sm leading-relaxed">{{ t('ecosystemPage.program.agency.description') }}</p>
          </div>
          <div class="bg-light-gray rounded-2xl p-8 text-center card-hover">
            <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-white text-3xl">🔧</span>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('ecosystemPage.program.developer.title') }}</h3>
            <p class="text-mid-gray text-sm leading-relaxed">{{ t('ecosystemPage.program.developer.description') }}</p>
          </div>
          <div class="bg-light-gray rounded-2xl p-8 text-center card-hover">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span class="text-white text-3xl">🎓</span>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('ecosystemPage.program.education.title') }}</h3>
            <p class="text-mid-gray text-sm leading-relaxed">{{ t('ecosystemPage.program.education.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('ecosystemPage.partners.title')"
          :subtitle="t('ecosystemPage.partners.subtitle')"
          align="center"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">连连支付</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.payment') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">Stripe</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.payment') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">PayPal</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.payment') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">Adyen</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.payment') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">云途物流</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.logistics') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">燕文物流</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.logistics') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">DHL</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.logistics') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">UPS</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.logistics') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">Google Ads</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.marketing') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">Facebook</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.marketing') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">TikTok</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.marketing') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 text-center card-hover shadow-md">
            <div class="text-xl font-bold text-primary mb-2">AWS</div>
            <p class="text-xs text-mid-gray">{{ t('ecosystemPage.partners.tech') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('ecosystemPage.process.title')"
          :subtitle="t('ecosystemPage.process.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-4 gap-8 mt-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.process.step1.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.process.step1.desc') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.process.step2.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.process.step2.desc') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.process.step3.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.process.step3.desc') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.process.step4.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.process.step4.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('ecosystemPage.benefits.title')"
          :subtitle="t('ecosystemPage.benefits.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">💰</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b1.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b1.desc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">🎯</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b2.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b2.desc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">🛠️</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b3.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b3.desc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">📚</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b4.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b4.desc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">🤝</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b5.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b5.desc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 card-hover shadow-md">
            <div class="text-3xl mb-4">🏆</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('ecosystemPage.benefits.b6.title') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('ecosystemPage.benefits.b6.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import SectionHeader from '~/components/SectionHeader.vue'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '生态伙伴 - LeiMall | 共建全球跨境电商生态',
  description: '加入 LeiMall 生态伙伴计划，共建全球跨境电商生态，实现合作共赢，共享数字贸易红利',
})
</script>
