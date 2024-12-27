<script setup lang="ts">
import { ref, watch, inject } from 'vue'
import { Wrapper, InputSectionArea } from '@/components/BsInputField/index.style'
import type { Props } from '@/components/BsInputField/index.type'

const props = withDefaults(defineProps<Props>(), {
  tag: 'span',
  bgcolor: 'black',
  customStyle: { background: '처음기본값' },
})
const externalSettings = inject('externalSettings', {}) as externalSettings
const externalCustomStyle = externalSettings.customStyle || {}
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
})
watch(
  () => props.modelValue,
  v => {
    localValue.value = v
  },
  { immediate: true }
)

function onInput(event: Event) {
  const inputElement = event.target as HTMLInputElement
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('update:modelValue', _setValue)
}
</script>

<template>
  <Wrapper :as="props.tag">
    <InputSectionArea
      :class="{
        'is-disabled': true,
      }"
    >
      <input type="text" :value="localValue" @input="onInput" />
    </InputSectionArea>
  </Wrapper>
</template>
