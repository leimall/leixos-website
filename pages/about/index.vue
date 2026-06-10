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
              {{ t('aboutPage.hero.title') }}
            </h1>
            <p class="text-xl text-white/90 leading-relaxed fade-in-up" style="animation-delay: 0.2s;">
              {{ t('aboutPage.hero.subtitle') }}
            </p>
            <div class="grid grid-cols-3 gap-6 fade-in-up" style="animation-delay: 0.4s;">
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">5000+</div>
                <div class="text-white/70 text-sm">{{ t('aboutPage.hero.merchants') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">200+</div>
                <div class="text-white/70 text-sm">{{ t('aboutPage.hero.countries') }}</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">10亿+</div>
                <div class="text-white/70 text-sm">{{ t('aboutPage.hero.exports') }}</div>
              </div>
            </div>
          </div>
          <div class="relative flex justify-center items-center fade-in-up" style="animation-delay: 0.6s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-6">
                  <h3 class="text-lg font-semibold mb-2">{{ t('aboutPage.hero.mission') }}</h3>
                  <p class="text-white/80 text-sm">{{ t('aboutPage.hero.missionDesc') }}</p>
                </div>
                <div class="bg-white/10 rounded-xl p-6">
                  <h3 class="text-lg font-semibold mb-2">{{ t('aboutPage.hero.vision') }}</h3>
                  <p class="text-white/80 text-sm">{{ t('aboutPage.hero.visionDesc') }}</p>
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
          :title="t('aboutPage.timeline.title')"
          :subtitle="t('aboutPage.timeline.subtitle')"
          align="center"
        />
        <div class="mt-12 relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
          <div class="space-y-12">
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="md:text-right md:pr-12 relative">
                <div class="absolute top-1/2 right-0 transform translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                <div class="bg-light-gray rounded-xl p-6 inline-block">
                  <div class="text-2xl font-bold text-primary mb-2">2023</div>
                  <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.timeline.founded') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('aboutPage.timeline.foundedDesc') }}</p>
                </div>
              </div>
              <div class="hidden md:block"></div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="hidden md:block"></div>
              <div class="md:pl-12 relative">
                <div class="absolute top-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full hidden md:block"></div>
                <div class="bg-light-gray rounded-xl p-6 inline-block">
                  <div class="text-2xl font-bold text-secondary mb-2">2024</div>
                  <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.timeline.launch') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('aboutPage.timeline.launchDesc') }}</p>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="md:text-right md:pr-12 relative">
                <div class="absolute top-1/2 right-0 transform translate-x-1/2 w-4 h-4 bg-green-500 rounded-full hidden md:block"></div>
                <div class="bg-light-gray rounded-xl p-6 inline-block">
                  <div class="text-2xl font-bold text-green-600 mb-2">2025</div>
                  <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.timeline.expansion') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('aboutPage.timeline.expansionDesc') }}</p>
                </div>
              </div>
              <div class="hidden md:block"></div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="hidden md:block"></div>
              <div class="md:pl-12 relative">
                <div class="absolute top-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full hidden md:block"></div>
                <div class="bg-light-gray rounded-xl p-6 inline-block">
                  <div class="text-2xl font-bold text-purple-600 mb-2">2026</div>
                  <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.timeline.ai') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('aboutPage.timeline.aiDesc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('aboutPage.team.title')"
          :subtitle="t('aboutPage.team.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white rounded-xl p-8 text-center shadow-md card-hover">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-dark-gray mb-1">{{ t('aboutPage.team.ceo') }}</h4>
            <p class="text-primary text-sm mb-3">{{ t('aboutPage.team.ceoTitle') }}</p>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.team.ceoDesc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-md card-hover">
            <div class="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-dark-gray mb-1">{{ t('aboutPage.team.cto') }}</h4>
            <p class="text-secondary text-sm mb-3">{{ t('aboutPage.team.ctoTitle') }}</p>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.team.ctoDesc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center shadow-md card-hover">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-dark-gray mb-1">{{ t('aboutPage.team.coo') }}</h4>
            <p class="text-purple-600 text-sm mb-3">{{ t('aboutPage.team.cooTitle') }}</p>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.team.cooDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('aboutPage.partners.title')"
          :subtitle="t('aboutPage.partners.subtitle')"
          align="center"
        />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">连连支付</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.payment') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">Stripe</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.payment') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">PayPal</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.payment') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">云途</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.logistics') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">燕文</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.logistics') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">DHL</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.logistics') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">UPS</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.logistics') }}</p>
          </div>
          <div class="bg-light-gray rounded-xl p-6 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">Google</div>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.partners.tech') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('aboutPage.tech.title')"
          :subtitle="t('aboutPage.tech.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="ai"
            color="primary"
            :title="t('aboutPage.tech.ai.title')"
            :description="t('aboutPage.tech.ai.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('aboutPage.tech.bigdata.title')"
            :description="t('aboutPage.tech.bigdata.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="purple"
            :title="t('aboutPage.tech.security.title')"
            :description="t('aboutPage.tech.security.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('aboutPage.culture.title')"
          :subtitle="t('aboutPage.culture.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-4 gap-6 mt-12">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <div class="text-4xl mb-4">🎯</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.culture.value1') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.culture.value1Desc') }}</p>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <div class="text-4xl mb-4">🚀</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.culture.value2') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.culture.value2Desc') }}</p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <div class="text-4xl mb-4">🤝</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.culture.value3') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.culture.value3Desc') }}</p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <div class="text-4xl mb-4">💡</div>
            <h4 class="font-semibold text-dark-gray mb-2">{{ t('aboutPage.culture.value4') }}</h4>
            <p class="text-sm text-mid-gray">{{ t('aboutPage.culture.value4Desc') }}</p>
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
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '关于我们 - LeiMall | AI跨境电商平台',
  description: 'LeiMall 是领先的AI驱动跨境电商SaaS平台，致力于为全球中小企业提供低成本、高效率的出海解决方案',
})
</script>
