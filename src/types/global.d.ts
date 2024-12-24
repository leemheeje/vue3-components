import { ComponentCustomProperties } from 'vue'


declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $testleem: any; // 실제 타입으로 수정 가능
  }
}