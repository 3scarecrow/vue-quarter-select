---
sidebar: auto
---

<!-- markdownlint-disable MD033 -->
<style>
  .db__wrapper { margin-top: 16px !important; }
  .sw__wrapper { margin-top: 16px !important; }
</style>

# Vue quarter select

一个基于 Vue.js 的季度选择器

## Example

<!-- <demo-box> -->

<!-- 绑定v-model -->

<example/>

<<< docs/.vuepress/components/example.vue{2}

<!-- <example slot="demo"/> -->

<!-- <div slot="code">

<<< docs/.vuepress/components/example.vue{2}

</div>

</demo-box> -->

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | any | `undefined` | 绑定值 |
| placeholder | string | `''` | placeholder |
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
