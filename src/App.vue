<script setup lang="ts">
import { ref } from 'vue'
import TestLeem from './components/TestLeem.vue'
const value1 = ref('초기인풋값 가나요?')
</script>

<template>
  <TestLeem v-model="value1"/>
</template>
