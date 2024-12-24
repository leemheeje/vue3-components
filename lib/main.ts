import TestLeem1 from '../src/components/TestLeem1.vue'
import TestLeem2 from '../src/components/TestLeem2.vue'

export default{
    install: (app:any, options?:any)=>{
        const globalOptions = options || {};
        app.provide('globalOptions', globalOptions);
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            console.log(123);
            return `hello plugins params : ${s}`
        }
        app.component('TestLeem1', TestLeem1);
        app.component('TestLeem2', TestLeem2);
    }
}

export {
    TestLeem1,
    TestLeem2
}