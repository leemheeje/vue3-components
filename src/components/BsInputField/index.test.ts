import {mount} from '@vue/test-utils'
import {describe, it, expect} from 'vitest'
import BsInputField from '@/components/BsInputField/index.vue'
import {INPUT_VALIDATE} from '@/constants/components/BsInputField/index'

/**
 * Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트
 * modelValue 변화시 (watch) 정상적으로 localValue 업데이트
 * input @input 바인딩시 update:modelValue 정상적 업데이트
 * InputValueResetButton 클릭시 update:modelValue "" 업데이트
 * 유효성 ** KO
 * 유효성 ** EN
 * 유효성 ** Number
 * 유효성 ** 가격콤마(10,000)
 * 유효성 ** 특수문자
 * 유효성 ** KO+특수문자
 * 유효성 ** EN+특수문자
 */
describe('BsInputField', () => {
  it('Mount 시, Props로 받은 modelValue가 정상적으로 localValue에 업데이트', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '초기 modelValue'
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('초기 modelValue')
  })

  it('modelValue 변화시 (watch) 정상적으로 localValue 업데이트', async () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '초기 modelValue'
      }
    })
    const input = wrapper.find('input')
    wrapper.setProps({
      modelValue: '모델벨류 업데이트'
    })
    await wrapper.vm.$nextTick()
    expect(input.element.value).toBe('모델벨류 업데이트')
  })

  it('input @input 바인딩시 update:modelValue 정상적 업데이트', async () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '초기 modelValue'
      }
    })
    const input = wrapper.find('input')
    input.setValue('@input 값 업데이트')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0]).toEqual(['@input 값 업데이트'])
  })

  it('InputValueResetButton 클릭시 update:modelValue "" 업데이트', async () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '초기 modelValue'
      }
    })
    const button = wrapper.find('[data-testid="input-reset-button"]')
    await button.trigger('click')
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0]).toEqual([''])
  })
  it('유효성 ** KO', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.KO
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('한글만써지게한글')
  })
  it('유효성 ** EN', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.EN
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('afdwffasdfafwasdf')
  })
  it('유효성 ** Number', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.NUMBER
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('123141')
  })
  it('유효성 ** 가격콤마(10,000)', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123123123123123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.PRICE_COMMA
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('123,123,123,123,123,141')
  })
  it('유효성 ** KO+특수문자', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123123123123123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.KO_SPECIAL
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('한글만써지게한글!@$')
  })
  it('유효성 ** EN+특수문자', () => {
    const wrapper = mount(BsInputField, {
      props: {
        modelValue: '한글만 써지게 afdwff 한글 asdf🎯afw123123123123123141!@$ asdf',
        inputFilter: INPUT_VALIDATE.EN_SPECIAL
      }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('afdwffasdfafw!@$asdf')
  })
})
