import {describe, expect, it} from 'vitest'
import BsAccordion from '@/components/BsAccordion/index.vue'
import {mount} from '@vue/test-utils'
import {THEME_KEYNAME} from '@/constants/components/BsAccordion/index'

import {USE_LEFTICON, IS_OPEN} from '@/components/BsAccordion/index.style'

const _data = [{codeTitle: 1, codeContent: 2, codeSelected: true}]

describe('BsAccordion.vue', () => {
  it('Watch, props.items가 localItems에 정상적으로 할당', () => {
    const wrapper = mount(BsAccordion, {
      props: {
        items: _data
      }
    }) as Record<string, any>
    expect(wrapper.vm.localItems).toEqual(_data)
  })

  Object.values(THEME_KEYNAME).forEach((validTheme) => {
    it(`theme="${validTheme}" 일 때 마운트가 정상 동작해야 함`, () => {
      const wrapper = mount(BsAccordion, {
        props: {
          theme: validTheme
        }
      })
      expect(wrapper.vm.$props.theme).toBe(validTheme)
      expect(wrapper.vm.$props.theme).not.toBe('asdf')
    })
  })
  it(`theme="지정하지않은 테마" 일 때 마운트가 실패`, () => {
    const wrapper = mount(BsAccordion, {
      props: {
        theme: THEME_KEYNAME.THEME_1
      }
    })
    expect(wrapper.vm.$props.theme).not.toBe('asdf')
  })
  it(`Props.useLeftIcon 왼쪽 아이콘 실행시 클래스 추가되는지`, () => {
    const wrapper = mount(BsAccordion, {
      props: {
        useLeftIcon: true
      }
    })
    expect(wrapper.find(`.${USE_LEFTICON}`).exists()).toBe(true)
  })

  it(`아코디언 타이틀부분을 클릭하면 확장/축소 되는지`, async () => {
    const wrapper = mount(BsAccordion)
    await wrapper.emitted('click')
    expect(wrapper.find(`.${IS_OPEN}`).exists()).toBe(true)
  })
})
