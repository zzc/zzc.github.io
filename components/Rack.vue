<template lang='pug'>
.rack
  crumbsbar(v-if='crumbs.length > 0', :crumbs='crumbs')
  .background(:class='{ single: modules.length === 1 }')
    container
      .rack-layout(:class='{ multiple: modules.length > 1 }')
        module.module(v-for='module in modules', :key='module.slug', :module='module', :single='modules.length === 1')
</template>

<script>
import Container from '~/components/Container'
import Crumbsbar from '~/components/Crumbsbar'
import Module from '~/components/Module'

export default {
  props: {
    crumbs: {
      type: Array,
      default: () => ([])
    },
    modules: {
      typ : Array,
      default: () => ([])
    }
  },
  components: {
    Container,
    Crumbsbar,
    Module
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";
@import "~/assets/sass/colors.scss";

$color-rack-background: #616464;

.rack {
  overflow: hidden;

  .background {
    background-color: $color-rack-background;
    background-image: url('~assets/images/rack-bg.svg');
    background-position: 0 0;

    @include shrink-big-module {
      background-size: auto 285px;
    }

    @include phone {
      background-size: auto 190px;
    }

    @include shrink-big-module-2 {
      background-size: auto 95px;
    }

    &.single {
      background-size: auto 100%;
    }
  }

  .rack-layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -7.5px;
    margin-right: -7.5px;

    @include phone {
      margin-left: -3.75px;
      margin-right: -3.75px;
    }

    &.multiple {
      &:hover {
        .module {
          filter: brightness(50%);
          &:hover {
            filter: none;
            transition: filter .1s ease;
          }
        }
      }
    }

    .module {
      margin-left: 7.5px;
      margin-right: 7.5px;
      // box-shadow: 0px 5px 20px rgba(0, 0, 0, .25);
      transition: filter 1s ease;

      @include phone {
        margin-left: 3.75px;
        margin-right: 3.75px;
      }
    }
  }
}
</style>
