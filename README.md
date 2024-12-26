# test-leem test build

## github action
```code
.github/workflows/npm-package-publish.yml
```

## /lib/main.ts 작성
```
export default{
    install: (app:any)=>{
        app.config.globalProperties.$testleem = (s:any)=>{
            console.log(s);
            return `hello plugins params : ${s}`
        }
    }
}
```
## /src/main.ts 에서 
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import testleem from '../lib/main'

createApp(App).use(testleem).mount('#app')
```
## vite.config.ts
```// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 여러 진입점은 객체 또는 배열로 지정할 수 있습니다.
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'testleem',
      // 적절한 확장자가 추가됩니다.
      fileName: 'test-leem'
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을
      // 디펜던시를 명시해주세요
      external: ['vue'],
      output: {
        // 라이브러리 외부에 존재하는 디펜던시를 위해
        // UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
```


## package.json
```
{
    "private": false,
     "main": "./dist/test-leem.umd.cjs",
    "module": "./dist/test-leem.js",
    "exports": {
        ".": {
        "import": "./dist/test-leem.js",
        "require": "./dist/test-leem.umd.cjs"
        }
    },
}
```

## cmd
```
작업완료 후 
npm run build
```
/dist/.. 파일 업데이트
```
npm adduser
```
npmjs.com 로그인 후 
```
npm publish --access public <-- 초기에만
```
```
/버전업 할때
npm version major | minor | patch
npm publish
```


