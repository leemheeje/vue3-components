<script setup lang="ts">
import { ref } from 'vue'
import TestLeem from './components/TestLeem1.vue'
const value1 = ref('초기인풋값 가나요?')
const sdfsdfsdf = ref('두번째애 가나요?')
</script>

<template>
  <TestLeem v-model="value1"/>
  <TestLeem2 v-model="sdfsdfsdf"/>
</template>
