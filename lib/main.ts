export default{
    install: (app:any)=>{
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            return `hello plugins params : ${s}`
        }
    }
}