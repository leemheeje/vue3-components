<script setup lang="ts">
import {ref, watch, reactive} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  InputSectionRightArea,
  InputValueResetButton,
  InputOuterSectionArea,
  InputTextMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import type {Props} from '@/components/BsInputField/index.type'
import StringUtil from '@/utils/StringUtil'
import {ThemeProvider} from '@vue-styled-components/core'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  bgcolor: 'black',
  textMessage: 'sdf',
  errorMessage: 'asdf',
  confirmMessage: '',
  customStyle: {background: '처음기본값'}
})
// const externalSettings = inject('externalSettings', {}) as externalSettings
// const externalCustomStyle = externalSettings.customStyle || {}
const localValue = ref('')
const emits = defineEmits({
  'update:modelValue': null,
  'keyup:enter': null,
  'click:delete': null,
  click: null,
  input: null,
  focus: null,
  blur: null,
  keyup: null,
  'update:testModel': null
})
const theme = reactive({
  primaryColor: 'blue'
})

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onInput(event: Event) {
  const inputElement = event.target as HTMLInputElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('update:modelValue', _setValue)
}

function onClickReset() {
  emits('update:modelValue', '')
}

function onSwitchTheme() {
  //theme.value = theme.value === blueTheme.value ? darkTheme : blueTheme
  theme.primaryColor = theme.primaryColor === 'blue' ? 'black' : 'blue'
}
</script>

<template>
  <Wrapper :as="props.tag">
    <InputInnerSectionArea
      :class="{
        'is-disabled': true
      }"
    >
      <InputField type="text" :value="localValue" @input="onInput" />
      <InputSectionRightArea>
        <InputValueResetButton @click="onClickReset" data-testid="input-reset-button" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <button @click="onSwitchTheme">onSwitchTheme</button>
    {{ theme }}
    <ThemeProvider :theme="theme">
      <InputOuterSectionArea>
        <template v-if="!StringUtil.isHtmlCode(props.textMessage)">
          <InputTextMasseage>{{ props.textMessage }}</InputTextMasseage>
        </template>
        <template v-else>
          <InputTextMasseage v-html="props.textMessage" />
        </template>

        <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
        <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
      </InputOuterSectionArea>
    </ThemeProvider>
  </Wrapper>
</template>
