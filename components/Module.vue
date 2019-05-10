<template lang='pug'>
nuxt-link.module(:to='{ name: "categorySlug-moduleSlug", params: { categorySlug: module.category.slug, moduleSlug: module.slug, lang: $i18n.locale } }')
  img.image(:src='`/markdown/${module.slug}/${module.slug}.svg`')
</template>

<script>
export default {
  props: {
    module: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";

.module {
  max-width: 100%;

  .image {
    display: block;

    @include shrink-big-module {
      max-height: 285px;
    }

    @include phone {
      max-height: 190px;
    }

    @include shrink-big-module-2 {
      max-height: 95px;
    }
  }
}
</style>
