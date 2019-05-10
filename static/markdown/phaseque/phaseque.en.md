<!---
start: simple
-->

# Phaseque

<p align='center' class='md-only'>
  <img src='phaseque.svg'/>
</p>

> Phase-Driven Sequencer

Phaseque is a sequencer which initially was developed with two ideas in mind - solve some problems related to classical sequencers and create something new. For example, it's a common situation when composer realizes that start of a sequence is not at 1st step of sequencer - in such case Phaseque allows to easily shift pattern to desired position. Apart from that it provide many onther interesting thing unusual for common sequencers.

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

>This documentation is still under construction. Please, if you have any questions, feel free to create an Issue about it at [main repository of ZZC](https://github.com/zezic/ZZC/issues/new), this way you can help other people with similar questions. Also feel free to send a email to [zezic51@yandex.ru](mailto:zezic51@yandex.ru)

<!---
end: simple
-->
