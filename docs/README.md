---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .sw__wrapper { width: 350px; margin-top: 16px !important; }
</style>

<client-only>

# Vue quarter select <Badge text="v2.0"/>

一个基于 Vue.js 的季度选择器


## Example

### 基础用法

<demo-box>

通过 `v-model` 绑定选择后的值

<v2-default slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/default.vue

</div>

</demo-box>

### 绑定值格式

<demo-box>

设置 `value-format` 可以指定绑定值的格式

<v2-value-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/value-format.vue

</div>

</demo-box>

### 多选模式

<demo-box>

设置 `multiple` 属性即可启用多选

<v2-multiple slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/multiple.vue

</div>

</demo-box>

### 禁用状态

<demo-box>

禁用整个选择器组件

设置 `disabled` 属性，则整个选择器不可用。

<v2-disabled slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/disabled.vue

</div>

</demo-box>

### 禁用季度

<demo-box>

通过 `disabled-date` 函数来实现季度禁用<br/>
一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。

<v2-disabled-date slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/disabled-date.vue

</div>

</demo-box>

### 输入框文本格式

<demo-box>

`format` 字符串或函数指定输入框的格式

字符类型：`yyyy Qq`

函数类型：```(year, quarter) => `${year} Q${quarter}` ```
| 参数 | 类型 | 说明 |
| ---- | ---- | ---  |
| year | Number | 年份 |
| quarter | Number | 季度 |

<v2-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/format.vue

</div>

</demo-box>

### 选项垂直排列

<demo-box>

只需要设置 `direction` 属性为 `vertical` 即可。

<v2-direction slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/direction.vue

</div>

</demo-box>

### 下拉框选项模板

<demo-box>

设置 `option-format` 可以自定义选项模板

<v2-option-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/option-format.vue

</div>

</demo-box>

### 默认显示季度

<demo-box>

设置 `default-value` 可显示默认季度

<v2-default-value slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/default-value.vue

</div>

</demo-box>

### 只使用面板

<demo-box>

只是用选择面板，不显示输入框。

<v2-panel slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/panel.vue

</div>

</demo-box>

### slot

<demo-box>

通过 `slot` 自定义输入框首部和尾部图标，以及下拉选项或者面板左右图标

<v2-slot slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/v2/slot.vue

</div>

</demo-box>

</client-only>

## Select Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| placeholder | string | `请选择季度` | 占位文本 |
| clearable | boolean | `true` | 是否可清空 |
| size | string | - | 控件尺寸，可选值 `large，medium，small`|
| disabled | boolean | false | 是否禁用控件|
| limit | number | 0 | 限制显示的选项数量，必须大于 0 。其余选项会显示为 limit-text 所返回的内容|
| limit-text | function |	```count => `+${count}` ``` | 当选项超过限制时显示文本的处理方法，参数为剩余选项数量 |
| append-to-body | boolean | `true` | 下拉弹出元素是否插入于 `<body>` 内 |
| popper-width | number | `undefined` | 下拉弹出元素宽度，若不设置则与触发元素相同度 |
| popper-z-index | number |	`1000`| 下拉弹出元素的 z-index 值 |
| popper-class | string |	- | 下拉弹出元素 class 名 |
| placement | string | `auto` | 下拉弹出位置，可选值 [placement](https://popper.js.org/docs/v2/constructors/#options) |

更多 Props 可参考 [Panel Props](#panel-props)

## Select Methods

| 方法名 | 说明 | 参数 |
| ------- | ---------- | --- |
| clear   | 清空绑定值  | — |
| showPopper | 显示下拉框 | — |
| hidePopper | 显示下拉框 | — |
| togglePopper | 切换下拉框状态 | — |

## Select Events

| 事件名 | 说明 | 参数 |
| ----- | ----------- | ------ |
| change | 选项变化时 | value |
| visible-change | 下拉框出现/隐藏时 | 出现则为 true，隐藏则为 false |
| clear | 点击清空时触发 | — |

## Select Slots

| Name | 参数 | 说明 |
| ----- | ----------- | ------ |
| prefix | - | 控件前置内容 |
| suffix | — | 控件后置内容 |

更多 Slots 可参考 [Panel Slots](#panel-slots)

## Panel Props

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value/v-model | string/array | `[]` | 绑定值 |
| value-format | string | `yyyy-MM-dd` | 绑定值的格式 |
| format | function(year,quarter,date) | - | 使用 format 指定输入框的格式 |
| option-format | function(quarter) | - | 自定义下拉选项文本 |
| default-value | date | - | 默认显示的季度 |

## Panel Methods

| 方法名 | 说明 | 参数 |
| ------- | ---------- | --- |
| increaseYear | 递增年份  | — |
| decreaseYear | 递减年份  | — |
| clear | 清空值  | — |

## Panel Slots

| Name | 参数 | 说明 |
| ----- | ----------- | ------ |
| default | { label, value } | 下拉选项模板 |
| prev-icon | — | 左侧图标 |
| year | year | 年份内容 |
| next-icon | — | 右侧图标 |
