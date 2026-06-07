<template>
  <div>
    <!-- Hero Banner -->
    <section class="gradient-bg text-white pt-16 min-h-screen relative overflow-hidden">
      <!-- Background decorations -->
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
          <!-- Left Content -->
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight fade-in-up">
              {{ t('hero.title') }}
            </h1>
            <p class="text-xl text-white/90 leading-relaxed fade-in-up" style="animation-delay: 0.2s;">
              {{ t('hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 fade-in-up" style="animation-delay: 0.4s;">
              <NuxtLink to="#contact" class="bg-secondary text-white px-9 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all hover:scale-105 text-center">
                {{ t('hero.cta') }}
              </NuxtLink>
              <button class="border-2 border-white text-white px-9 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-primary transition-all text-center">
                {{ t('hero.watchDemo') }}
              </button>
            </div>
          </div>

          <!-- Right Device Mockup -->
          <div class="relative flex justify-center items-center fade-in-up" style="animation-delay: 0.6s;">
            <div class="relative">
              <!-- MacBook -->
              <div class="bg-gray-800 rounded-t-lg p-2 shadow-2xl transform -rotate-3">
                <div class="bg-white rounded text-dark-gray p-4 w-80">
                  <div class="flex space-x-2 mb-4">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-100 rounded w-3/4"></div>
                    <div class="h-4 bg-blue-100 rounded w-1/2"></div>
                    <div class="h-20 bg-blue-50 rounded"></div>
                  </div>
                </div>
              </div>
              <!-- iPhone -->
              <div class="absolute -right-12 top-20 bg-gray-800 rounded-2xl p-1 shadow-2xl transform rotate-3">
                <div class="bg-white rounded-xl text-dark-gray p-2 w-32">
                  <div class="h-24 bg-green-50 rounded mb-2"></div>
                  <div class="h-2 bg-gray-200 rounded mb-1"></div>
                  <div class="h-2 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Government Display Bar -->
      <div class="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white text-base font-medium">
          {{ t('hero.governmentBar') }}
        </div>
      </div>
    </section>

    <!-- Core Metrics -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-200">
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-primary mb-2">1500万</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.investment') }}</div>
            </div>
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-primary mb-2">3年</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.period') }}</div>
            </div>
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-secondary mb-2">200+</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.coverage') }}</div>
            </div>
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-primary mb-2">5000家</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.merchants') }}</div>
            </div>
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-primary mb-2">10亿</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.exports') }}</div>
            </div>
            <div class="p-8 text-center hover:bg-light-gray transition-all cursor-pointer group">
              <div class="text-4xl font-bold text-primary mb-2">2000人/年</div>
              <div class="text-sm text-mid-gray">{{ t('metrics.talents') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Introduction -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Text -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray mb-4">
                {{ t('about.title') }}
              </h2>
              <div class="w-16 h-1 bg-primary mb-8"></div>
            </div>
            <div class="space-y-6 text-lg text-mid-gray leading-relaxed">
              <p>
                {{ t('about.description1') }}
              </p>
              <p>
                {{ t('about.description2') }}
              </p>
            </div>
          </div>

          <!-- Right Map -->
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg">
              <svg class="w-full h-auto" viewBox="0 0 600 400">
                <!-- Simplified world map outline -->
                <path d="M50,100 Q100,80 150,90 T250,85 T350,90 T450,80 T550,90" stroke="#1E40AF" stroke-width="2" fill="none" opacity="0.3"/>
                <path d="M50,150 Q120,140 200,150 T300,145 T400,150 T500,140 T580,150" stroke="#1E40AF" stroke-width="2" fill="none" opacity="0.3"/>
                <path d="M50,200 Q100,210 180,200 T280,205 T380,195 T480,200 T550,195" stroke="#1E40AF" stroke-width="2" fill="none" opacity="0.3"/>

                <!-- Coverage areas -->
                <circle cx="450" cy="180" r="60" fill="#1E40AF" opacity="0.2"/>
                <circle cx="300" cy="150" r="80" fill="#1E40AF" opacity="0.15"/>
                <circle cx="150" cy="180" r="70" fill="#1E40AF" opacity="0.15"/>

                <!-- Southeast Asia highlight -->
                <circle cx="380" cy="220" r="50" fill="#10B981" opacity="0.4"/>
                <text x="380" y="225" text-anchor="middle" class="text-xs font-semibold" fill="#10B981">{{ t('about.southeastAsia') }}</text>

                <!-- Legend -->
                <circle cx="100" cy="300" r="8" fill="#1E40AF" opacity="0.3"/>
                <text x="120" y="304" class="text-xs" fill="#6B7280">{{ t('about.globalCoverage') }}</text>
                <circle cx="100" cy="330" r="8" fill="#10B981" opacity="0.4"/>
                <text x="120" y="334" class="text-xs" fill="#6B7280">{{ t('about.southeastAsia') }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Advantages -->
    <section id="features" class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray mb-4">
            {{ t('features.title') }}
          </h2>
          <p class="text-base text-mid-gray">
            {{ t('features.subtitle') }}
          </p>
        </div>

        <!-- Advantages Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Advantage 1 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('features.ai.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">
              {{ t('features.ai.description') }}
            </p>
          </div>

          <!-- Advantage 2 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer">
            <div class="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('features.global.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">
              {{ t('features.global.description') }}
            </p>
          </div>

          <!-- Advantage 3 - Southeast Asia Highlighted -->
          <div class="bg-orange-50 rounded-xl p-8 shadow-md card-hover cursor-pointer border-2 border-secondary">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-secondary">{{ t('features.southeastAsia.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">
              {{ t('features.southeastAsia.description') }}
            </p>
          </div>

          <!-- Advantage 4 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('features.secure.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">
              {{ t('features.secure.description') }}
            </p>
          </div>

          <!-- Advantage 5 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('features.plugins.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">
              {{ t('features.plugins.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions -->
    <section id="solutions" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex justify-between items-center mb-16">
          <div>
            <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray mb-4">
              {{ t('solutions.title') }}
            </h2>
          </div>
          <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
            {{ t('solutions.viewAll') }} →
          </a>
        </div>

        <!-- Solutions Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Solution 1 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer border border-gray-200">
            <div class="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-sky-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.global.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.global.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.global.description') }}
            </p>
            <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
              {{ t('solutions.global.learnMore') }}
            </a>
          </div>

          <!-- Solution 2 - Southeast Asia Highlighted -->
          <div class="bg-green-50 rounded-xl p-8 shadow-md card-hover cursor-pointer border-2 border-green-500">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.southeastAsia.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.southeastAsia.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.southeastAsia.description') }}
            </p>
            <a href="#" class="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
              {{ t('solutions.southeastAsia.learnMore') }}
            </a>
          </div>

          <!-- Solution 3 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer border border-gray-200">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.europe.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.europe.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.europe.description') }}
            </p>
            <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
              {{ t('solutions.europe.learnMore') }}
            </a>
          </div>

          <!-- Solution 4 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer border border-gray-200">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.factory.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.factory.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.factory.description') }}
            </p>
            <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
              {{ t('solutions.factory.learnMore') }}
            </a>
          </div>

          <!-- Solution 5 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer border border-gray-200">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.trader.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.trader.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.trader.description') }}
            </p>
            <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
              {{ t('solutions.trader.learnMore') }}
            </a>
          </div>

          <!-- Solution 6 -->
          <div class="bg-white rounded-xl p-8 shadow-md card-hover cursor-pointer border border-gray-200">
            <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-5 relative">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
              <span class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded">{{ t('solutions.brand.tag') }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ t('solutions.brand.title') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed mb-4">
              {{ t('solutions.brand.description') }}
            </p>
            <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
              {{ t('solutions.brand.learnMore') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Ecosystem -->
    <section id="ecosystem" class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray mb-4">
            {{ t('ecosystem.title') }}
          </h2>
          <p class="text-base text-mid-gray">
            {{ t('ecosystem.subtitle') }}
          </p>
        </div>

        <!-- Circular Ecosystem -->
        <div class="relative max-w-4xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            <!-- Ecosystem Nodes -->
            <div class="bg-white rounded-xl p-6 shadow-md card-hover cursor-pointer text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 class="font-semibold text-dark-gray">{{ t('ecosystem.talents') }}</h3>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md card-hover cursor-pointer text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h3 class="font-semibold text-dark-gray">{{ t('ecosystem.supplyChain') }}</h3>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md card-hover cursor-pointer text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-dark-gray">{{ t('ecosystem.warehouses') }}</h3>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md card-hover cursor-pointer text-center">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-dark-gray">{{ t('ecosystem.partners') }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section id="news" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-semibold text-dark-gray">
            {{ t('news.title') }}
          </h2>
          <a href="#" class="text-primary text-sm font-medium hover:text-blue-800 transition-colors">
            {{ t('news.viewMore') }} →
          </a>
        </div>

        <!-- News Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- News 1 -->
          <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
            <div class="bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center relative">
              <svg class="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span class="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">{{ t('news.project') }}</span>
            </div>
            <div class="p-6">
              <div class="text-sm text-mid-gray mb-2">2026-06-06</div>
              <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">
                {{ t('news.news1') }}
              </h3>
            </div>
          </div>

          <!-- News 2 -->
          <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
            <div class="bg-gradient-to-br from-green-100 to-green-200 h-48 flex items-center justify-center relative">
              <svg class="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded">{{ t('news.regional') }}</span>
            </div>
            <div class="p-6">
              <div class="text-sm text-mid-gray mb-2">2026-05-28</div>
              <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">
                {{ t('news.news2') }}
              </h3>
            </div>
          </div>

          <!-- News 3 -->
          <div class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden">
            <div class="bg-gradient-to-br from-purple-100 to-purple-200 h-48 flex items-center justify-center relative">
              <svg class="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z"/>
              </svg>
              <span class="absolute top-4 left-4 bg-purple-500 text-white text-xs px-2 py-1 rounded">{{ t('news.industry') }}</span>
            </div>
            <div class="p-6">
              <div class="text-sm text-mid-gray mb-2">2026-05-10</div>
              <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">
                {{ t('news.news3') }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl lg:text-3xl font-semibold text-dark-gray mb-12">
          {{ t('partners.title') }}
        </h2>

        <!-- Partner Logos Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10">
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">连连支付</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">PayPal</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">Stripe</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">Adyen</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">云途物流</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">燕文物流</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">DHL</div>
          </div>
          <div class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100">
            <div class="text-dark-gray font-semibold text-sm">UPS</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-5">
          {{ t('cta.title') }}
        </h2>
        <p class="text-xl text-white/90 mb-10 leading-relaxed">
          {{ t('cta.description') }}
        </p>
        <a href="#" class="inline-block bg-white text-primary px-14 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
          {{ t('cta.cta') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation'

const { t } = useTranslation()

useHead({
  title: 'LeiMall - AI驱动的全球跨境电商SaaS平台',
  meta: [
    { name: 'description', content: 'LeiMall是专业的跨境电商SaaS平台，为您提供高效、智能的全球电商解决方案' },
  ],
})
</script>
