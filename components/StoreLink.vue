<template lang='pug'>
a.store-link(:href='href'): slot
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/colors.scss";
@import "~/assets/sass/utils.scss";

.store-link {
  @include center;
  background-color: $color-fg;
  border-radius: 5px;
  color: white;
  // font-family: 'Montserrat';
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
  }
}
</style>
