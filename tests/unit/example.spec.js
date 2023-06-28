// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import {
  mount,
  shallowMount
} from '@vue/test-utils'
import {
  VueQuarterSelect
} from '@/index'

describe('QuarterSelect', () => {
  it('a valid component', () => {
    const wrapper = shallowMount(VueQuarterSelect)
    wrapper.vm.$emit('change', ['2019-10-01', '2019-12-31'])
    expect(wrapper.emitted().change[0][0]).toEqual(['2019-10-01', '2019-12-31'])
    // expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
