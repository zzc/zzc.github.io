const widgetRects = {
  'labeled-socket': {
    width: 30,
    height: 43,
    x: -2,
    y: -15,
    radius: '3px'
  },
  'simple-socket': {
    width: 30,
    height: 31,
    x: -2,
    y: -3,
    radius: '3px'
  },
  'labeled-led-switch': {
    width: 28,
    height: 41,
    x: -3,
    y: -16,
    radius: '3px'
  },
  'simple-led-switch': {
    width: 28,
    height: 28,
    x: -3,
    y: -3,
    radius: '3px'
  },
  'big-knob': {
    width: 80,
    height: 80,
    x: -6,
    y: -6,
    radius: '50%'
  },
  'knob-25': {
    width: 36,
    height: 36,
    x: -5,
    y: -6,
    radius: '50%'
  },
  'knob-27': {
    width: 40,
    height: 40,
    x: -6,
    y: -7,
    radius: '50%'
  },
  'bpm-display': {
    width: 64,
    height: 26,
    x: -3,
    y: -3,
    radius: '3px'
  },
  'ratio-display': {
    width: 64,
    height: 26,
    x: -3,
    y: -3,
    radius: '3px'
  },
  '2-register-display': {
    width: 35,
    height: 26,
    x: -3,
    y: -3,
    radius: '3px'
  },
  'medium-led': {
    width: 13,
    height: 13,
    x: -2.5,
    y: -3,
    radius: '50%'
  },
  'cross-knob': {
    width: 50,
    height: 50,
    x: -0,
    y: -0,
    radius: '50%'
  },
  'big-cross-knob': {
    width: 68,
    height: 68,
    x: -3,
    y: -5,
    radius: '50%'
  },
  'display-switch': {
    width: 31,
    height: 26,
    x: -1,
    y: -1,
    radius: '3px'
  },
  'fn-3-display': {
    width: 29,
    height: 20,
    x: 0,
    y: 14,
    radius: '3px'
  }
}

function parseCustomRect (widgetOptions) {
  return {
    width: widgetOptions.w,
    height: widgetOptions.h,
    x: widgetOptions.xd || 0,
    y: widgetOptions.yd || 0,
    radius: widgetOptions.radius || '3px'
  }
}

export { widgetRects, parseCustomRect }
