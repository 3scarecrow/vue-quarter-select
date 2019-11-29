---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .sw__wrapper { width: 350px; margin-top: 16px !important; }
</style>

# Vue quarter select

A quarter selector based on Vue.js

<client-only>

## Example

### basic usage

<demo-box>

bind selected value by `v-model`

<demo-default slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/default.vue

</div>

</demo-box>

### value format

<demo-box>

custom binding value format by `value-format`

<demo-value-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/value-format.vue

</div>

</demo-box>

### disabled option

<demo-box>

**With the help of `min-date` and `max-date`, you can disable some option**<br>
min-date: those quarter that less than the `min-date` will be disabled<br/>
max-date: those quarter that more than the `max-date` will be disabled

<demo-disabled slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/disabled.vue

</div>

</demo-box>

### input text format

<demo-box>

<h4>custom input text format by function format </h4>

Function format has three parameter: year, quarter, date<br/>

| paramter | type | description |
| ---- | ---- | ---  |
| year | Number | selected year |
| quarter | Number | selected quarter |
| date | Array | date |

<demo-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/format.vue

</div>

</demo-box>

### dropdown option text

<demo-box>

custom dropdown option text by `dropdown-options`

<demo-dropdown-options slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/dropdown-options.vue

</div>

</demo-box>

### default quarter

<demo-box>

set up default quarter by `default-value`

<demo-default-value slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/default-value.vue

</div>

</demo-box>

### slot

<demo-box>

Slot for custom option template by `slot-scope`

<demo-slot-scope slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/slot-scope.vue

</div>

</demo-box>

</client-only>

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | String/Array | `[]` | binding value |
| value-format | String | `yyyy-MM-dd` | format of binding value |
| minDate | String/Date | `undefined` | those quarter that less than the `min-date` will be disabled |
| maxDate | String/Date | `undefined` | those quarter that more than the `max-date` will be disabled |
| format | Function(year,quarter,date) | - | custom input text format by function format |
| select-items | Array | - | custom dropdown option text by `select-items` |
| default-value | Date | - | set up default quarter by `default-value` |

See [vue-select-wrapper 的Props](https://laomao800.github.io/vue-select-wrapper/zh/#props) for more Props

## Methods

| Methods | Descripion | Parameters |
| ------- | ---------- | ------ |
| clear   | clear binding value  | — |

## Events

| Event | Description | Parameters |
| ----- | ----------- | ------ |
| change | Trigger on value change | (newVal) |
| visible-change | Trigger on dropdown toggle | (visible) true for show, false for hide|
| clear | trigger when emptying  | — |

## Slots

| Name | Props | Description |
| ----- | ----------- | ------ |
| default | { label, value } | Slot for custom option template |
