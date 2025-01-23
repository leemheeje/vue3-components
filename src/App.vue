<script setup lang="ts">
import {ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'

const GlobalStyle = createGlobalStyle`
    :root {
      --ui-basic-component-fontsize: 16px;
    }
  `
const value1 = ref('초기인풋값 가나요?')
</script>

<template>
  <GlobalStyle />
  <BsInputField v-model="value1" />
</template>
