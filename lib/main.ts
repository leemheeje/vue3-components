import TestLeem from '../src/components/TestLeem.vue'

export default{
    install: (app:any)=>{
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            return `hello plugins params : ${s}`
        }
        app.component('TestLeem', TestLeem)
    }
}