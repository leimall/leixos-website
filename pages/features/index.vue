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
              {{ t('featuresPage.hero.title') }}
            </h1>
            <p class="text-xl text-white/90 leading-relaxed fade-in-up" style="animation-delay: 0.2s;">
              {{ t('featuresPage.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-6 fade-in-up" style="animation-delay: 0.4s;">
              <NuxtLink to="/contact" class="bg-secondary text-white px-9 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all hover:scale-105 text-center">
                {{ t('featuresPage.hero.cta') }}
              </NuxtLink>
            </div>
          </div>
          <div class="relative flex justify-center items-center fade-in-up" style="animation-delay: 0.6s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold text-white mb-1">6</div>
                  <div class="text-sm text-white/80">{{ t('featuresPage.hero.layers') }}</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold text-white mb-1">50+</div>
                  <div class="text-sm text-white/80">{{ t('featuresPage.hero.modules') }}</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold text-white mb-1">200+</div>
                  <div class="text-sm text-white/80">{{ t('featuresPage.hero.countries') }}</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold text-white mb-1">10x</div>
                  <div class="text-sm text-white/80">{{ t('featuresPage.hero.efficiency') }}</div>
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
          :title="t('featuresPage.architectureOverview.title')"
          :subtitle="t('featuresPage.architectureOverview.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="plugins"
            color="primary"
            :title="t('featuresPage.architectureOverview.layer1.title')"
            :description="t('featuresPage.architectureOverview.layer1.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('featuresPage.architectureOverview.layer2.title')"
            :description="t('featuresPage.architectureOverview.layer2.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="sky"
            :title="t('featuresPage.architectureOverview.layer3.title')"
            :description="t('featuresPage.architectureOverview.layer3.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="purple"
            :title="t('featuresPage.architectureOverview.layer4.title')"
            :description="t('featuresPage.architectureOverview.layer4.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="cyan"
            :title="t('featuresPage.architectureOverview.layer5.title')"
            :description="t('featuresPage.architectureOverview.layer5.description')"
          />
          <FeatureCard
            icon-name="global"
            color="primary"
            :title="t('featuresPage.architectureOverview.layer6.title')"
            :description="t('featuresPage.architectureOverview.layer6.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.aiSection.title')"
          :subtitle="t('featuresPage.aiSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="ai"
            color="primary"
            :title="t('featuresPage.aiSection.copywriting.title')"
            :description="t('featuresPage.aiSection.copywriting.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="sky"
            :title="t('featuresPage.aiSection.customerService.title')"
            :description="t('featuresPage.aiSection.customerService.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="purple"
            :title="t('featuresPage.aiSection.adOptimization.title')"
            :description="t('featuresPage.aiSection.adOptimization.description')"
          />
        </div>
        <div class="mt-12 bg-white rounded-xl p-8">
          <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.aiSection.keyPoints') }}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-mid-gray">{{ t('featuresPage.aiSection.point1') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-mid-gray">{{ t('featuresPage.aiSection.point2') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-mid-gray">{{ t('featuresPage.aiSection.point3') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p class="text-mid-gray">{{ t('featuresPage.aiSection.point4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.websiteSection.title')"
          :subtitle="t('featuresPage.websiteSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="global"
            color="primary"
            :title="t('featuresPage.websiteSection.multilingual.title')"
            :description="t('featuresPage.websiteSection.multilingual.description')"
          />
          <FeatureCard
            icon-name="global"
            color="sky"
            :title="t('featuresPage.websiteSection.multiCurrency.title')"
            :description="t('featuresPage.websiteSection.multiCurrency.description')"
          />
          <FeatureCard
            icon-name="global"
            color="cyan"
            :title="t('featuresPage.websiteSection.visualBuilder.title')"
            :description="t('featuresPage.websiteSection.visualBuilder.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.paymentSection.title')"
          :subtitle="t('featuresPage.paymentSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">Stripe</div>
            <p class="text-sm text-mid-gray">{{ t('featuresPage.paymentSection.stripe') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">PayPal</div>
            <p class="text-sm text-mid-gray">{{ t('featuresPage.paymentSection.paypal') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">{{ t('featuresPage.paymentSection.alipayTitle') }}</div>
            <p class="text-sm text-mid-gray">{{ t('featuresPage.paymentSection.alipay') }}</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center card-hover">
            <div class="text-2xl font-bold text-primary mb-2">{{ t('featuresPage.paymentSection.localTitle') }}</div>
            <p class="text-sm text-mid-gray">{{ t('featuresPage.paymentSection.local') }}</p>
          </div>
        </div>
        <div class="mt-12 bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
          <h3 class="text-xl font-semibold mb-4">{{ t('featuresPage.paymentSection.featuresTitle') }}</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="flex items-start space-x-3">
              <span class="text-white">✓</span>
              <p>{{ t('featuresPage.paymentSection.feature1') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-white">✓</span>
              <p>{{ t('featuresPage.paymentSection.feature2') }}</p>
            </div>
            <div class="flex items-start space-x-3">
              <span class="text-white">✓</span>
              <p>{{ t('featuresPage.paymentSection.feature3') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.logisticsSection.title')"
          :subtitle="t('featuresPage.logisticsSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="factory"
            color="primary"
            :title="t('featuresPage.logisticsSection.yuntu.title')"
            :description="t('featuresPage.logisticsSection.yuntu.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="sky"
            :title="t('featuresPage.logisticsSection.yanwen.title')"
            :description="t('featuresPage.logisticsSection.yanwen.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="purple"
            :title="t('featuresPage.logisticsSection.dhl.title')"
            :description="t('featuresPage.logisticsSection.dhl.description')"
          />
        </div>
        <div class="mt-12 grid md:grid-cols-4 gap-6">
          <DataStat value="3天" :label="t('featuresPage.logisticsSection.seaDelivery')" color="primary" />
          <DataStat value="5-7天" :label="t('featuresPage.logisticsSection.euDelivery')" color="secondary" />
          <DataStat value="100+" :label="t('featuresPage.logisticsSection.warehouses')" color="primary" />
          <DataStat value="2000+" :label="t('featuresPage.logisticsSection.lines')" color="secondary" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.multitenantSection.title')"
          :subtitle="t('featuresPage.multitenantSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white rounded-xl p-8 text-center card-hover shadow-md">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('featuresPage.multitenantSection.merchant') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">{{ t('featuresPage.multitenantSection.merchantDesc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center card-hover shadow-md">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('featuresPage.multitenantSection.platform') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">{{ t('featuresPage.multitenantSection.platformDesc') }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 text-center card-hover shadow-md">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-dark-gray mb-3">{{ t('featuresPage.multitenantSection.admin') }}</h3>
            <p class="text-sm text-mid-gray leading-relaxed">{{ t('featuresPage.multitenantSection.adminDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.dataSection.title')"
          :subtitle="t('featuresPage.dataSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <FeatureCard
            icon-name="data"
            color="primary"
            :title="t('featuresPage.dataSection.realtime.title')"
            :description="t('featuresPage.dataSection.realtime.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('featuresPage.dataSection.forecast.title')"
            :description="t('featuresPage.dataSection.forecast.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.complianceSection.title')"
          :subtitle="t('featuresPage.complianceSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="secure"
            color="primary"
            :title="t('featuresPage.complianceSection.tax.title')"
            :description="t('featuresPage.complianceSection.tax.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="sky"
            :title="t('featuresPage.complianceSection.customs.title')"
            :description="t('featuresPage.complianceSection.customs.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="purple"
            :title="t('featuresPage.complianceSection.fraud.title')"
            :description="t('featuresPage.complianceSection.fraud.description')"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.pluginSection.title')"
          :subtitle="t('featuresPage.pluginSection.subtitle')"
          align="center"
        />
        <div class="mt-12 bg-light-gray rounded-xl p-8">
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-white rounded-lg card-hover shadow-sm">
              <div class="text-4xl mb-2">🔌</div>
              <h4 class="font-semibold text-dark-gray mb-2">{{ t('featuresPage.pluginSection.marketplace') }}</h4>
              <p class="text-sm text-mid-gray">{{ t('featuresPage.pluginSection.marketplaceDesc') }}</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg card-hover shadow-sm">
              <div class="text-4xl mb-2">⚡</div>
              <h4 class="font-semibold text-dark-gray mb-2">{{ t('featuresPage.pluginSection.onDemand') }}</h4>
              <p class="text-sm text-mid-gray">{{ t('featuresPage.pluginSection.onDemandDesc') }}</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg card-hover shadow-sm">
              <div class="text-4xl mb-2">🔧</div>
              <h4 class="font-semibold text-dark-gray mb-2">{{ t('featuresPage.pluginSection.custom') }}</h4>
              <p class="text-sm text-mid-gray">{{ t('featuresPage.pluginSection.customDesc') }}</p>
            </div>
            <div class="text-center p-4 bg-white rounded-lg card-hover shadow-sm">
              <div class="text-4xl mb-2">🔄</div>
              <h4 class="font-semibold text-dark-gray mb-2">{{ t('featuresPage.pluginSection.updates') }}</h4>
              <p class="text-sm text-mid-gray">{{ t('featuresPage.pluginSection.updatesDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.infraSection.title')"
          :subtitle="t('featuresPage.infraSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            icon-name="secure"
            color="primary"
            :title="t('featuresPage.infraSection.iam.title')"
            :description="t('featuresPage.infraSection.iam.description')"
          />
          <FeatureCard
            icon-name="global"
            color="sky"
            :title="t('featuresPage.infraSection.i18n.title')"
            :description="t('featuresPage.infraSection.i18n.description')"
          />
          <FeatureCard
            icon-name="global"
            color="secondary"
            :title="t('featuresPage.infraSection.currency.title')"
            :description="t('featuresPage.infraSection.currency.description')"
          />
          <FeatureCard
            icon-name="plugins"
            color="purple"
            :title="t('featuresPage.infraSection.tenantEngine.title')"
            :description="t('featuresPage.infraSection.tenantEngine.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="cyan"
            :title="t('featuresPage.infraSection.apiGateway.title')"
            :description="t('featuresPage.infraSection.apiGateway.description')"
          />
          <FeatureCard
            icon-name="data"
            color="primary"
            :title="t('featuresPage.infraSection.messageQueue.title')"
            :description="t('featuresPage.infraSection.messageQueue.description')"
          />
          <FeatureCard
            icon-name="data"
            color="sky"
            :title="t('featuresPage.infraSection.cache.title')"
            :description="t('featuresPage.infraSection.cache.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('featuresPage.infraSection.objectStorage.title')"
            :description="t('featuresPage.infraSection.objectStorage.description')"
          />
        </div>
        <div class="mt-12 space-y-6">
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.iam.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.iam.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.iam.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.iam.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.iam.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.i18n.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.i18n.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.i18n.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.i18n.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.i18n.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.currency.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.currency.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.currency.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.currency.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.currency.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.tenantEngine.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.tenantEngine.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.tenantEngine.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.tenantEngine.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.tenantEngine.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.apiGateway.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.apiGateway.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.apiGateway.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.apiGateway.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.apiGateway.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.messageQueue.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.messageQueue.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.messageQueue.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.messageQueue.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.messageQueue.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.cache.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.cache.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.cache.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.cache.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.cache.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.infraSection.objectStorage.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.objectStorage.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.objectStorage.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.objectStorage.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.infraSection.objectStorage.feature4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.platformMgmtSection.title')"
          :subtitle="t('featuresPage.platformMgmtSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            icon-name="secure"
            color="primary"
            :title="t('featuresPage.platformMgmtSection.tenantLifecycle.title')"
            :description="t('featuresPage.platformMgmtSection.tenantLifecycle.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="sky"
            :title="t('featuresPage.platformMgmtSection.globalControl.title')"
            :description="t('featuresPage.platformMgmtSection.globalControl.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="purple"
            :title="t('featuresPage.platformMgmtSection.compliance.title')"
            :description="t('featuresPage.platformMgmtSection.compliance.description')"
          />
          <FeatureCard
            icon-name="plugins"
            color="secondary"
            :title="t('featuresPage.platformMgmtSection.platformTools.title')"
            :description="t('featuresPage.platformMgmtSection.platformTools.description')"
          />
        </div>
        <div class="mt-12 space-y-6">
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub1Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub2Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub3Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.tenantLifecycle.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.platformMgmtSection.globalControl.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.globalControl.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.globalControl.sub1Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.globalControl.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.globalControl.sub2Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.globalControl.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.globalControl.sub3Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.globalControl.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.globalControl.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.platformMgmtSection.compliance.title') }}</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.compliance.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.compliance.sub1Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.platformMgmtSection.compliance.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.compliance.sub2Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.platformMgmtSection.platformTools.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.platformTools.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.platformTools.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.platformTools.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.platformMgmtSection.platformTools.feature4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.tenantBusinessSection.title')"
          :subtitle="t('featuresPage.tenantBusinessSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <FeatureCard
            icon-name="factory"
            color="primary"
            :title="t('featuresPage.tenantBusinessSection.storeMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.storeMgmt.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="sky"
            :title="t('featuresPage.tenantBusinessSection.productMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.productMgmt.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="secondary"
            :title="t('featuresPage.tenantBusinessSection.orderMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.orderMgmt.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="purple"
            :title="t('featuresPage.tenantBusinessSection.customerMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.customerMgmt.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="cyan"
            :title="t('featuresPage.tenantBusinessSection.marketingMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.marketingMgmt.description')"
          />
          <FeatureCard
            icon-name="factory"
            color="primary"
            :title="t('featuresPage.tenantBusinessSection.logisticsMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.logisticsMgmt.description')"
          />
          <FeatureCard
            icon-name="data"
            color="sky"
            :title="t('featuresPage.tenantBusinessSection.financeMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.financeMgmt.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('featuresPage.tenantBusinessSection.analyticsMgmt.title')"
            :description="t('featuresPage.tenantBusinessSection.analyticsMgmt.description')"
          />
        </div>
        <div class="mt-12 space-y-6">
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.storeMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.storeMgmt.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.storeMgmt.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.storeMgmt.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.storeMgmt.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.productMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub1Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub2Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub3Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.productMgmt.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.orderMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub1Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub2Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub3Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.orderMgmt.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.customerMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.customerMgmt.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.customerMgmt.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.customerMgmt.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.customerMgmt.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.title') }}</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub1Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub2Desc') }}</p>
              </div>
              <div class="bg-light-gray rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.marketingMgmt.sub3Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.logisticsMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.logisticsMgmt.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.logisticsMgmt.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.logisticsMgmt.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.logisticsMgmt.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.financeMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.financeMgmt.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.financeMgmt.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.financeMgmt.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.financeMgmt.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.tenantBusinessSection.analyticsMgmt.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.analyticsMgmt.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.analyticsMgmt.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.analyticsMgmt.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.tenantBusinessSection.analyticsMgmt.feature4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.consumerSection.title')"
          :subtitle="t('featuresPage.consumerSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            icon-name="ai"
            color="primary"
            :title="t('featuresPage.consumerSection.shoppingExp.title')"
            :description="t('featuresPage.consumerSection.shoppingExp.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="sky"
            :title="t('featuresPage.consumerSection.userAccount.title')"
            :description="t('featuresPage.consumerSection.userAccount.description')"
          />
          <FeatureCard
            icon-name="secure"
            color="purple"
            :title="t('featuresPage.consumerSection.support.title')"
            :description="t('featuresPage.consumerSection.support.description')"
          />
        </div>
        <div class="mt-12 space-y-6">
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.consumerSection.shoppingExp.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.shoppingExp.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.shoppingExp.sub1Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.shoppingExp.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.shoppingExp.sub2Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.shoppingExp.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.shoppingExp.sub3Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.shoppingExp.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.shoppingExp.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.consumerSection.userAccount.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.userAccount.sub1') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.userAccount.sub1Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.userAccount.sub2') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.userAccount.sub2Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.userAccount.sub3') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.userAccount.sub3Desc') }}</p>
              </div>
              <div class="bg-white rounded-lg p-4">
                <h4 class="font-semibold text-dark-gray text-sm mb-2">{{ t('featuresPage.consumerSection.userAccount.sub4') }}</h4>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.userAccount.sub4Desc') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-light-gray rounded-xl p-8">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.consumerSection.support.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.support.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.support.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.support.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3 bg-white rounded-lg p-4">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.consumerSection.support.feature4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          :title="t('featuresPage.dataIntelligenceSection.title')"
          :subtitle="t('featuresPage.dataIntelligenceSection.subtitle')"
          align="center"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon-name="ai"
            color="primary"
            :title="t('featuresPage.dataIntelligenceSection.aiContent.title')"
            :description="t('featuresPage.dataIntelligenceSection.aiContent.description')"
          />
          <FeatureCard
            icon-name="data"
            color="sky"
            :title="t('featuresPage.dataIntelligenceSection.recommendation.title')"
            :description="t('featuresPage.dataIntelligenceSection.recommendation.description')"
          />
          <FeatureCard
            icon-name="data"
            color="secondary"
            :title="t('featuresPage.dataIntelligenceSection.selectionPricing.title')"
            :description="t('featuresPage.dataIntelligenceSection.selectionPricing.description')"
          />
          <FeatureCard
            icon-name="ai"
            color="purple"
            :title="t('featuresPage.dataIntelligenceSection.intelligentService.title')"
            :description="t('featuresPage.dataIntelligenceSection.intelligentService.description')"
          />
          <FeatureCard
            icon-name="data"
            color="cyan"
            :title="t('featuresPage.dataIntelligenceSection.businessIntelligence.title')"
            :description="t('featuresPage.dataIntelligenceSection.businessIntelligence.description')"
          />
        </div>
        <div class="mt-12 space-y-6">
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.dataIntelligenceSection.aiContent.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.aiContent.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.aiContent.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.aiContent.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.aiContent.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.dataIntelligenceSection.recommendation.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.recommendation.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.recommendation.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.recommendation.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.recommendation.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.dataIntelligenceSection.selectionPricing.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.selectionPricing.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.selectionPricing.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.selectionPricing.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.selectionPricing.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.dataIntelligenceSection.intelligentService.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.intelligentService.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.intelligentService.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.intelligentService.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.intelligentService.feature4') }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('featuresPage.dataIntelligenceSection.businessIntelligence.title') }}</h3>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.businessIntelligence.feature1') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.businessIntelligence.feature2') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.businessIntelligence.feature3') }}</p>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <p class="text-mid-gray text-sm">{{ t('featuresPage.dataIntelligenceSection.businessIntelligence.feature4') }}</p>
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
import DataStat from '~/components/DataStat.vue'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '产品功能 - LeiMall | 跨境电商多租户平台完整模块体系',
  description: 'LeiMall提供6大层级50+核心功能模块：基础设施层(IAM/i18n/多货币/多租户/API网关)、平台运营管理层(租户生命周期/全局管控/合规风控)、租户业务层(店铺/商品/订单/营销/物流/财务/数据分析)、C端用户层、数据智能层(AI内容/智能推荐/选品定价/智能客服)',
})
</script>
