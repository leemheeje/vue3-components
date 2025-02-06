<script setup lang="ts">
import {ref, watch} from 'vue'
import BsCheckbox from '@/components/BsCheckbox/index.vue'
import type {Props} from '@/components/BsCheckboxGroup/index.type'
import StringUtil from '@/utils/StringUtil'
import _ from 'lodash'

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  modelValue: () => []
})
const localValue = ref<object[]>([])
const emits = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function isChecked(item: Record<string, any>, v: object[]) {
  return _.some(v, item)
}

function onChange(e: Event, item: Record<string, any>) {
  const _e = e.target as HTMLInputElement
  let _items = localValue.value
  if (_e.checked) {
    _items.push(item)
  } else {
    _items = _items.filter((__item) => !StringUtil.isEqual(item, __item))
  }
  emits('update:modelValue', _items)
}
</script>

<template>
  <ul>
    <li v-for="(item, index) in props.items" :key="index">
      <BsCheckbox :checked="isChecked(item, localValue)" @change="(e) => onChange(e, item)" />
    </li>
  </ul>
</template>
