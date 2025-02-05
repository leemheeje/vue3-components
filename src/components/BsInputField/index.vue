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
import {CONST_INPUTFILTER_FILTER_NAME} from '@/constants/BsInputField/index'
import type {Props} from '@/components/BsInputField/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  theme: 'theme-1',
  id: '',
  name: '',
  type: 'text',
  useFilter: '',
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
    localValue.value = setValue(v)
  },
  {immediate: true}
)

function onInput(e: Event) {
  const inputElement = e.target as HTMLInputElement
  const _setValue = setValue(inputElement.value)
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

function setValue(v: string) {
  console.log(v)
  console.log(props.useFilter)
  console.log(CONST_INPUTFILTER_FILTER_NAME)

  return v
}

defineExpose({
  setFocus
})
</script>

<template>
  <Wrapper :as="props.tag" :data-theme="props.theme">
    <InputInnerSectionArea
      :class="{
        'is-readonly': props.isReadonly,
        'is-disabled': props.isDiabled,
        'is-confirm': props.isConfirm,
        'is-error': props.isError,
        'is-focus': localIsFocus
      }"
    >
      <InputSectionLeftArea v-if="$slots.slotInputSectionLeftArea">
        <slot name="slotInputSectionLeftArea" />
      </InputSectionLeftArea>
      <InputField
        :id="props.id"
        ref="localRef"
        :type="props.type"
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
