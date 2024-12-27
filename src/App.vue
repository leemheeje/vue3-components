<script setup lang="ts">
import { ref } from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
const value1 = ref('초기인풋값 가나요?')
</script>

<template>
  <BsInputField v-model="value1" />
</template>
