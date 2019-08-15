<template lang='pug'>
.title
  component(:is='`h${level}`', :class='{center}')
    .contents
      span.text
        slot
      .aside
        slot(name='aside')
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";
@import "~/assets/sass/utils.scss";

.title {
  font-family: 'Montserrat';

  .contents {
    display: flex;
    flex-wrap: wrap;

    .text {
      margin-right: auto;
      padding-right: 40px;
      @include phone {
        padding-right: 20px;
      }
    }

    .aside {
      display: flex;
      align-items: center;
      flex-wrap: wrap-reverse;
      justify-content: flex-end;
    }
  }

  h2, h3, h4, h5, h6 {
    margin-top: 1.0em;
    margin-bottom: 0.5em;
  }
  h1, h2, h3, h4, h5, h6 {
    &.center {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    margin-top: -8px;
    margin-bottom: 0;
    font-size: 54px;

    .text, .aside {
      margin-bottom: .5em;
    }

    @include phone {
      font-size: 28px;
    }
  }
  h2 {
    font-size: 24px;

    @include phone {
      font-size: 20px;
    }
  }
  h3 {
    font-size: 18px;

    @include phone {
      font-size: 16px;
    }
  }
}
</style>
