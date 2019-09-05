<template lang='pug'>
.docs-section
  section-affixing(
    v-if='section.type === "affixing"',
    :affixed='section.affixed',
    :article='section.items',
    :moduleSlug='moduleSlug',
    :sectionIdx='sectionIdx'
  )
  section-simple(
    v-else-if='section.type === "simple"',
    :article='section.items',
    :moduleSlug='moduleSlug'
  )
</template>

<script>
import SectionAffixing from '~/components/SectionAffixing'
import SectionSimple from '~/components/SectionSimple'

export default {
  name: 'docs-section',
  props: {
    section: {
      type: Object,
      required: true
    },
    moduleSlug: {
      type: String,
      default: null
    },
    sectionIdx: {
      type: Number,
      required: true
    }
  },
  components: {
    SectionAffixing,
    SectionSimple
  }
}
</script>

<style lang='scss' scoped>
</style>
