<template lang='pug'>
.section-simple
  .article
    template(v-for='(item, idx) in article')
      ttl(v-if='item.type === "heading"', :level='item.depth') {{ item.text }}
        store-link(
          slot='aside',
          v-if='idx === 0 && showButton',
          :moduleSlug='moduleSlug'
        )
      subttl.subtitle(v-else-if='item.type === "blockquote" && idx < 3') {{ item.items[0].text }}
      md-item(v-else, :token='item', :moduleSlug='moduleSlug')
</template>

<script>
import marked from 'marked'
import Subttl from '~/components/SubTitle'
import Ttl from '~/components/Title'
import MdItem from '~/components/MdItem'
import StoreLink from '~/components/StoreLink'

export default {
  name: 'section-simple',
  props: {
    article: {
      type: Array,
      required: true
    },
    moduleSlug: {
      type: String,
      required: true
    },
    showButton: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Subttl,
    Ttl,
    MdItem,
    StoreLink
  }
}

</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";

.article {
  .subtitle {
    margin-top: 10px;
    margin-bottom: 40px;
  }
}
</style>
