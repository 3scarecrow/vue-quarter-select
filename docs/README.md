---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .sw__wrapper { width: 350px; margin-top: 16px !important; }
</style>

# Vue quarter select

一个基于 Vue.js 的季度选择器

<client-only>

## Example

### 基本使用

<demo-box>

通过v-model绑定选择后的值

<demo-default slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/default.vue

</div>

</demo-box>

### 绑定值格式

<demo-box>

value-format可以指定绑定值的格式

<demo-value-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/value-format.vue

</div>

</demo-box>

### 禁用选项

<demo-box>

设置min-date属性： 小于min-date日期对应的季度将禁用（不可选择）<br/>
设置max-date属性： 大于max-date日期对应的季度将禁用（不可选择）

<demo-disabled slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/disabled.vue

</div>

</demo-box>

### 日期格式

<demo-box>

<h4>使用format指定输入框的格式</h4>

format函数有三个参数 year, quarter, date<br/>
**year**: 选择的年份，例: 2019<br/>
**quarter**: 选择的季度，值为 [1,2,3,4] 之一<br/>
**date**: 选择季度对应的日期，例：[ "2019-01-01", "2019-03-31" ]

<demo-format slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/format.vue

</div>

</demo-box>

### 下拉选项文本

<demo-box>

select-items可以自定义下拉选项文本

<demo-select-items slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/select-items.vue

</div>

</demo-box>

</client-only>

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | string/array | `[]` | 绑定值 |
| value-format | string | `yyyy-MM-dd` | 绑定值的格式 |
| placeholder | string | `''` | placeholder |
| minDate | string/date | `undefined` | 小于最小日期的季度将禁用 |
| maxDate | string/date | `undefined` | 大于最大日期的季度将禁用 |
| format | function(year,quarter,date) | - | 使用format指定输入框的格式 |
| select-items | Array | - | 自定义下拉选项文本 |
| dropdown-width | number/string | `undefined` | 下拉弹出元素宽度，若不设置则与触发元素相同宽度。 |
| dropdown-z-index | number | `1000` | 下拉弹出元素的 z-index 值 |
| disabled | boolean | `false` | 是否禁用 |
| size | string | `''` | 控件尺寸，可选值 `medium/small/mini` |
| clearable | boolean | `false` | 是否启用清空所有选项功能 |
| popper-class | string | `''` | 下拉弹出元素 class 名 |

## Events

| Event | Description | Params |
| ----- | ----------- | ------ |
| clear | 点击清空时触发 | - |
