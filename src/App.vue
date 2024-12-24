<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TestLeem from './components/TestLeem.vue'
const value1 = ref('초기인풋값 가나요?')
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <TestLeem v-model="value1" />
</template>
