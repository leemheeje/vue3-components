<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {
  Wrapper,
  InputInnerSectionArea,
  InputTextarea,
  InputInnerBottomSectionArea,
  InputOuterSectionArea,
  InputSupportMasseage,
  InputErrorMasseage,
  InputByteCheckArea,
  TextareaButtonGroup,
  InputConfirmMasseage
} from '@/components/BsTextarea/index.style'
import type {Props} from '@/components/BsTextarea/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  theme: 'theme-1',
  id: '',
  name: '',
  type: 'text',
  modelValue: '',
  readonly: false,
  disabled: false,
  isError: false,
  isConfirm: false,
  placeholder: 'sdf',
  errorMessage: '에러메시지',
  confirmMessage: '완료메시지',
  useLengthCheck: false,
  maxlength: 2000,
  customStyle: {background: '처음기본값'},
  timeRange: '30:00'
})
const localRef = ref()
const localValue = ref('')
const localIsFocus = ref(false)
const emits = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'keyup'])
const getCurrentLength = computed(() =>
  localValue.value.length >= Number(props.maxlength) ? props.maxlength : localValue.value.length
)
watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onInput(e: Event) {
  const inputElement = e.target as HTMLTextAreaElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('input', e)
  emits('update:modelValue', _setValue)
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
  <Wrapper>
    <InputInnerSectionArea
      :class="{
        'is-readonly': props.readonly,
        'is-disabled': props.disabled,
        'is-confirm': props.isConfirm,
        'is-error': props.isError,
        'is-focus': localIsFocus
      }"
    >
      <InputTextarea
        :id="props.id"
        ref="localRef"
        :placeholder="props.placeholder"
        :value="localValue"
        :name="props.name"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :maxlength="props.useLengthCheck ? props.maxlength : null"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="onKeyup"
      />
      <InputInnerBottomSectionArea>
        <InputByteCheckArea v-if="props.useLengthCheck">
          {{ getCurrentLength }}/{{ props.maxlength }}
        </InputByteCheckArea>
        <TextareaButtonGroup v-if="$slots.slotTextareaButtonGroup">
          <slot name="slotTextareaButtonGroup" />
        </TextareaButtonGroup>
      </InputInnerBottomSectionArea>
    </InputInnerSectionArea>
    <InputOuterSectionArea>
      <InputSupportMasseage>
        <slot name="slotSupportMessage" />
      </InputSupportMasseage>
      <InputErrorMasseage>{{ props.errorMessage }}</InputErrorMasseage>
      <InputConfirmMasseage>{{ props.confirmMessage }}</InputConfirmMasseage>
    </InputOuterSectionArea>
    <TextareaButtonGroup v-if="$slots.slotTextareaButtonGroup" class="use-outer-section">
      <slot name="slotTextareaButtonGroup" />
    </TextareaButtonGroup>
  </Wrapper>
</template>
