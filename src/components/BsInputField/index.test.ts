import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BsInputField from '@/components/BsInputField/index.vue'

/**
 * Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트
 * modelValue 변화시 (watch) 정상적으로 localValue 업데이트
 * input @input 바인딩시 update:modelValue 정상적 업데이트
 */

describe('BsInputField', () => {
  const wrapper = mount(BsInputField, {
    props: {
      modelValue: '초기 modelValue',
    },
  })
  const input = wrapper.find('input')

  it('Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트', async () => {
    expect(input.element.value).toBe('초기 modelValue')
  })

  it('modelValue 변화시 (watch) 정상적으로 localValue 업데이트', async () => {
    wrapper.setProps({
      modelValue: '모델벨류 업데이트',
    })
    await wrapper.vm.$nextTick()
    expect(input.element.value).toBe('모델벨류 업데이트')
  })

  it('input @input 바인딩시 update:modelValue 정상적 업데이트', async () => {
    input.setValue('@input 값 업데이트')
    console.log('input----', input)

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0]).toEqual(['@input 값 업데이트'])
  })
})
