<script setup lang="ts">
import {ref} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputSelect,
  InputSectionRightArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputConfirmMasseage
} from '@/components/BsSelect/index.style'
import type {Props} from '@/components/BsSelect/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  id: '',
  name: '',
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  modelValue: '',
  errorMessage: '에러메시지',
  confirmMessage: '완료메시지',
  customStyle: {background: '처음기본값'}
})
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

function onFocus(e: FocusEvent) {
  emits('focus', e)
  localIsFocus.value = true
}
function onBlur(e: FocusEvent) {
  emits('blur', e)
  localIsFocus.value = false
}
function onChange(e: Event) {
  const $target = e.target as HTMLSelectElement
  emits('change', e)
  emits('update:modelValue', $target.value)
  localIsFocus.value = false
}
</script>

<template>
  <Wrapper :as="props.tag">
    <InputInnerSectionArea
      :class="{
        'is-disabled': props.disabled,
        'is-confirm': props.isConfirm,
        'is-error': props.isError,
        'is-focus': localIsFocus
      }"
    >
      <InputSelect
        :disabled="props.disabled"
        :value="props.modelValue"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
      >
        <slot />
      </InputSelect>
      <InputSectionRightArea>
        <span class="ic-select-arrow"></span>
        <slot name="slotSelectSectionRightArea" />
      </InputSectionRightArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
    </InputOuterSectionArea>
  </Wrapper>
</template>
