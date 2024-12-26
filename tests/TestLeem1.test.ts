import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TestLeem1 from '@/components/TestLeem1.vue'

describe('TestLeem1.vue', () => {
  it('renders input field and displays localValue', async () => {
    const wrapper = mount(TestLeem1, {
      props: {
        modelValue: 'initial value',
      },
    })

    // 모델 값으로 전달된 값이 input에 반영되는지 확인
    const input = wrapper.find('input')
    expect(input.element.value).toBe('initial value')

    // 입력 값이 localValue에 반영되는지 확인
    expect(wrapper.text()).toContain('initial value')
  })


  it('applies customStyle from globalOptions', () => {
    const wrapper = mount(TestLeem1, {
      global: {
        provide: {
          globalOptions: {
            customStyle: { background: 'red' },
          },
        },
      },
    })

    // globalOptions에서 커스텀 스타일이 전달되었는지 확인
    expect(wrapper.text()).toContain('{"background":"red"}')
  })

})
