<template>
  <div>
    <section class="gradient-bg text-white pt-16 min-h-screen relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1200 800">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.3" class="float-animation"/>
          <circle cx="900" cy="200" r="60" fill="white" opacity="0.2" class="float-animation" style="animation-delay: 1s;"/>
          <circle cx="1100" cy="600" r="100" fill="white" opacity="0.25" class="float-animation" style="animation-delay: 2s;"/>
          <circle cx="200" cy="600" r="50" fill="white" opacity="0.2" class="float-animation" style="animation-delay: 0.5s;"/>
        </svg>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)] py-20">
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight fade-in-up">
              {{ t('solutionsPage.hero.title') }}
            </h1>
            <p class="text-xl text-white/90 leading-relaxed fade-in-up" style="animation-delay: 0.2s;">
              {{ t('solutionsPage.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 fade-in-up" style="animation-delay: 0.4s;">
              <NuxtLink to="/contact" class="bg-secondary text-white px-9 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all hover:scale-105 text-center">
                {{ t('solutionsPage.hero.cta') }}
              </NuxtLink>
            </div>
          </div>
          <div class="relative flex justify-center items-center fade-in-up" style="animation-delay: 0.6s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div class="space-y-4">
                <div class="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
                  <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <span class="text-white text-2xl">🌍</span>
                  </div>
                  <div>
                    <div class="text-white font-semibold">{{ t('solutionsPage.hero.global') }}</div>
                    <div class="text-white/70 text-sm">200+ {{ t('solutionsPage.hero.countries') }}</div>
                  </div>
                </div>
                <div class="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
                  <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span class="text-white text-2xl">⭐</span>
                  </div>
                  <div>
                    <div class="text-white font-semibold">{{ t('solutionsPage.hero.sea') }}</div>
                    <div class="text-white/70 text-sm">{{ t('solutionsPage.hero.hot') }}</div>
                  </div>
                </div>
                <div class="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
                  <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <span class="text-white text-2xl">🏭</span>
                  </div>
                  <div>
                    <div class="text-white font-semibold">{{ t('solutionsPage.hero.factory') }}</div>
                    <div class="text-white/70 text-sm">{{ t('solutionsPage.hero.b2c') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('solutionsPage.globalSection.title')"
          :subtitle="t('solutionsPage.globalSection.subtitle')"
          align="center"
        />
        <div class="mt-12 bg-light-gray rounded-xl p-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-gray mb-2">{{ t('solutionsPage.globalSection.scenario') }}</h3>
              <p class="text-sm text-mid-gray">{{ t('solutionsPage.globalSection.scenarioDesc') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-gray mb-2">{{ t('solutionsPage.globalSection.advantage') }}</h3>
              <p class="text-sm text-mid-gray">{{ t('solutionsPage.globalSection.advantageDesc') }}</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-dark-gray mb-2">{{ t('solutionsPage.globalSection.features') }}</h3>
              <p class="text-sm text-mid-gray">{{ t('solutionsPage.globalSection.featuresDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 text-white">
          <div class="flex items-center mb-6">
            <span class="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold">{{ t('solutionsPage.seaSection.hot') }}</span>
          </div>
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">{{ t('solutionsPage.seaSection.title') }}</h2>
          <p class="text-xl text-white/90 mb-8">{{ t('solutionsPage.seaSection.subtitle') }}</p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 class="font-semibold text-lg mb-3">{{ t('solutionsPage.seaSection.scenario') }}</h4>
              <p class="text-white/80">{{ t('solutionsPage.seaSection.scenarioDesc') }}</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 class="font-semibold text-lg mb-3">{{ t('solutionsPage.seaSection.advantage') }}</h4>
              <p class="text-white/80">{{ t('solutionsPage.seaSection.advantageDesc') }}</p>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 class="font-semibold text-lg mb-3">{{ t('solutionsPage.seaSection.features') }}</h4>
              <p class="text-white/80">{{ t('solutionsPage.seaSection.featuresDesc') }}</p>
            </div>
          </div>
          <div class="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 class="font-semibold text-lg mb-4">{{ t('solutionsPage.seaSection.tableTitle') }}</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead>
                  <tr class="border-b border-white/20">
                    <th class="py-3 px-4">{{ t('solutionsPage.seaSection.country') }}</th>
                    <th class="py-3 px-4">{{ t('solutionsPage.seaSection.delivery') }}</th>
                    <th class="py-3 px-4">{{ t('solutionsPage.seaSection.payment') }}</th>
                    <th class="py-3 px-4">{{ t('solutionsPage.seaSection.language') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-white/10">
                    <td class="py-3 px-4">{{ t('solutionsPage.seaSection.thailand') }}</td>
                    <td class="py-3 px-4">3-5 {{ t('solutionsPage.seaSection.days') }}</td>
                    <td class="py-3 px-4">GrabPay, Line Pay</td>
                    <td class="py-3 px-4">ไทย</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-3 px-4">{{ t('solutionsPage.seaSection.vietnam') }}</td>
                    <td class="py-3 px-4">3-5 {{ t('solutionsPage.seaSection.days') }}</td>
                    <td class="py-3 px-4">Momo, ZaloPay</td>
                    <td class="py-3 px-4">Tiếng Việt</td>
                  </tr>
                  <tr class="border-b border-white/10">
                    <td class="py-3 px-4">{{ t('solutionsPage.seaSection.indonesia') }}</td>
                    <td class="py-3 px-4">5-7 {{ t('solutionsPage.seaSection.days') }}</td>
                    <td class="py-3 px-4">GoPay, OVO</td>
                    <td class="py-3 px-4">Bahasa</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">{{ t('solutionsPage.seaSection.philippines') }}</td>
                    <td class="py-3 px-4">5-7 {{ t('solutionsPage.seaSection.days') }}</td>
                    <td class="py-3 px-4">GCash</td>
                    <td class="py-3 px-4">English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('solutionsPage.euSection.title')"
          :subtitle="t('solutionsPage.euSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <SolutionCard
            icon-name="globe"
            color="primary"
            :title="t('solutionsPage.euSection.scenario')"
            :description="t('solutionsPage.euSection.scenarioDesc')"
            :tag="t('solutionsPage.euSection.scenarioTag')"
          />
          <SolutionCard
            icon-name="data"
            color="secondary"
            :title="t('solutionsPage.euSection.advantage')"
            :description="t('solutionsPage.euSection.advantageDesc')"
            :tag="t('solutionsPage.euSection.advantageTag')"
          />
          <SolutionCard
            icon-name="secure"
            color="purple"
            :title="t('solutionsPage.euSection.features')"
            :description="t('solutionsPage.euSection.featuresDesc')"
            :tag="t('solutionsPage.euSection.featuresTag')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('solutionsPage.factorySection.title')"
          :subtitle="t('solutionsPage.factorySection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <FeatureCard
            icon-name="factory"
            color="primary"
            :title="t('solutionsPage.factorySection.d2c.title')"
            :description="t('solutionsPage.factorySection.d2c.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('solutionsPage.factorySection.insights.title')"
            :description="t('solutionsPage.factorySection.insights.description')"
          />
        </div>
        <div class="mt-8 grid md:grid-cols-4 gap-6">
          <DataStat value="30%" :label="t('solutionsPage.factorySection.profit')" color="primary" />
          <DataStat value="50%" :label="t('solutionsPage.factorySection.efficiency')" color="secondary" />
          <DataStat value="10x" :label="t('solutionsPage.factorySection.expansion')" color="primary" />
          <DataStat value="24/7" :label="t('solutionsPage.factorySection.support')" color="secondary" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('solutionsPage.traderSection.title')"
          :subtitle="t('solutionsPage.traderSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="data"
            color="primary"
            :title="t('solutionsPage.traderSection.management.title')"
            :description="t('solutionsPage.traderSection.management.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="sky"
            :title="t('solutionsPage.traderSection.automation.title')"
            :description="t('solutionsPage.traderSection.automation.description')"
          />
          <FeatureCard
            icon-name="data"
            color="purple"
            :title="t('solutionsPage.traderSection.analytics.title')"
            :description="t('solutionsPage.traderSection.analytics.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('solutionsPage.brandSection.title')"
          :subtitle="t('solutionsPage.brandSection.subtitle')"
          align="center"
        />
        <div class="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-gray mb-1">{{ t('solutionsPage.brandSection.customDomain') }}</h4>
                <p class="text-sm text-mid-gray">{{ t('solutionsPage.brandSection.customDomainDesc') }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-gray mb-1">{{ t('solutionsPage.brandSection.membership') }}</h4>
                <p class="text-sm text-mid-gray">{{ t('solutionsPage.brandSection.membershipDesc') }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-gray mb-1">{{ t('solutionsPage.brandSection.marketing') }}</h4>
                <p class="text-sm text-mid-gray">{{ t('solutionsPage.brandSection.marketingDesc') }}</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-dark-gray mb-1">{{ t('solutionsPage.brandSection.analytics') }}</h4>
                <p class="text-sm text-mid-gray">{{ t('solutionsPage.brandSection.analyticsDesc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <h4 class="text-xl font-semibold text-dark-gray mb-6">{{ t('solutionsPage.brandSection.comparison') }}</h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                <span class="text-mid-gray">{{ t('solutionsPage.brandSection.independent') }}</span>
                <span class="text-primary font-semibold">✓</span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                <span class="text-mid-gray">{{ t('solutionsPage.brandSection.dataOwnership') }}</span>
                <span class="text-primary font-semibold">✓</span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                <span class="text-mid-gray">{{ t('solutionsPage.brandSection.brandCustomization') }}</span>
                <span class="text-primary font-semibold">✓</span>
              </div>
              <div class="flex justify-between items-center pb-4 border-b border-gray-100">
                <span class="text-mid-gray">{{ t('solutionsPage.brandSection.longTerm') }}</span>
                <span class="text-primary font-semibold">✓</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-mid-gray">{{ t('solutionsPage.brandSection.highMargin') }}</span>
                <span class="text-primary font-semibold">✓</span>
              </div>
            </div>
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
import FeatureCard from '~/components/FeatureCard.vue'
import SolutionCard from '~/components/SolutionCard.vue'
import DataStat from '~/components/DataStat.vue'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '解决方案 - LeiMall | 不同规模企业的全球出海方案',
  description: 'LeiMall提供全球通用、东南亚专属、欧美市场、工厂出海、贸易商转型、品牌DTC等六大解决方案',
})
</script>
