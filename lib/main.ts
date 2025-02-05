import BsInputField from '../src/components/BsInputField/index.vue'
import BsIcon from '../src/components/BsIcon/index.vue'

export default {
  install: (app: any, settings?: any) => {
    const externalSettings = settings || {}
    app.provide('externalSettings', externalSettings)
    // app.config.globalProperties.$testleem = (s:any)=>{
    //     console.log(s);
    //     console.log(123);
    //     return `hello plugins params : ${s}`
    // }
    app.component('BsInputField', BsInputField)
    app.component('BsIcon', BsIcon)
  }
}

export {BsInputField, BsIcon}
