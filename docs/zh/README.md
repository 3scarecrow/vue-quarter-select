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

**若需要禁用选项可设置min-date和max-date属性实现**<br/>
min-date： 小于min-date日期对应的季度将禁用（不可选择）<br/>
max-date： 大于max-date日期对应的季度将禁用（不可选择）

<demo-disabled slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/disabled.vue

</div>

</demo-box>

### 输入框文本格式

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

dropdown-options可以自定义下拉选项文本

<demo-dropdown-options slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/dropdown-options.vue

</div>

</demo-box>

### 默认显示季度

<demo-box>

default-value可显示默认季度

<demo-default-value slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/default-value.vue

</div>

</demo-box>

</client-only>

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | String/Array | `[]` | 绑定值 |
| value-format | String | `yyyy-MM-dd` | 绑定值的格式 |
| minDate | String/Date | `undefined` | 小于最小日期的季度将禁用 |
| maxDate | String/Date | `undefined` | 大于最大日期的季度将禁用 |
| format | Function(year,quarter,date) | - | 使用format指定输入框的格式 |
| select-items | Array | - | 自定义下拉选项文本 |
| default-value | Date | - | 默认显示的季度 |

更多Props可查阅 [vue-select-wrapper 的Props](https://laomao800.github.io/vue-select-wrapper/zh/#props)

## Methods

| Methods | Descripion |
| ------- | ---------- |
| clear   | 清空绑定值  |

## Events

| Event | Description | Params |
| ----- | ----------- | ------ |
| clear | 点击清空时触发 | - |

更多Events可查阅 [vue-select-wrapper 的Events](http://localhost:8083/vue-quarter-select/#events)
