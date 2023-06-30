# vue-quarter-select

[![ci](https://github.com/3scarecrow/vue-quarter-select/actions/workflows/ci.yml/badge.svg)](https://github.com/3scarecrow/vue-quarter-select/actions/workflows/ci.yml)
[![npm (scoped)](https://img.shields.io/npm/v/@3scarecrow/vue-quarter-select)](https://www.npmjs.com/package/@3scarecrow/vue-quarter-select)

一个基于 Vue2 的季度选择器

![vue-quarter-select preview](preview.jpg)

## Install

```sh
# yarn
yarn add @3scarecrow/vue-quarter-select
```

```sh
#npm
npm install --save @3scarecrow/vue-quarter-select
```

## Documentation

[vue-quarter-select 2 版本文档](https://3scarecrow.github.io/vue-quarter-select/) |
[vue-quarter-select 1 版本文档](https://3scarecrow.github.io/vue-quarter-select/v1/)

## Usage

```vue
<template>
  <VueQuarterSelect v-model="date" />
</template>
<script>
import VueQuarterSelect from '@3scarecrow/vue-quarter-select'
export default {
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

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=3scarecrow/vue-quarter-select&type=Date)](https://star-history.com/#3scarecrow/vue-quarter-select&Date)
