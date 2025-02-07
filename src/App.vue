<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import BsIcon from '@/components/BsIcon/index.vue'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import BsCheckboxGroup from '@/components/BsCheckboxGroup/index.vue'
import BsRadio from '@/components/BsRadio/index.vue'
import BsRadioGroup from '@/components/BsRadioGroup/index.vue'
import BsSelect from '@/components/BsSelect/index.vue'
import BsTextarea from '@/components/BsTextarea/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'

const refLoginInput = ref()
const selectmodel = ref('3')
const checkboxModel = ref(true)
const radioItems = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 2, codeName: '2'},
  {codeId: 3, codeName: '3'}
])
const checkboxItems = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 2, codeName: '2'},
  {codeId: 3, codeName: '3'}
])
const radioItemsModel = ref({codeId: 3, codeName: '3'})
const checkboxItemsModel = ref([
  {codeId: 1, codeName: '1'},
  {codeId: 3, codeName: '3'}
])
const wxAwss = ref('aa1')
const textareamodel = ref('aa1')

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
  <br />
  <BsTextarea v-model="textareamodel" />{{ textareamodel }}<br />
  <BsRadioGroup v-model="radioItemsModel" :items="radioItems" theme="theme-2" />{{ radioItemsModel }}
  <BsRadioGroup v-model="radioItemsModel" :items="radioItems" theme="theme-1" />{{ radioItemsModel }}
  <br />
  <BsRadio v-model="wxAwss" name="a1" value="aa1">1</BsRadio>
  <BsRadio v-model="wxAwss" name="a1" value="aa2">2</BsRadio>{{ wxAwss }}
  <br />
  {{ selectmodel }}
  <BsSelect v-model="selectmodel">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </BsSelect>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" />
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" theme="theme-1" />
  <br />
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" use-theme6-check-icon theme="theme-2">
    <template #default="{item}">{{ item.codeName }}</template>
  </BsCheckboxGroup>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" theme="theme-2">
    <template #default="{item}">{{ item.codeName }}</template>
  </BsCheckboxGroup>
  <BsCheckboxGroup v-model="checkboxItemsModel" :items="checkboxItems" />
  {{ checkboxItemsModel }}
  <br />
  <br />
  <br />
  <BsCheckbox v-model="checkboxModel">테마1</BsCheckbox><br />{{ checkboxModel }}
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

<style>
* {
  vertical-align: top;
}
</style>
