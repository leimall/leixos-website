<template>
  <div>
    <section class="gradient-bg text-white pt-16 min-h-screen relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1200 800">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.3" class="float-animation"/>
          <circle cx="900" cy="200" r="60" fill="white" opacity="0.2" class="float-animation" style="animation-delay: 1s;"/>
          <circle cx="1100" cy="600" r="100" fill="white" opacity="0.25" class="float-animation" style="animation-delay: 2s;"/>
        </svg>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)] py-20">
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight fade-in-up">
              {{ t('enterprisePage.hero.title') }}
            </h1>
            <p class="text-xl text-white/90 leading-relaxed fade-in-up" style="animation-delay: 0.2s;">
              {{ t('enterprisePage.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 fade-in-up" style="animation-delay: 0.4s;">
              <NuxtLink to="/contact" class="bg-secondary text-white px-9 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all hover:scale-105 text-center">
                {{ t('enterprisePage.hero.cta') }}
              </NuxtLink>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 fade-in-up" style="animation-delay: 0.6s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div class="text-3xl font-bold text-white mb-2">500+</div>
              <div class="text-sm text-white/80">{{ t('enterprisePage.hero.clients') }}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div class="text-3xl font-bold text-white mb-2">200+</div>
              <div class="text-sm text-white/80">{{ t('enterprisePage.hero.countries') }}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div class="text-3xl font-bold text-white mb-2">99.9%</div>
              <div class="text-sm text-white/80">{{ t('enterprisePage.hero.uptime') }}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div class="text-3xl font-bold text-white mb-2">24/7</div>
              <div class="text-sm text-white/80">{{ t('enterprisePage.hero.support') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('enterprisePage.services.title')"
          :subtitle="t('enterprisePage.services.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="ai"
            color="primary"
            :title="t('enterprisePage.services.custom.title')"
            :description="t('enterprisePage.services.custom.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('enterprisePage.services.integration.title')"
            :description="t('enterprisePage.services.integration.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="purple"
            :title="t('enterprisePage.services.security.title')"
            :description="t('enterprisePage.services.security.description')"
          />
          <FeatureCard
            icon-name="global"
            color="green"
            :title="t('enterprisePage.services.global.title')"
            :description="t('enterprisePage.services.global.description')"
          />
          <FeatureCard
            icon-name="data"
            color="cyan"
            :title="t('enterprisePage.services.analytics.title')"
            :description="t('enterprisePage.services.analytics.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="pink"
            :title="t('enterprisePage.services.dedicated.title')"
            :description="t('enterprisePage.services.dedicated.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('enterprisePage.cases.title')"
          :subtitle="t('enterprisePage.cases.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-white text-2xl">🏭</span>
            </div>
            <h4 class="text-lg font-semibold text-dark-gray mb-2">{{ t('enterprisePage.cases.case1.title') }}</h4>
            <p class="text-sm text-mid-gray mb-4">{{ t('enterprisePage.cases.case1.industry') }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.revenue') }}</span>
                <span class="font-semibold text-primary">+150%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.countries') }}</span>
                <span class="font-semibold text-primary">50+</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-white text-2xl">🛒</span>
            </div>
            <h4 class="text-lg font-semibold text-dark-gray mb-2">{{ t('enterprisePage.cases.case2.title') }}</h4>
            <p class="text-sm text-mid-gray mb-4">{{ t('enterprisePage.cases.case2.industry') }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.efficiency') }}</span>
                <span class="font-semibold text-green-600">+80%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.cost') }}</span>
                <span class="font-semibold text-green-600">-40%</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <span class="text-white text-2xl">✨</span>
            </div>
            <h4 class="text-lg font-semibold text-dark-gray mb-2">{{ t('enterprisePage.cases.case3.title') }}</h4>
            <p class="text-sm text-mid-gray mb-4">{{ t('enterprisePage.cases.case3.industry') }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.conversion') }}</span>
                <span class="font-semibold text-purple-600">+200%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-mid-gray">{{ t('enterprisePage.cases.satisfaction') }}</span>
                <span class="font-semibold text-purple-600">96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">{{ t('enterprisePage.cta.title') }}</h2>
        <p class="text-xl text-white/90 mb-10 leading-relaxed">
          {{ t('enterprisePage.cta.subtitle') }}
        </p>
        <NuxtLink
          to="/contact"
          class="inline-block bg-white text-primary px-14 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
        >
          {{ t('enterprisePage.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import SectionHeader from '~/components/SectionHeader.vue'
import FeatureCard from '~/components/FeatureCard.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '企业服务 - LeiMall | 定制化跨境电商解决方案',
  description: 'LeiMall 为大型企业提供定制化的跨境电商解决方案，包括定制开发、系统集成、专属服务等',
})
</script>
