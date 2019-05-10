<template lang='pug'>
.category-page
  article-page(
    :markdown='markdown',
    :crumbs='crumbs',
    :modules='modules',
    :relatedModules='modules'
  )
</template>

<script>
import ArticlePage from '~/components/ArticlePage'
import categories from '~/lib/categories'
import modules from '~/lib/modules'

const filterModules = (modules, category) => {
  if (['free', 'paid'].includes(category)) {
    return modules.filter(module => (module.price > 0) === (category === 'paid'))
  }
  return modules.filter(module => module.category.slug === category)
}

export default {
  components: {
    ArticlePage
  },
  async asyncData ({ $axios, app, params }) {
    const locale = app.i18n.locale
    const path = `/markdown/${params.categorySlug}.${locale}.md`
    const markdown = await $axios.$get(path)
    return {
      markdown,
      modules: filterModules(modules, params.categorySlug)
    }
  },
  head () {
    return {
      title: `ZZC | ${this.category.name[this.$i18n.locale]}`
    }
  },
  computed: {
    category () {
      return categories.find(category => {
        return category.slug === this.$route.params.categorySlug
      })
    },
    crumbs () {
      return [
        { url: this.$route,
          title: this.category.name[this.$i18n.locale] }
      ]
    }
  }
}
</script>
