<template>
  <footer class="bg-dark-gray text-gray-300 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="text-2xl font-bold text-white">{{ t('footer.company.name') }}</div>
          <p class="text-sm leading-relaxed">
            {{ t('footer.company.description') }}
          </p>
          <div class="space-y-2 text-sm">
            <div>{{ t('footer.company.hotline') }}</div>
            <div>{{ t('footer.company.email') }}</div>
            <div>{{ t('footer.company.address') }}</div>
          </div>
        </div>

        <!-- Product -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">{{ t('footer.product.title') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.product.ai') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.product.website') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.product.payment') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.product.logistics') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.product.compliance') }}</a></li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">{{ t('footer.solutions.title') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.global') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.southeastAsia') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.europe') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.factory') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.trader') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.solutions.brand') }}</a></li>
          </ul>
        </div>

        <!-- Follow Us -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">{{ t('footer.follow.title') }}</h4>
          <div class="space-y-3 text-sm mb-4">
            <div>{{ t('footer.follow.hq') }}</div>
            <div>{{ t('footer.follow.seaOffice') }}</div>
          </div>
          <div class="bg-white p-3 rounded-lg inline-block">
            <div class="w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
              {{ t('footer.follow.qrcode') }}
            </div>
          </div>
          <p class="text-sm mt-2">{{ t('footer.follow.scanHint') }}</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
</script>