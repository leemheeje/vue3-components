<script setup lang="ts">
import {ref, watch} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputField,
  InputSectionLeftArea,
  InputSectionRightArea,
  InputValueTimerange,
  InputValueResetButton,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsInputField/index.style'
import type {Props} from '@/components/BsInputField/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  name: '',
  isFocus: false,
  isReadonly: false,
  isDiabled: false,
  isError: false,
  isConfirm: false,
  placeholder: 'sdf',
  errorMessage: '에러메시지',
  confirmMessage: '완료메시지',
  customStyle: {background: '처음기본값'},
  timeRange: '30:00'
})

const localRef = ref()
const localValue = ref('')
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'click:delete', 'input', 'focus', 'blur', 'keyup'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onInput(e: Event) {
  const inputElement = e.target as HTMLInputElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('input', e)
  emits('update:modelValue', _setValue)
}

function onClickReset() {
  emits('update:modelValue', '')
  setFocus()
}

function setFocus() {
  localRef.value?.$el.focus()
}

function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}
function onKeyup(e: KeyboardEvent) {
  emits('keyup', e)
}

defineExpose({
  setFocus
})
</script>

<template>
  <Wrapper :as="props.tag">
    <InputInnerSectionArea
      :class="{
        'is-readonly': props.isReadonly,
        'is-disabled': props.isDiabled,
        'is-confirm': props.isConfirm,
        'is-error': props.isError,
        'is-focus': localIsFocus
      }"
    >
      <InputSectionLeftArea>
        <slot name="slotInputSectionLeftArea" />
      </InputSectionLeftArea>
      <InputField
        ref="localRef"
        type="text"
        :placeholder="props.placeholder"
        :value="localValue"
        :name="props.name"
        :readonly="props.isReadonly"
        :disabled="props.isDiabled"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="onKeyup"
      />
      <InputSectionRightArea>
        <InputValueResetButton v-if="localValue" data-testid="input-reset-button" @click="onClickReset" />
        <slot name="slotInputSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
      <InputValueTimerange v-if="props.timeRange"> 유효시간 : {{ props.timeRange }} </InputValueTimerange>
    </InputOuterSectionArea>
  </Wrapper>
</template>
