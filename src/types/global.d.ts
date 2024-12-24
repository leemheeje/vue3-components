import { ComponentCustomProperties } from 'vue'

declare module '../lib/main' {
    const testleem: any; 
    export default testleem;
  }


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $testleem: any; // 실제 타입으로 수정 가능
  }
}