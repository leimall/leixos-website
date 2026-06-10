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
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 fade-in-up">{{ t('newsPage.hero.title') }}</h1>
          <p class="text-xl text-white/90 fade-in-up" style="animation-delay: 0.2s;">{{ t('newsPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-light-gray">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 justify-center mb-8">
          <button
            @click="activeCategory = 'all'"
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-mid-gray hover:bg-gray-100']"
          >
            {{ t('newsPage.categories.all') }}
          </button>
          <button
            @click="activeCategory = 'project'"
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeCategory === 'project' ? 'bg-primary text-white' : 'bg-white text-mid-gray hover:bg-gray-100']"
          >
            {{ t('newsPage.categories.project') }}
          </button>
          <button
            @click="activeCategory = 'regional'"
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeCategory === 'regional' ? 'bg-primary text-white' : 'bg-white text-mid-gray hover:bg-gray-100']"
          >
            {{ t('newsPage.categories.regional') }}
          </button>
          <button
            @click="activeCategory = 'industry'"
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeCategory === 'industry' ? 'bg-primary text-white' : 'bg-white text-mid-gray hover:bg-gray-100']"
          >
            {{ t('newsPage.categories.industry') }}
          </button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <NuxtLink
            v-for="article in filteredArticles"
            :key="article.id"
            :to="`/news/${article.id}`"
            class="bg-white rounded-xl shadow-md card-hover cursor-pointer overflow-hidden"
          >
            <div :class="['h-48 flex items-center justify-center relative', article.bgColor]">
              <svg class="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="article.iconPath"/>
              </svg>
              <span :class="['absolute top-4 left-4 text-white text-xs px-2 py-1 rounded', article.tagColor]">
                {{ article.category }}
              </span>
            </div>
            <div class="p-6">
              <div class="text-sm text-mid-gray mb-2">{{ article.date }}</div>
              <h3 class="font-semibold text-dark-gray mb-2 line-clamp-2">{{ article.title }}</h3>
              <p class="text-sm text-mid-gray line-clamp-2">{{ article.excerpt }}</p>
            </div>
          </NuxtLink>
        </div>

        <div class="flex justify-center items-center gap-2 mt-12">
          <button
            @click="currentPage > 1 && currentPage--"
            :class="['px-4 py-2 rounded-lg font-medium', currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-mid-gray hover:bg-gray-100']"
            :disabled="currentPage === 1"
          >
            ← {{ t('newsPage.pagination.prev') }}
          </button>
          <span class="px-4 py-2 bg-primary text-white rounded-lg font-medium">{{ currentPage }}</span>
          <button
            @click="currentPage < totalPages && currentPage++"
            :class="['px-4 py-2 rounded-lg font-medium', currentPage >= totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-mid-gray hover:bg-gray-100']"
            :disabled="currentPage >= totalPages"
          >
            {{ t('newsPage.pagination.next') }} →
          </button>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()

setPageMeta({
  title: '新闻中心 - LeiMall | 行业动态与项目进展',
  description: 'LeiMall 最新项目动态、区域资讯和行业新闻，了解跨境电商SaaS平台的最新发展',
})

const activeCategory = ref('all')
const currentPage = ref(1)
const totalPages = ref(3)

const articles = ref([
  { id: 1, title: t('newsPage.articles.a1.title'), excerpt: t('newsPage.articles.a1.excerpt'), date: '2026-06-06', category: t('newsPage.categories.project'), tag: 'project', bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600', iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', tagColor: 'bg-blue-500' },
  { id: 2, title: t('newsPage.articles.a2.title'), excerpt: t('newsPage.articles.a2.excerpt'), date: '2026-05-28', category: t('newsPage.categories.regional'), tag: 'regional', bgColor: 'bg-gradient-to-br from-green-400 to-green-600', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z', tagColor: 'bg-green-500' },
  { id: 3, title: t('newsPage.articles.a3.title'), excerpt: t('newsPage.articles.a3.excerpt'), date: '2026-05-10', category: t('newsPage.categories.industry'), tag: 'industry', bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', tagColor: 'bg-purple-500' },
  { id: 4, title: t('newsPage.articles.a4.title'), excerpt: t('newsPage.articles.a4.excerpt'), date: '2026-04-20', category: t('newsPage.categories.project'), tag: 'project', bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', tagColor: 'bg-orange-500' },
  { id: 5, title: t('newsPage.articles.a5.title'), excerpt: t('newsPage.articles.a5.excerpt'), date: '2026-04-15', category: t('newsPage.categories.regional'), tag: 'regional', bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600', iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', tagColor: 'bg-teal-500' },
  { id: 6, title: t('newsPage.articles.a6.title'), excerpt: t('newsPage.articles.a6.excerpt'), date: '2026-03-30', category: t('newsPage.categories.industry'), tag: 'industry', bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', tagColor: 'bg-pink-500' },
])

const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') {
    return articles.value
  }
  return articles.value.filter(a => {
    if (activeCategory.value === 'project') return a.tag === 'project'
    if (activeCategory.value === 'regional') return a.tag === 'regional'
    if (activeCategory.value === 'industry') return a.tag === 'industry'
    return true
  })
})
</script>
