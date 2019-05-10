<template lang="pug">
.free-and-open-source
  label-icon.icon
  span {{ $t('freeAndOpenSource') }}
</template>

<script>
import LabelIcon from '~/assets/images/icons/label.svg?inline'

export default {
  components: {
    LabelIcon
  }
}
</script>

<style lang="scss" scoped>
.free-and-open-source {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: 'agave';
  font-size: 16px;
  font-weight: 400;

  .icon {
    margin-right: 15px;
  }
}
</style>
