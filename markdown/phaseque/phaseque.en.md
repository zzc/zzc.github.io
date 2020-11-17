<!---
start: simple
-->

# Phaseque

<p align='center' class='md-only'>
  <img src='phaseque.svg'/>
</p>

> Phase-Driven Sequencer

Phaseque is a sequencer initially developed with two ideas in mind - solve some problems related to classical sequencers and create something new. For example, it's a common situation when composer realizes that start of a sequence is not at 1st step of sequencer - in such case Phaseque allows to easily shift pattern to desired position. Apart from that it provide many onther interesting things which are unusual for common sequencers.

## Quickstart

To let Phaseque play it should be fed with one of three variants of transport information - Classic Clock (triggers or pulse), Phase (sawtooth in range of 0V - 10V) or V/BPS. If [CLTCH](#controls-cltch) is active it starts to drive sequence with active transport info:

<img align='middle' src='phaseque-quickstart.svg'/>

When clutch is enabled the [GATE](#outputs-gate) become active. All other outputs with sequence info works regardless of clutch state, including [V](#outputs-v) which is analogue of pitch from all other sequencers:

<img align='middle' src='phaseque-output.svg'/>

## Drivetrain Section

<img align='middle' src='phaseque-transmission.svg'/>

As said before, Phaseque supports different types of transport information, but its main feature is support of inter-beat positions.

### Classic Pulse Clock

<img align='left' src='phaseque-clock.svg'/>

In this mode Phaseque tries to detect tempo of triggers/pulse sent to the [CLOCK](#inputs-clock) input, but only if [Auto Sync](#controls-auto-sync) is enabled. In case it's disabled, Phaseque will play segment of a pattern with pre-selected tempo and then it will wait for the next pulse. This tempo can be adjusted with [knob](#controls-bpm) and can be overridden by [V/BPS](#inputs-vbps) input.

### V/BPS

[V/BPS](#inputs-vbps) input which was mentioned above also can be used to turn sequencer in motion. V/BPS is an absolute value, it means "volts per beat per second", e.g. 2 volts = 2 beats per second = 120 beats per minute. You can read a bit more about this idea in [Clock module documentation](./clock).

### Phase Clock

Phase clock is a most demonstrative transport mode of Phaseque. Range of [PHASE](#inputs-phase) input is from 0V to 10V. For usual tasks a sawtooth waveform can be used, every cycle of it will make sequencer to move trough another segment of its pattern. These segments are rendered at top of main display:

<img align='middle' src='phaseque-phases.svg'/>

#### Absolute Mode

When using phase input the absolute phase mode becomes useful for direct control over position in sequence. It can be turned on by [ABS](#controls-abs) button. In this mode only one phase period is scaled over the all pattern and phase-wrap detection mechanics are disabled, so you can directly control where pattern playhead is located by changing value in [PHASE](#inputs-phase) input. In abosolute mode it's even possible to make Phaseque work as a sawtooth VCO processor or function generator.

### Pattern Resolution

Each of 32 patterns inside Phaseque has its own resolution (RESO), which is displayed at [reso display](#indicators-resolution) and can be adjusted with [encoder](#controls-resolution). Pattern resolution sets the amount of phase cycles required to play it from start to end. For example, it allows to create complex rhythmical patterns by using combinations of several patterns with different resolutions and allows to change the speed of sequencer without changing the speed of main clock.

### Clutch and Reset

The incoming transport and pattern playback are not hard-coupled in Phaseque, its possible to disable [CLTCH](#controls-clutch) and pause pattern playback. Also [GATE](#outputs-gate) is disabled when there is no clutch. The [RESET](#controls-reset) button resets phase to starting position which can be adjusted with the [MANUAL](#controls-manual) encoder.

## Pattern grid navigation

<img align='middle' src='phaseque-pattern-grid-navigation.svg'/>

Phaseque has memory of 32 patterns and many ways to switch and detect switches between these patterns. On the grid the non-empty patterns are having slight highlighting, current pattern highlighted stronger and the next *planned* pattern has bright stroke around its number (we will talk about *planned* patterns later).

On the left from pattern grid the abosolute navigation section is located, at the bottom are inputs for relative navigation and on the right are outputs with information about pattern playback progress.

### Absolute navigation

<img align='middle' src='phaseque-pattern-grid-absolute-navigation.svg'/>

The [V/12P](#inputs-v12p) input works similar to common V/OCT inputs but difference is that instead of musical notes there are pattern numbers. Each 1/12 of Volt equals 1 pattern. An impulse sent to the [GOTO](#inputs-goto) input will make sequencer switch to the pattern number which corresponds to voltage on [V/12P](#inputs-v12p) input.

>When [V/12P](#inputs-v12p) input is not connected the sequencer will always switch to the 1st pattern when receiving pulse on [GOTO](#inputs-goto) input.

Following these absolute navigation mechanics there are also the [WENT](#outputs-went) and [V/12P](#outputs-v12p) outputs which are signalling about pattern switching.

>By using abosolute navigation inputs and outputs it's possible to connect multiple Phaseque instances with each other and sync their pattern navigation.

### Relative navigation

<img align='middle' src='phaseque-pattern-grid-relative-navigation.svg'/>

All the relative navigation inputs are switching only between the non-empty patterns, e.g. ignoring the patterns without any changes made to them. The only exception is [SEQ](#inputs-seq) input.

The [PREV](#inputs-prev) and [NEXT](#inputs-next) inputs will navigate to the higher or lower number of pattern. If there is no non-empty pattern in the desired direction they will go around.

The [←](#inputs-left), [↓](#inputs-down), [↑](#inputs-up), [→](#inputs-right) are inputs for 2D navigation. Like the two inputs mentioned above they switch only to the nearest non-empty pattern in the corresponding direction. The area in which these inputs operate is divided into 2 squares and the right square is really an upper continuation of left square, so it's a 4x8 rectangle. The easiest way to get familiar with those controls is to fill all the patterns with some sequences (right click on Phaseque -> "Randomize All Patterns") and try sending the pulses to each of them (one by one).

The [SEQ](#inputs-seq) input is for going to the *planned* pattern. Each pattern in the grid can have its successor, e.g. the pattern which will follow it when sequencer receives pulse on the [SEQ](#inputs-seq) input. The *planned* pattern can be choosen by right-clicking on the grid.

[RND](#inputs-rnd) - switch to random non-empty pattern.

[WAIT](#controls-wait) - the pattern navigation block. Useful to stop the sequencer walking over the patterns to eliminate unwanted corruption of them when editing the current pattern.

### Navigation feedback

<img align='middle' src='phaseque-pattern-grid-navigation-info.svg'/>

Phaseque gives back an information about current pattern playback.
* It gives a whole-pattern phase on the [PHASE](#outputs-pattern-phase) output
* It generates impulses on the [END](#outputs-end) and [START](#outputs-start) outputs when pattern playback wraps around over the starting or ending edge of a pattern. The [WRAP](#outputs-wrap) output will generate impulse for wraps in both forward and backward directions.

## Pattern transformation

<img align='middle' src='phaseque-pattern-transformation.svg'/>

Phaseque offers a number of destructive and non-destructive pattern transformation actions.

The [SHIFT](#controls-global-shift) and [LEN](#controls-global-len) controls allow to dynamically adjust shift and length of steps with ability to control both over CV. Shift is adjustable with knob in range of +/- 1/8 of length of a pattern and additionally in the same range with corresponding CV input. Length can be increased up to 2 times with the [LEN](#controls-global-len) knob and additionally up to 2 times with its CV input.

The [QNT](#controls-pattern-qnt) and [LEN](#controls-pattern-len) buttons are for quantization of step positions and lengths. Quantization is done with snapping to 1/16 of pattern length.

The [REV](#controls-pattern-rev) and [FLIP](#controls-pattern-flip) buttons will reverse pattern horizontally (in time) or flip it vertically (in pitch).

The [SHIFT](#controls-pattern-shift) block is for personal fine-tuned shifting of a pattern. This parameter is stored with a pattern so each pattern can have its own fine shift.

The [GATE](#controls-global-gate) button makes the gates work contra-versa from their actual states. Also there is a [GATE](#inputs-global-gate) input which allow to invert the button's state.

The [X CRV](#inputs-global-x-crv) and [X PWR](#inputs-global-x-pwr) inputs are for global adjustments of curvature and power parameters used for expression curves.

## Pattern mutations

<img align='middle' src='phaseque-pattern-mutation.svg'/>

One of the unique and interesting features of Phaseque is pattern mutation. It gradually changes all the step parameters in current pattern following some vector. The vectors can gradually change with each mutation so mutation direction is not constant. The original states of step parameters are kept unchanged and it's possible to decrease mutation factor and get original sequence back to it's initial state.

The [MUTA](#controls-pattern-muta) knob smoothly adjusts mutation while [-](#controls-pattern-muta-dec) and [+](#controls-pattern-muta-inc) inputs allows for steppy adjustments controlled by external impulses. The [-](#controls-pattern-muta-dec) input has special feature for negative impulses - it resets current mutation to zero.

Both [-](#controls-pattern-muta-dec) and [+](#controls-pattern-muta-inc) inputs are polyphonic and when receiving a polyphonic signal they will mutate corresponding steps.

## Main outputs and polyphony

<img align='middle' src='phaseque-output.svg'/>

The main outputs of sequencer can be used in 3 different modes:
* Monophonic
* 8-Voice Polyphonic
* 16-Voice Polyphonic

When used with 8-Voice Polyphonic mode each step of a pattern will take its own channel from 1 to 8.
When used with 16-Voice Polyphonic mode the 1-8 channels are used for original step parameters (without mutation applied) and 9-16 channels will contain mutated values.

Aside from the usual [GATE](#outputs-gate) and [V](#outputs-v) Phaseque has some extra parameters on its outputs such as:
* [SHIFT](#outputs-shift) - represents a shift of a step relative to its base position in a pattern in range of +/- 1/8 of pattern length which equals to +/- 5V of output voltage
* [LEN](#outputs-shift) - similar to the [SHIFT](#outputs-shift) output it represents the difference of current step length from its default length which is an 1/8 of pattern length
* [EXPR Curve](#outputs-expr-curve) and [EXPR Curvature](#outputs-expr-curvature) - a pair of outputs, first of which outputs the expression curve itself and second used as an indicator of it's curvature polarity
* [PHASE](#outputs-phase) - a phase of curren step in range of 0-10V

## Jumping between steps

<img align='middle' src='phaseque-jumps.svg'/>

The row of [JMP](#inputs-jumps) inputs allow to immediately jump to corresponding step. The [RND](#inputs-rnd-jmp) input will make sequencer jump to random step. Also each of the steps has its own [GATE](#outputs-gates) output. The combination of outputs and inputs mentioned here allows to create complex or chaotic sequention logic when using various logic modules such as [Bernoulli Gate](https://mutable-instruments.net/modules/branches/).

<!---
end: simple
-->

<!---
start: affixing
affixed: blueprint
blueprint: phaseque-blueprint.svg
preview: phaseque.svg
blueprint-offset: 0
blueprint-crop: 335
-->

## Transport section

<!---
start: legend
-->

<!---
start: legend-group
slug: inputs
-->

### Inputs

* <!---
  x: 13
  y: 50
  slug: clock
  type: labeled-socket
  -->
  <a name="inputs-clock" href='#inputs-clock'>Clock</a> - external clock source impulses

* <!---
  x: 48
  y: 50
  slug: vbps
  type: labeled-socket
  -->
  <a name="inputs-vbps" href='#inputs-vbps'>V/BPS</a> - external clock tempo in [V/BPS](/en/clock-manipulation/clock#what-is-vbps) format

* <!---
  x: 83
  y: 50
  slug: phase
  type: labeled-socket
  -->
  <a name="inputs-phase" href='#inputs-phase'>Phase</a> - phase of external clock source

* <!---
  x: 188
  y: 81
  slug: cltch
  type: simple-socket
  -->
  <a name="inputs-cltch" href='#inputs-cltch'>Clutch</a> - clutch of sequencer with external clock source

* <!---
  x: 224
  y: 81
  slug: reset
  type: simple-socket
  -->
  <a name="inputs-reset" href='#inputs-reset'>Reset</a> - sequencer phase reset

<!---
end: legend-group
-->

<!---
start: legend-group
slug: controls
-->

### Управление

* <!---
  x: 15
  y: 82
  slug: tempo-tracking
  type: simple-led-switch
  -->
  <a name="controls-tempo-tracking" href='#controls-tempo-tracking'>Tempo Tracking</a> - a tempo-tracking of external clock source. When using Phaseque with external traditional pulse-based clock source it will try to match its inter-beat movement speed with the tempo of the clock instead of matching it with the internal [BPM](#controls-bpm) parameter

* <!---
  x: 49
  y: 81
  slug: bpm
  type: knob-25
  -->
  <a name="controls-bpm" href='#controls-bpm'>BPM</a> - target tempo of inter-beat movement speed

* <!---
  x: 120
  y: 51
  slug: abs-mode
  type: simple-led-switch
  -->
  <a name="controls-abs-mode" href='#controls-abs-mode'>Absolute Mode</a> - the abosolute phase mode which makes [Phase](#inputs-phase) input to directly set a phase of pattern playback (taking phase shift into account)

* <!---
  x: 154
  y: 81
  slug: resolution
  type: knob-25
  -->
  <a name="controls-resolution" href='#controls-resolution'>Resolution</a> - a pattern resolution. Sets a number of phase cycles required to play pattern from start to end. Each pattern has its own resolution setting.

* <!---
  x: 190
  y: 51
  slug: clutch
  type: labeled-led-switch
  -->
  <a name="controls-clutch" href='#controls-clutch'>Clutch</a> - clutch of sequencer with external clock source

* <!---
  x: 226
  y: 51
  slug: reset
  type: labeled-led-switch
  -->
  <a name="controls-reset" href='#controls-reset'>Reset</a> - sequencer phase reset

* <!---
  x: 258
  y: 49
  slug: phase
  type: big-cross-knob
  -->
  <a name="controls-phase" href='#controls-phase'>Manual</a> - manual phase shift

<!---
end: legend-group
-->

<!---
start: legend-group
slug: indicators
-->

### Indicators

* <!---
  x: 84
  y: 83
  slug: bpm
  type: bpm-display
  -->
  <a name="indicators-bpm" href='#indicators-bpm'>BPM</a> - current target tempo used for inter-beat movement and detected by the [Tempo Tracking](#controls-tempo-tracking) function. This display is not used when working in external [Phase](#inputs-phase) mode.

* <!---
  x: 152
  y: 52
  slug: resolution
  type: 2-register-display
  -->
  <a name="indicators-resolution" href='#indicators-resolution'>Resolution</a> - a resolution of an active pattern

<!---
end: legend-group
-->

<!---
start: legend-group
slug: inputs
-->

## Pattern grid navigation section

### Inputs

* <!---
  x: 14
  y: 126
  slug: goto
  type: labeled-socket
  -->
  <a name="inputs-goto" href='#inputs-goto'>Go To</a> - go to pattern with a number corresponding to a voltage on [V/12P](#inputs-v12p) input

* <!---
  x: 49
  y: 126
  slug: v12p
  type: labeled-socket
  -->
  <a name="inputs-v12p" href='#inputs-v12p'>V/12P</a> - a target pattern number (1V per 12 patterns is used like 1V is used for 12 notes in an octave)

* <!---
  x: 14
  y: 220
  slug: prev
  type: labeled-socket
  -->
  <a name="inputs-prev" href='#inputs-prev'>Previous</a> - go to the previous (by number) non-empty pattern

* <!---
  x: 49
  y: 220
  slug: next
  type: labeled-socket
  -->
  <a name="inputs-next" href='#inputs-next'>Next</a> - go to the next (by number) non-empty pattern

* <!---
  x: 84
  y: 220
  slug: left
  type: labeled-socket
  -->
  <a name="inputs-left" href='#inputs-left'>Left</a> - go to non-empty pattern in left direction

* <!---
  x: 119
  y: 220
  slug: down
  type: labeled-socket
  -->
  <a name="inputs-down" href='#inputs-down'>Down</a> - go to non-empty pattern in down direction

* <!---
  x: 154
  y: 220
  slug: up
  type: labeled-socket
  -->
  <a name="inputs-up" href='#inputs-up'>Up</a> - go to non-empty pattern in up direction

* <!---
  x: 189
  y: 220
  slug: right
  type: labeled-socket
  -->
  <a name="inputs-right" href='#inputs-right'>Right</a> - go to non-empty pattern in right direction

* <!---
  x: 224
  y: 220
  slug: seq
  type: labeled-socket
  -->
  <a name="inputs-seq" href='#inputs-seq'>SEQ</a> - go to the next *planned* pattern

* <!---
  x: 259
  y: 220
  slug: rnd
  type: labeled-socket
  -->
  <a name="inputs-rnd" href='#inputs-rnd'>RND</a> - go to a random non-empty pattern

<!---
end: legend-group
-->

<!---
start: legend-group
slug: outputs
-->

### Outputs

* <!---
  x: 14
  y: 174
  slug: went
  type: labeled-socket
  -->
  <a name="outputs-went" href='#outputs-went'>Went</a> - outputs a pulse when pattern switches to another pattern

* <!---
  x: 49
  y: 174
  slug: v12p
  type: labeled-socket
  -->
  <a name="outputs-v12p" href='#outputs-v12p'>V/12P</a> - a number of a pattern to which sequencer has switched (1V per 12 patterns is used like 1V is used for 12 notes in an octave)

* <!---
  x: 259
  y: 126
  slug: pattern-phase
  type: labeled-socket
  -->
  <a name="outputs-pattern-phase" href='#outputs-pattern-phase'>Phase</a> - current pattern playback phase

* <!---
  x: 294
  y: 126
  slug: wrap
  type: labeled-socket
  -->
  <a name="outputs-wrap" href='#outputs-wrap'>Wrap</a> - outputs pulse when playback reach end or start of a pattern

* <!---
  x: 259
  y: 174
  slug: start
  type: labeled-socket
  -->
  <a name="outputs-start" href='#outputs-start'>Start</a> - outputs pulse when playback wraps to another side of a pattern while playing in forward direction

* <!---
  x: 294
  y: 174
  slug: end
  type: labeled-socket
  -->
  <a name="outputs-end" href='#outputs-end'>End</a> - outputs pulse when playback wraps to another side of a pattern while playing in backward direction

<!---
end: legend-group
-->

<!---
start: legend-group
slug: controls
-->

### Controls

* <!---
  x: 84
  y: 117
  slug: patterns-grid
  type: custom-rect
  w: 165
  h: 85
  -->
  <a name="controls-patterns-grid" href='#controls-patterns-grid'>Patterns Grid</a> - the patterns grid

* <!---
  x: 295
  y: 221
  slug: wait
  type: labeled-led-switch
  -->
  <a name="controls-wait" href='#controls-wait'>Wait</a> - temporary blocks CV-controlled pattern switching and allows operator to edit current pattern safely

<!---
end: legend-group
-->

<!---
start: legend-group
slug: inputs
-->

## Pattern transformation section

### Inputs

* <!---
  x: 14
  y: 320
  slug: shift
  type: labeled-socket
  -->
  <a name="inputs-shift" href='#inputs-shift'>Shift</a> - global pattern shift

* <!---
  x: 49
  y: 320
  slug: len
  type: labeled-socket
  -->
  <a name="inputs-len" href='#inputs-len'>LEN</a> - steps length attenuation

* <!---
  x: 119
  y: 320
  slug: muta-dec
  type: labeled-socket
  -->
  <a name="inputs-muta-dec" href='#inputs-muta-dec'>MUTA -</a> - mutation decrease (negative pulse will reset mutation to zero)

* <!---
  x: 189
  y: 320
  slug: muta-inc
  type: labeled-socket
  -->
  <a name="inputs-muta-inc" href='#inputs-muta-inc'>MUTA +</a> - mutation increase

* <!---
  x: 259
  y: 320
  slug: gate
  type: labeled-socket
  -->
  <a name="inputs-gate" href='#inputs-gate'>Gate</a> - inversion of the step gates effect

* <!---
  x: 294
  y: 277
  slug: expr-power
  type: labeled-socket
  -->
  <a name="inputs-expr-power" href='#inputs-expr-power'>X PWR</a> - attenuates a power parameter which is used to build the expression curves

* <!---
  x: 294
  y: 320
  slug: expr-curve
  type: labeled-socket
  -->
  <a name="inputs-expr-curve" href='#inputs-expr-curve'>X CRV</a> - attenuates polarity of a curvature of expression curves

<!---
end: legend-group
-->

<!---
start: legend-group
slug: controls
-->

### Controls

* <!---
  x: 14
  y: 277
  slug: shift
  type: knob-25
  -->
  <a name="controls-shift" href='#controls-shift'>Shift</a> - global pattern shift

* <!---
  x: 49
  y: 277
  slug: len
  type: knob-25
  -->
  <a name="controls-len" href='#controls-len'>LEN</a> - steps length attenuation

* <!---
  x: 85
  y: 278
  slug: qnt
  type: labeled-led-switch
  -->
  <a name="controls-qnt" href='#controls-qnt'>QNT</a> - quantization of step positions

* <!---
  x: 120
  y: 278
  slug: shift-left
  type: labeled-led-switch
  -->
  <a name="controls-shift-left" href='#controls-shift-left'>Shift ←</a> - shift pattern by 1/8 to the left

* <!---
  x: 190
  y: 278
  slug: shift-right
  type: labeled-led-switch
  -->
  <a name="controls-shift-right" href='#controls-shift-right'>Shift →</a> - shift pattern by 1/8 to the right

* <!---
  x: 153
  y: 277
  slug: pattern-shift
  type: knob-25
  -->
  <a name="controls-pattern-shift" href='#controls-pattern-shift'>Shift</a> - personal pattern shift (smooth)

* <!---
  x: 225
  y: 278
  slug: len-qnt
  type: labeled-led-switch
  -->
  <a name="controls-len-qnt" href='#controls-len-qnt'>LEN</a> - quantization of step lengths

* <!---
  x: 260
  y: 278
  slug: gate
  type: labeled-led-switch
  -->
  <a name="controls-gate" href='#controls-gate'>Gate</a> - inversion of the step gates effect

* <!---
  x: 85
  y: 320
  slug: rev
  type: labeled-led-switch
  -->
  <a name="controls-rev" href='#controls-rev'>REV</a> - reverse pattern (horizontally)

* <!---
  x: 153
  y: 318
  slug: muta
  type: knob-27
  -->
  <a name="controls-muta" href='#controls-muta'>MUTA</a> - pattern mutation

* <!---
  x: 225
  y: 320
  slug: flip
  type: labeled-led-switch
  -->
  <a name="controls-flip" href='#controls-flip'>Flip</a> - flip pattern (vertically)

<!---
end: legend-group
-->

<!---
end: legend
-->

<!---
end: affixing
-->

<!---
start: affixing
affixed: blueprint
blueprint: phaseque-blueprint.svg
preview: phaseque.svg
blueprint-offset: -317
blueprint-crop: 265
-->

## Main section

<!---
start: legend
-->

<!---
start: legend-group
slug: outputs
-->

### Outputs

* <!---
  x: 335
  y: 320
  slug: gate
  type: simple-socket
  -->
  <a name="outputs-gate" href='#outputs-gate'>Gate</a> - outputs +10V for active steps

* <!---
  x: 369
  y: 320
  slug: value
  type: simple-socket
  -->
  <a name="outputs-value" href='#outputs-value'>V (Value)</a> - outputs a value of current step (from -2V to +2V) if it's active, keeps its last value when there is no active steps

* <!---
  x: 403
  y: 320
  slug: shift
  type: simple-socket
  -->
  <a name="outputs-shift" href='#outputs-shift'>Shift</a> - tells how much an active step is shifted from its base position

* <!---
  x: 437
  y: 320
  slug: len
  type: simple-socket
  -->
  <a name="outputs-len" href='#outputs-len'>LEN</a> - tells how longer is step relative to its default length (which is 1/8 of a pattern)

* <!---
  x: 471
  y: 320
  slug: expr-curve
  type: simple-socket
  -->
  <a name="outputs-expr-curve" href='#outputs-expr-curve'>EXPR Curve</a> - current step's expression curve output

* <!---
  x: 505
  y: 320
  slug: expr-curvature
  type: simple-socket
  -->
  <a name="outputs-expr-curvature" href='#outputs-expr-curvature'>EXPR Curvature</a> - current step's expression curve curvature polarity

* <!---
  x: 539
  y: 320
  slug: phase
  type: simple-socket
  -->
  <a name="outputs-phase" href='#outputs-phase'>Phase</a> - a phase of an active step

<!---
end: legend-group
-->

<!---
start: legend-group
slug: indicators
-->

### Indicators

* <!---
  x: 333
  y: 50
  slug: pattern-resolution
  type: custom-rect
  w: 233
  h: 50
  -->
  <a name="indicators-pattern-resolution" href='#indicators-pattern-resolution'>Pattern Resolution</a> - a visual representation of pattern phases. Active phase is highlighted with bright color.

* <!---
  x: 333
  y: 100
  slug: pattern-steps
  type: custom-rect
  w: 233
  h: 133
  -->
  <a name="indicators-pattern-steps" href='#indicators-pattern-steps'>Pattern Steps</a> - positions, lenghts and values of steps of current pattern. Disabled steps are drawn with dusk color and active steps are brighter. Step mutations are displayed with blue color.

* <!---
  x: 333
  y: 233
  slug: step-expressions
  type: custom-rect
  w: 233
  h: 50
  -->
  <a name="indicators-step-expressions" href='#indicators-step-expressions'>Expression Curves</a> - shape of expression curves. Like with [pattern steps](#indicators-pattern-steps) a blue color is used to displayed mutated curves.

<!---
end: legend-group
-->

<!---
end: legend
-->

<!---
end: affixing
-->

<!---
start: affixing
affixed: blueprint
blueprint: phaseque-blueprint.svg
preview: phaseque.svg
blueprint-offset: -562
blueprint-crop: 338
-->

## Pattern parameter adjustments and jumps

<!---
start: legend
-->

<!---
start: legend-group
slug: controls
-->

### Controls

* <!---
  x: 610
  y: 44
  slug: values
  type: custom-rect
  w: 282
  h: 37
  -->
  <a name="controls-values" href='#controls-values'>V (Value)</a> - step values in range of -2V to +2V

* <!---
  x: 610
  y: 78
  slug: gates
  type: custom-rect
  w: 282
  h: 32
  -->
  <a name="controls-gates" href='#controls-gates'>Gate</a> - step gates

* <!---
  x: 610
  y: 108
  slug: shifts
  type: custom-rect
  w: 282
  h: 32
  -->
  <a name="controls-shifts" href='#controls-shifts'>Shift</a> - step shifts

* <!---
  x: 610
  y: 139
  slug: lengths
  type: custom-rect
  w: 282
  h: 32
  -->
  <a name="controls-lengths" href='#controls-lengths'>LEN</a> - adjustment of step lengths

* <!---
  x: 610
  y: 172
  slug: expr-ins
  type: custom-rect
  w: 282
  h: 32
  -->
  <a name="controls-expr-ins" href='#controls-expr-ins'>In</a> - a start value of expression curve

* <!---
  x: 610
  y: 203
  slug: expr-curves
  type: custom-rect
  w: 282
  h: 35
  -->
  <a name="controls-expr-curves" href='#controls-expr-curves'>EXPR</a> - expression curve shape adjustments

* <!---
  x: 610
  y: 236
  slug: expr-outs
  type: custom-rect
  w: 282
  h: 32
  -->
  <a name="controls-expr-outs" href='#controls-expr-outs'>Out</a> - an end value of expression curve

<!---
end: legend-group
-->

<!---
start: legend-group
slug: inputs
-->

### Inputs

* <!---
  x: 610
  y: 267
  slug: jumps
  type: custom-rect
  w: 282
  h: 33
  -->
  <a name="inputs-jumps" href='#inputs-jumps'>JMP</a> - jump to the start of a corresponding step

* <!---
  x: 579
  y: 319
  slug: rnd-jmp
  type: labeled-socket
  -->
  <a name="inputs-rnd-jmp" href='#inputs-rnd-jmp'>RND</a> - jump to random step

<!---
end: legend-group
-->

<!---
start: legend-group
slug: outputs
-->

### Outputs

* <!---
  x: 610
  y: 314
  slug: gates
  type: custom-rect
  w: 281
  h: 37
  -->
  <a name="outputs-gates" href='#outputs-gates'>Gates</a> - personal step gates

<!---
end: legend-group
-->

<!---
end: legend
-->

<!---
end: affixing
-->

<!---
start: simple
-->

<hr></hr>

<h2 id='changelog'>Changelog</h2>

### v1.1.3 (2020-11-17)

##### New features:

  * Exponential external CV mode (V/OCT), Phaseque now can be used as an oscillator
  * BPM snapping for external CV
  * Internal standalone clock

##### Improvements:

  * ~20% less CPU hungry

> The next times were measured on AMD FX-8350:
>
> | Mode      |  v1.1.2   |  v1.1.3   |  v1.1.3 <small>(No outputs)</small>   |
> |:----------|:----------|:----------|:--------------------------------------|
> | Mono      |  ~0.38μs  |  ~0.30μs  |  ~0.20μs                              |
> | Poly-8    |  ~0.52μs  |  ~0.39μs  |  ~0.23μs                              |
> | Unison-16 |  ~0.73μ   |  ~0.53μs  |  ~0.25μs                              |

##### Bugfixes:

  * Potential fix for crashes on macOS hosts

<!---
end: simple
-->
