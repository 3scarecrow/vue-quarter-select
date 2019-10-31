# vue-quarter-select

![build](<https://api.travis-ci.org/3scarecrow/vue-quarter-select.svg?branch=master>)

A basic Vue.js selector that can select quarter.

![vue-quarter-select preview](preview.png)

## Install

```sh
# yarn
yarn add @3scarecrow/vue-quarter-select
```

```sh
#npm
npm install --save @3scarecorw/vue-quarter-select
```

## Documentation

[中文](https://3scarecrow.github.io/vue-quarter-select/)

## Usage

```vue
<template>
  <VueQuarterSelect
    v-model="date"
  />
</template>
<script>
import VueQuarterSelect from '@3scarecrow/vue-quarter-select'
export default {
  // ...
  components: {
    VueQuarterSelect
  },
  data() {
    return {
      date: ''
    }
  }
}
</script>
```

## Props

| prop | type | default | description |
| --- | --- | --- | --- |
| value/v-model | string/array | `[]` | 绑定值 |
| value-format | string | `yyyy-MM-dd` | 绑定值的格式 |
| placeholder | string | `''` | placeholder |
| minDate | string/date | `undefined` | 小于最小日期的季度将禁用 |
| maxDate | string/date | `undefined` | 大于最大日期的季度将禁用 |
| format | function(year,quarter,date) | - | 使用format指定输入框的格式 |
| select-items | array | - | 自定义下拉选项文本 |
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
