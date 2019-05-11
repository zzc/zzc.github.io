<template lang='pug'>
a.store-link(:href='href', target='_blank')
  | {{ module.price > 0 ? `${$t('buyFor')} $${module.price}` : $t('addToRack') }}
  arrow-right.icon
</template>

<script>
import ArrowRight from '~/assets/images/icons/arrow-right.svg?inline'
import modules from '~/lib/modules'

export default {
  props: {
    moduleSlug: {
      type: String,
      required: true
    }
  },
  components: {
    ArrowRight
  },
  computed: {
    module () {
      return modules.find(module => module.slug === this.moduleSlug)
    },
    href () {
      let url = 'https://vcvrack.com/plugins.html#ZZC'
      if (this.module.price > 0) {
        url += ` ${this.module.name}`
      }
      return url
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/colors.scss";
@import "~/assets/sass/utils.scss";

.store-link {
  @include center;
  border-radius: 5px;
  color: $color-fg;
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid $color-fg;
  margin-left: 40px;
  white-space: nowrap;

  .icon {
    margin-left: 10px;
  }

  &:hover {
    background-color: $color-fg;
    color: $color-zzc;
  }
}
</style>
