// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import {
  mount
} from '@vue/test-utils'
import QuarterSelect from '@/QuarterSelect.vue'

describe('QuarterSelect', () => {
  it('a valid component', () => {
    const wrapper = mount(QuarterSelect)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})