<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center relative">
              <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#1E40AF" stroke-width="2" fill="none"/>
                <path d="M12 20 L28 20 M20 12 L20 28" stroke="#F97316" stroke-width="2"/>
                <circle cx="20" cy="20" r="4" fill="#F97316"/>
              </svg>
            </div>
            <span 
              :class="['text-xl font-semibold', scrolled ? 'text-dark-gray' : 'text-white']"
            >LeiMall</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink 
            to="#features" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.features') }}
          </NuxtLink>
          <NuxtLink 
            to="#solutions" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.solutions') }}
          </NuxtLink>
          <NuxtLink 
            to="#about" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.about') }}
          </NuxtLink>
          <NuxtLink 
            to="#news" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.news') }}
          </NuxtLink>
        </div>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <LanguageSwitcher :scrolled="scrolled" />
          <NuxtLink 
            to="#contact" 
            :class="[
              'text-sm font-medium hover:text-primary transition-colors',
              scrolled ? 'text-dark-gray' : 'text-white',
            ]"
          >
            {{ t('nav.contact') }}
          </NuxtLink>
          <NuxtLink 
            to="#contact" 
            class="bg-secondary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all hover:scale-105"
          >
            {{ t('nav.freeTrial') }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-4">
          <LanguageSwitcher :scrolled="scrolled" />
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="scrolled ? 'text-dark-gray' : 'text-white'"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-white border-t"
    >
      <div class="px-4 py-4 space-y-3">
        <NuxtLink to="/" class="block text-sm font-medium text-primary" @click="mobileMenuOpen = false">{{ t('nav.home') }}</NuxtLink>
        <NuxtLink to="#features" class="block text-sm font-medium text-mid-gray" @click="mobileMenuOpen = false">{{ t('nav.features') }}</NuxtLink>
        <NuxtLink to="#solutions" class="block text-sm font-medium text-mid-gray" @click="mobileMenuOpen = false">{{ t('nav.solutions') }}</NuxtLink>
        <NuxtLink to="#about" class="block text-sm font-medium text-mid-gray" @click="mobileMenuOpen = false">{{ t('nav.about') }}</NuxtLink>
        <NuxtLink to="#news" class="block text-sm font-medium text-mid-gray" @click="mobileMenuOpen = false">{{ t('nav.news') }}</NuxtLink>
        <NuxtLink to="#contact" class="block text-sm font-medium text-mid-gray" @click="mobileMenuOpen = false">{{ t('nav.contact') }}</NuxtLink>
        <NuxtLink to="#contact" class="block bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium text-center" @click="mobileMenuOpen = false">{{ t('nav.freeTrial') }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>