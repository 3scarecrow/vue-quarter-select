---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .sw__wrapper { width: 350px; margin-top: 16px !important; }
</style>

# Vue quarter select

一个基于 Vue.js 的季度选择器

## Example

<box-wrapper title="基本使用">

<demo-default/>

<div slot="code">

<<< docs/.vuepress/components/demo/default.vue

</div>

</box-wrapper>

<box-wrapper title="使用value-format">

<demo-value-format/>

<div slot="code">

<<< docs/.vuepress/components/demo/value-format.vue

</div>

</box-wrapper>

<box-wrapper title="设置min-date和max-date">

<div slot="des">
设置min-date属性： 小于min-date日期对应的季度将禁用（不可选择）<br/>
设置max-date属性： 大于max-date日期对应的季度将禁用（不可选择）

</div>

<demo-disabled/>

<div slot="code">

<<< docs/.vuepress/components/demo/disabled.vue

</div>

</box-wrapper>

<box-wrapper title="custom-value自定义输入框显示的值">

<div slot="des">

customValue(year, quarter, date)<br/>
1.year: 选择的年份，例： 2019<br/>
2.quarter: 选择的季度，值为[1,2,3,4]之一<br/>
3.date: 选择季度对应的日期，例：[ "2019-01-01", "2019-03-31" ]

</div>

<demo-custom-value/>

<div slot="code">

<<< docs/.vuepress/components/demo/custom-value.vue

</div>

</box-wrapper>

<box-wrapper title="custom-select-items自定义下拉选项文本">

<demo-custom-select-items/>

<div slot="code">

<<< docs/.vuepress/components/demo/custom-select-items.vue

</div>

</box-wrapper>

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | string/array | `[]` | 绑定值 |
| value-format | string | `yyyy-MM-dd` | 绑定值的格式 |
| placeholder | string | `''` | placeholder |
| minDate | string/date | `undefined` | 小于最小日期的季度将禁用 |
| maxDate | string/date | `undefined` | 大于最大日期的季度将禁用 |
| custom-value | function(year,quarter,date) | - | 自定义选择后输入框显示的值 |
| custom-select-items | function | - | 自定义下拉选项文本 |
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
