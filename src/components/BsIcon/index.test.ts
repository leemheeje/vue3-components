import {mount} from '@vue/test-utils'
import {describe, it} from 'vitest'
import BsIcon from '@/components/BsIcon/index.vue'

/**
 * 아이콘 너비/높이/색상 조정 가능 체크
 */
describe('BsIcon', () => {
  it('아이콘 너비/높이/색상 조정 가능 체크', () => {
    const wrapper = mount(BsIcon, {
      props: {
        type: 'icon_cancel_line',
        color: 'red',
        width: '300px',
        height: '300px'
      }
    })
  })
})
