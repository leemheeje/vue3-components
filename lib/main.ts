import BsInputField from '../src/components/BsInputField/index.vue'
import BsIcon from '../src/components/BsIcon/index.vue'
import BsCheckbox from '../src/components/BsCheckbox/index.vue'
import BsCheckboxGroup from '../src/components/BsCheckboxGroup/index.vue'
import BsRadio from '../src/components/BsRadio/index.vue'
import BsRadioGroup from '../src/components/BsRadioGroup/index.vue'
import BsSelect from '../src/components/BsSelect/index.vue'
import BsTextarea from '../src/components/BsTextarea/index.vue'
import BsButton from '../src/components/BsButton/index.vue'
import BsModal from '../src/components/BsModal/index.vue'
import BsToast from '../src/components/BsToast/index.vue'
import BsTooltip from '../src/components/BsTooltip/index.vue'

export default {
  install: (app: any, settings?: any) => {
    const externalSettings = settings || {}
    app.provide('externalSettings', externalSettings)

    const htmlElement = document.documentElement
    htmlElement.style.setProperty('--ui-basic-component-fontsize', '16px')
    // const divElement = document.createElement('div') // div 태그 생성
    // divElement.setAttribute('id', 'ui-toast-teleport-div')
    // app.config.globalProperties.$testleem = (s:any)=>{
    //     console.log(s);
    //     console.log(123);
    //     return `hello plugins params : ${s}`
    // }
    // app.component('BsInputField', BsInputField)
    // app.component('BsIcon', BsIcon)
    // app.component('BsCheckbox', BsIcon)
    // app.component('BsCheckboxGroup', BsIcon)
  }
}

export {
  BsInputField,
  BsIcon,
  BsCheckbox,
  BsCheckboxGroup,
  BsSelect,
  BsRadio,
  BsRadioGroup,
  BsTextarea,
  BsButton,
  BsModal,
  BsTooltip,
  BsToast
}
