<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import BsIcon from '@/components/BsIcon/index.vue'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import BsCheckboxGroup from '@/components/BsCheckboxGroup/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'

const refLoginInput = ref()
const checkboxModel = ref(true)
const checkboxItems = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 2, codeName: '2'},
  {codeId: 3, codeName: '3'}
])
const checkboxItemsModel = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 3, codeName: '3'}
])

onMounted(() => {
  refLoginInput.value.setFocus()
})
const GlobalStyle = createGlobalStyle`
    :root {
      --ui-basic-component-fontsize: 16px;
    }
  `
const value1 = ref('한국어만asdf123!@#!   sdf 출력asdf')
</script>

<template>
  <GlobalStyle />
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" />
  {{ checkboxItemsModel }}
  <br />
  <br />
  <br />
  <BsCheckbox v-model="checkboxModel">테마1</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-2">테마2</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-3">테마3</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-4">테마4</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-5">테마5</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="theme-6" disabled>테마6</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" use-theme6-check-icon theme="theme-6">테마6-체크아이콘있는거</BsCheckbox><br />
  <BsCheckbox v-model="checkboxModel" theme="checkbox-theme-1">테마7</BsCheckbox><br />
  <BsInputField ref="refLoginInput" v-model="value1">
    <template #slotInputSectionLeftArea>
      <BsIcon :type="'icon_arrow_before_line'" />
    </template>
    <template #slotInputSectionRightArea> asdf </template>
    <template #slotSupportMessage> 서포트메시지12 </template>
  </BsInputField>
</template>
