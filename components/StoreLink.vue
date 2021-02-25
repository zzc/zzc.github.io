<template lang='pug'>
a.store-link(:href='href', target='_blank')
  span.buy(v-if='module.price > 0') {{ $t('buyFor') }}
  span.free(v-else) {{ $t('addToRack') }}
  span.price(v-if='module.price > 0') {{ ' ' }} ${{ module.price }}
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
      return this.module.url || `https://library.vcvrack.com/ZZC/${this.module.librarySlug}`
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";
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
  white-space: nowrap;

  .buy {
    @include phone {
      display: none;
    }
  }

  .price {
    &::before {
      content: ' ';
      display: inline-block;
    }
  }

  .icon {
    margin-left: 10px;
  }

  &:hover {
    background-color: $color-fg;
    color: $color-zzc;
  }
}
</style>
