<template lang='pug'>
.blueprint(:style='blueprintStyle')
  .overflow(
    ref='overflow',
    :style='overflowStyle'
  )
    img.blueprint-img(
      :src='blueprintUrl',
      ref='blueprint',
      :class='{dimmed}',
      :style='offsetStyle'
    )
    .previews(
      :style='offsetStyle'
    )
      template(v-for='group in widgetGroups')
        template(v-for='groupItem in group.items')
          nuxt-link.preview(
            v-if='groupItem.type === "list"',
            v-for='widget in groupItem.items',
            :key='makeGroupItemSlug(widget, group)',
            :to='{ ...$route, hash: `#${makeGroupItemSlug(widget, group)}` }',
            :style='{backgroundImage: `url(${previewUrl})`, ...styleForWidget(widget)}',
            :class='{active: spaghettiEnabledFor === makeGroupItemSlug(widget, group)}',
            @mouseenter.native='activateSpaghetti(widget, group)',
            @mouseleave.native='deactivateSpaghetti(widget, group)'
          )
  .overflow-indicator.left(
    v-if='blueprintOffset < 0',
    :class='{dimmed}'
  )
  .overflow-indicator.right(
    v-if='overflowing',
    :class='{dimmed}'
  )
</template>

<script>
import { makeGroupItemSlug } from '~/lib/shared'
import { widgetRects, parseCustomRect } from '~/lib/widget-rects'

export default {
  props: {
    widgetGroups: {
      type: Array,
      default: () => ([])
    },
    spaghettiEnabledFor: {
      type: String,
      required: true
    },
    blueprintUrl: {
      type: String,
      required: true
    },
    previewUrl: {
      type: String,
      required: true
    },
    blueprintOffset: {
      type: Number,
      default: 0
    },
    blueprintCrop: {
      type: Number,
      default: undefined
    }
  },
  name: 'blueprint',
  data: () => ({
    scale: 2.0,
    animationId: null,
    overflowing: false
  }),
  methods: {
    styleForWidget (widget) {
      if (!widget.options) { return {} }
      const rect = widget.options.type === 'custom-rect' ? parseCustomRect(widget.options) : widgetRects[widget.options.type]
      const position = { x: parseInt(widget.options.x), y: parseInt(widget.options.y) }
      return {
        transform: `scale(${this.scale}) translate(${position.x + rect.x}px, ${position.y + rect.y}px)`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        backgroundPosition: `-${position.x + rect.x}px -${position.y + rect.y}px`,
        borderRadius: rect.radius
      }
    },
    updateScale () {
      if (this.$refs.blueprint) {
        const blueprintRect = this.$refs.blueprint.getBoundingClientRect()
        const overflowRect = this.$refs.overflow.getBoundingClientRect()
        let maxScaleX = 2
        let maxScaleY = 2
        let maxBPWidth = (window.innerWidth - 60 * 2) / 2
        let maxBPHeight = window.innerHeight - 60 * 2
        if (this.blueprintCrop) {
          if (this.blueprintCrop * 2 > maxBPWidth) {
            maxScaleX = maxBPWidth / (this.blueprintCrop * 2) * 2
          }
        }
        if (380 * 2 > maxBPHeight) {
          maxScaleY = maxBPHeight / (380 * 2) * 2
        }
        this.scale = Math.min(maxScaleX, maxScaleY)
        this.overflowing = (blueprintRect.width + this.blueprintOffset * this.scale - 1) > overflowRect.width
      }
      requestAnimationFrame(this.updateScale)
    },
    cleanupAnimation () {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
    },
    activateSpaghetti (widget, group) {
      this.$emit('spaghettiRequest', this.makeGroupItemSlug(widget, group))
    },
    deactivateSpaghetti (widget, group) {
      this.$emit('spaghettiUnrequest')
    },
    makeGroupItemSlug
  },
  computed: {
    previewsStyle () {
      return {
        transform: `scale(${this.scale})`,
        transformOrigin: `0 0`
      }
    },
    dimmed () {
      return this.widgetGroups.map(({ slug }) => {
        return this.spaghettiEnabledFor.indexOf(`${slug}-`) !== -1
      }).filter(hit => hit).length > 0
    },
    blueprintStyle () {
      return {
        ...(this.blueprintCrop || this.blueprintOffset) ? {
          width: `${this.blueprintCrop * this.scale}px`
        } : {}
      }
    },
    offsetStyle () {
      return {
        ...this.blueprintOffset ? {
          transform: `translateX(${this.blueprintOffset * this.scale}px)`
        } : {}
      }
    },
    overflowStyle () {
      return {
        ...this.scale < 2 ? {
          height: `${380 * this.scale}px`,
        } : {}
      }
    }
  },
  mounted () {
    this.updateScale()
  },
  beforeDestroy () {
    this.cleanupAnimation()
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/breakpoints.scss";
@import "~/assets/sass/colors.scss";

.blueprint {
  position: relative;
  margin-right: 60px;

  .overflow {
    overflow: hidden;
    height: calc(380px * 2);
    max-height: calc(100vh - 120px);
  }

  .overflow-indicator {
    width: 20px;
    top: 2px;
    bottom: 2px;
    right: -10px;
    position: absolute;
    background-color: #fff;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url('~assets/images/panel-overflow.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      transition: opacity .2s ease;
    }

    &.left {
      left: -10px;
      right: auto;
    }

    &.dimmed {
      &::after {
        opacity: .3;
      }
    }
  }

  .blueprint-img {
    flex-shrink: 0;
    display: block;
    transition: opacity .2s ease;
    height: 100%;

    &.dimmed {
      opacity: .3;
    }
  }

  .previews {
    position: absolute;
    left: 0;
    top: 0;

    .preview {
      position: absolute;
      left: 0;
      top: 0;
      // border: 2px solid $color-zzc;
      // box-sizing: content-box;
      opacity: 0;
      cursor: pointer;
      transform-origin: 0 0;

      &:focus {
        outline: 0;
      }

      &.active {
        opacity: 1;
        box-shadow: 0 0 0 2px $color-zzc;
      }
    }
  }
}
</style>
