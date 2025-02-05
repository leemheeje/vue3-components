<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import BsIcon from '@/components/BsIcon/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'

const refLoginInput = ref()

onMounted(() => {
  refLoginInput.value.setFocus()
})
const GlobalStyle = createGlobalStyle`
    :root {
      --ui-basic-component-fontsize: 16px;
    }
  `
const value1 = ref('초기인풋값 가나요?')
</script>

<template>
  <GlobalStyle />
  <BsInputField ref="refLoginInput" v-model="value1">
    <template #slotInputSectionLeftArea>
      <BsIcon :type="`icon_search_line`" />
    </template>
    <template #slotInputSectionRightArea> asdf </template>
    <template #slotSupportMessage> 서포트메시지12 </template>
  </BsInputField>
</template>
