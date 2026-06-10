<template>
  <div>
    <section class="gradient-bg text-white pt-16 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1200 400">
          <circle cx="100" cy="100" r="80" fill="white" opacity="0.3" class="float-animation"/>
        </svg>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <NuxtLink to="/news" class="text-white/80 hover:text-white text-sm mb-6 inline-block">← {{ t('newsDetail.back') }}</NuxtLink>
        <div class="space-y-4">
          <div class="flex items-center gap-4 text-sm text-white/80">
            <span>{{ currentArticle.date }}</span>
            <span>·</span>
            <span>{{ currentArticle.category }}</span>
          </div>
          <h1 class="text-3xl lg:text-5xl font-bold leading-tight">{{ currentArticle.title }}</h1>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="prose prose-lg max-w-none">
          <div class="space-y-6 text-mid-gray leading-relaxed">
            <p class="text-lg">{{ currentArticle.content1 }}</p>
            <p>{{ currentArticle.content2 }}</p>
            <div class="bg-light-gray rounded-xl p-8 my-8">
              <h3 class="text-xl font-semibold text-dark-gray mb-4">{{ t('newsDetail.highlights') }}</h3>
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ currentArticle.highlight1 }}</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ currentArticle.highlight2 }}</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="text-primary font-bold">✓</span>
                  <span>{{ currentArticle.highlight3 }}</span>
                </li>
              </ul>
            </div>
            <p>{{ currentArticle.content3 }}</p>
            <p>{{ currentArticle.content4 }}</p>
          </div>
        </article>

        <div class="mt-16 pt-8 border-t border-gray-200">
          <div class="flex justify-between items-center mb-8">
            <NuxtLink v-if="prevArticle" :to="`/news/${prevArticle.id}`" class="flex-1 group">
              <div class="text-sm text-mid-gray mb-2">← {{ t('newsDetail.prev') }}</div>
              <div class="font-semibold text-dark-gray group-hover:text-primary transition-colors line-clamp-1">{{ prevArticle.title }}</div>
            </NuxtLink>
            <div v-else class="flex-1"></div>
            <NuxtLink v-if="nextArticle" :to="`/news/${nextArticle.id}`" class="flex-1 text-right group">
              <div class="text-sm text-mid-gray mb-2">{{ t('newsDetail.next') }} →</div>
              <div class="font-semibold text-dark-gray group-hover:text-primary transition-colors line-clamp-1">{{ nextArticle.title }}</div>
            </NuxtLink>
            <div v-else class="flex-1"></div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-2xl font-semibold text-dark-gray mb-8">{{ t('newsDetail.related') }}</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="article in relatedArticles"
              :key="article.id"
              :to="`/news/${article.id}`"
              class="bg-light-gray rounded-xl p-6 card-hover"
            >
              <div class="text-sm text-mid-gray mb-2">{{ article.date }}</div>
              <h4 class="font-semibold text-dark-gray mb-2 line-clamp-2">{{ article.title }}</h4>
              <p class="text-sm text-mid-gray line-clamp-2">{{ article.excerpt }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslation } from '~/composables/useTranslation'
import { useSeo } from '~/composables/useSeo'
import CTASection from '~/components/CTASection.vue'

const { t } = useTranslation()
const { setPageMeta } = useSeo()
const route = useRoute()

const articles = [
  {
    id: 1,
    title: t('newsDetail.articles.a1.title'),
    excerpt: t('newsDetail.articles.a1.excerpt'),
    date: '2026-06-06',
    category: t('newsPage.categories.project'),
    content1: t('newsDetail.articles.a1.content1'),
    content2: t('newsDetail.articles.a1.content2'),
    content3: t('newsDetail.articles.a1.content3'),
    content4: t('newsDetail.articles.a1.content4'),
    highlight1: t('newsDetail.articles.a1.highlight1'),
    highlight2: t('newsDetail.articles.a1.highlight2'),
    highlight3: t('newsDetail.articles.a1.highlight3'),
  },
  {
    id: 2,
    title: t('newsDetail.articles.a2.title'),
    excerpt: t('newsDetail.articles.a2.excerpt'),
    date: '2026-05-28',
    category: t('newsPage.categories.regional'),
    content1: t('newsDetail.articles.a2.content1'),
    content2: t('newsDetail.articles.a2.content2'),
    content3: t('newsDetail.articles.a2.content3'),
    content4: t('newsDetail.articles.a2.content4'),
    highlight1: t('newsDetail.articles.a2.highlight1'),
    highlight2: t('newsDetail.articles.a2.highlight2'),
    highlight3: t('newsDetail.articles.a2.highlight3'),
  },
  {
    id: 3,
    title: t('newsDetail.articles.a3.title'),
    excerpt: t('newsDetail.articles.a3.excerpt'),
    date: '2026-05-10',
    category: t('newsPage.categories.industry'),
    content1: t('newsDetail.articles.a3.content1'),
    content2: t('newsDetail.articles.a3.content2'),
    content3: t('newsDetail.articles.a3.content3'),
    content4: t('newsDetail.articles.a3.content4'),
    highlight1: t('newsDetail.articles.a3.highlight1'),
    highlight2: t('newsDetail.articles.a3.highlight2'),
    highlight3: t('newsDetail.articles.a3.highlight3'),
  },
  {
    id: 4,
    title: t('newsDetail.articles.a4.title'),
    excerpt: t('newsDetail.articles.a4.excerpt'),
    date: '2026-04-20',
    category: t('newsPage.categories.project'),
    content1: t('newsDetail.articles.a4.content1'),
    content2: t('newsDetail.articles.a4.content2'),
    content3: t('newsDetail.articles.a4.content3'),
    content4: t('newsDetail.articles.a4.content4'),
    highlight1: t('newsDetail.articles.a4.highlight1'),
    highlight2: t('newsDetail.articles.a4.highlight2'),
    highlight3: t('newsDetail.articles.a4.highlight3'),
  },
]

const currentId = computed(() => Number(route.params.id) || 1)
const currentIndex = computed(() => articles.findIndex(a => a.id === currentId.value))
const currentArticle = computed(() => articles[currentIndex.value] || articles[0])
const prevArticle = computed(() => currentIndex.value > 0 ? articles[currentIndex.value - 1] : null)
const nextArticle = computed(() => currentIndex.value < articles.length - 1 ? articles[currentIndex.value + 1] : null)
const relatedArticles = computed(() => articles.filter(a => a.id !== currentId.value).slice(0, 3))

watchEffect(() => {
  setPageMeta({
    title: `${currentArticle.value.title} - LeiMall`,
    description: currentArticle.value.excerpt,
  })
})
</script>
