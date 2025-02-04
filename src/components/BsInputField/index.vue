<script setup lang="ts">
import {ref, watch} from 'vue'
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
// import DesignConfig from '@/themes/DesignConfig'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  bgcolor: 'black',
  placeholder: 'sdf',
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
  keyup: null
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
</script>

<template>
  <Wrapper
    :as="props.tag"
    :class="{
      'is-readonly': false,
      'is-disabled': false,
      'is-complete': false,
      'is-error': false,
      'is-focus': false
    }"
  >
    <InputInnerSectionArea>
      <InputField type="text" :placeholder="props.placeholder" :value="localValue" @input="onInput" />
      <InputSectionRightArea>
        <InputValueResetButton data-testid="input-reset-button" @click="onClickReset" />
        <slot name="slotInputSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
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
  </Wrapper>
</template>
