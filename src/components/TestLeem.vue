<script setup lang="ts">
import { ref,watch } from 'vue'
const props = withDefaults(
  defineProps<{ 
    modelValue: any; 
    customStyle?: any; 
  }>(),
  {
    customStyle: { background: '처음기본값' },
  }
)
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

function onInput(event:Event) {
  const inputElement = event.target as HTMLInputElement;
  const _setValue = inputElement.value
  inputElement.value = _setValue
  emits('update:modelValue', _setValue)
}

</script>

<template>
  <div>
    <input type="text" :value="localValue" @input="onInput"/>
    {{ localValue }}<br/>
    {{ JSON.stringify(props.customStyle) }}<br/>
  </div>
</template>