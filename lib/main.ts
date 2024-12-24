import TestLeem from '../src/components/TestLeem.vue'

export default{
    install: (app:any, options?:any)=>{
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            console.log(123);
            return `hello plugins params : ${s}`
        }
        app.component('TestLeem', {
            ...TestLeem,
            props:{
                ...TestLeem.props,
                customStyle: {
                    type: Object,
                    default: ()=>options?.customStyle || {}
                }
            }
        })
    }
}