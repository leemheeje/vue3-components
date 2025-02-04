<script setup lang="ts">
import {onMounted, ref} from 'vue'
import BsInputField from '@/components/BsInputField/index.vue'
import BsIcon from '@/components/BsIcon/index.vue'
import {createGlobalStyle} from '@vue-styled-components/core'
import {DESIGNCONFIG_ICON_MAP, _toGetBackgroundSVG} from '@/themes/DesignConfig'

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
      <BsIcon :type="_toGetBackgroundSVG(DESIGNCONFIG_ICON_MAP['icon_search_line'])" />
    </template>
    <template #slotInputSectionRightArea> asdf </template>
    <template #slotSupportMessage> 서포트메시지12 </template>
  </BsInputField>
</template>
