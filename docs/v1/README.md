---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .sw__wrapper { width: 350px; margin-top: 16px !important; }
</style>

# Vue quarter select <Badge text="v1.0"/>

一个基于 Vue.js 的季度选择器

::: danger 注意
下面 demo 中的源代码 `<vue-quater-select-v1>` 在实际项目中需要替换为 `<vue-quater-select>`，在此用 v1 的组件是为了避免 v2.x 的组件对示例的影响！
:::

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

**设置min-date或max-date属性来实现选项禁用**<br/>
min-date： 禁用小于min-date日期对应的季度<br/>
max-date： 禁用大于max-date日期对应的季度

<demo-disabled slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/disabled.vue

</div>

</demo-box>

### 输入框文本格式

<demo-box>

<h4>format函数指定输入框的格式</h4>

| 参数 | 类型 | 说明 |
| ---- | ---- | ---  |
| year | Number |年份 |
| quarter | Number | 季度 |
| date | Array | 日期 |

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

### slot

<demo-box>

通过 `slot-scope`自定义下拉选项或者选择器头部模板

<demo-slot-scope slot="demo" />

<div slot="code">

<<< docs/.vuepress/components/demo/slot-scope.vue

</div>

</demo-box>

</client-only>

## Props

| 参数 | 类型 | 默认值 | 说明 |
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

| 方法名 | 说明 | 参数 |
| ------- | ---------- | --- |
| clear   | 清空绑定值  | — |

## Events

| 事件名 | 说明 | 参数 |
| ----- | ----------- | ------ |
| change | 选项变化时 | newVal |
| visible-change | 下拉框出现/隐藏时 | 出现则为 true，隐藏则为 false |
| clear | 点击清空时触发 | — |

更多Events可查阅 [vue-select-wrapper 的Events](http://localhost:8083/vue-quarter-select/#events)

## Slots

| Name | 参数 | 说明 |
| ----- | ----------- | ------ |
| default | { label, value } | 自定义下拉选项模板 |
| header-left | — | 自定义头部左侧内容 |
| header-center | year | 自定义头部中间内容 |
| header-right | — | 自定义头部右侧内容 |
