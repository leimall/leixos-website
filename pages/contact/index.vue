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
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 fade-in-up">{{ t('contactPage.hero.title') }}</h1>
          <p class="text-xl text-white/90 fade-in-up" style="animation-delay: 0.2s;">{{ t('contactPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <SectionHeader
              :title="t('contactPage.info.title')"
              :subtitle="t('contactPage.info.subtitle')"
              align="left"
            />
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray mb-1">{{ t('contactPage.info.email') }}</h4>
                  <p class="text-mid-gray">contact@leixos.com</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray mb-1">{{ t('contactPage.info.phone') }}</h4>
                  <p class="text-mid-gray">+86 871-XXXXXXX</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-dark-gray mb-1">{{ t('contactPage.info.address') }}</h4>
                  <p class="text-mid-gray">{{ t('contactPage.info.addressDesc') }}</p>
                </div>
              </div>
            </div>

            <div class="bg-light-gray rounded-2xl p-8 mt-12">
              <h3 class="text-xl font-semibold text-dark-gray mb-6">{{ t('contactPage.offices.title') }}</h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6">
                  <h4 class="font-semibold text-primary mb-2">{{ t('contactPage.offices.china') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('contactPage.offices.chinaDesc') }}</p>
                </div>
                <div class="bg-white rounded-xl p-6">
                  <h4 class="font-semibold text-green-600 mb-2">{{ t('contactPage.offices.sea') }}</h4>
                  <p class="text-sm text-mid-gray">{{ t('contactPage.offices.seaDesc') }}</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8">
              <h3 class="text-xl font-semibold mb-4">{{ t('contactPage.social.title') }}</h3>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                  <span class="text-2xl">📱</span>
                </div>
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                  <span class="text-2xl">📧</span>
                </div>
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
                  <span class="text-2xl">💼</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              :title="t('contactPage.form.title')"
              :subtitle="t('contactPage.form.subtitle')"
              align="left"
            />
            <div class="bg-light-gray rounded-2xl p-8 mt-8">
              <form class="space-y-6" @submit.prevent="handleSubmit">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.name') }} *</label>
                    <input
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.company') }}</label>
                    <input
                      v-model="form.company"
                      type="text"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.email') }} *</label>
                    <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.phone') }}</label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.interest') }}</label>
                  <select
                    v-model="form.interest"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="features">{{ t('contactPage.form.interestFeatures') }}</option>
                    <option value="pricing">{{ t('contactPage.form.interestPricing') }}</option>
                    <option value="solutions">{{ t('contactPage.form.interestSolutions') }}</option>
                    <option value="enterprise">{{ t('contactPage.form.interestEnterprise') }}</option>
                    <option value="partnership">{{ t('contactPage.form.interestPartnership') }}</option>
                    <option value="other">{{ t('contactPage.form.interestOther') }}</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-dark-gray mb-2">{{ t('contactPage.form.message') }} *</label>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-[1.02]"
                >
                  {{ t('contactPage.form.submit') }}
                </button>
                <p v-if="submitted" class="text-green-600 text-center font-medium">{{ t('contactPage.form.success') }}</p>
              </form>
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
  title: '合作咨询 - LeiMall | 立即联系我们',
  description: '联系 LeiMall，获取专业的跨境电商解决方案咨询服务，我们的客户经理将在24小时内与您联系',
})

const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: 'features',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  form.value = {
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'features',
    message: '',
  }
}
</script>
