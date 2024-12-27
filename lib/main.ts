import TestLeem1 from '../src/components/BsInputField/index.vue'

export default {
  install: (app: any, settings?: any) => {
    const externalSettings = settings || {}
    app.provide('externalSettings', externalSettings)
    // app.config.globalProperties.$testleem = (s:any)=>{
    //     console.log(s);
    //     console.log(123);
    //     return `hello plugins params : ${s}`
    // }
    app.component('TestLeem1', TestLeem1)
  },
}

export { TestLeem1 }
