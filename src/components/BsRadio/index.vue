<script setup lang="ts">
import {nextTick, onMounted, ref, watch} from 'vue'
import StringUtil from '@/utils/StringUtil'
import {Wrapper, inputCSS, InputLabel, InputLabelText, InputCheckUI} from '@/components/BsRadio/index.style'
import type {Props} from '@/components/BsRadio/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsCheckbox/index'

const props = withDefaults(defineProps<Props>(), {
  id: '',
  name: '',
  checked: false,
  disabled: false,
  value: '',
  modelValue: '',
  useTheme6CheckIcon: false,
  theme: THEME_KEYNAME.THEME_4 // THEME_KEYNAME.THEME_5
})

const localId = ref(props.id)
const localName = ref(props.name)
const localValue = ref<boolean | string>(false)
const localChecked = ref(localValue.value)
const emits = defineEmits(['update:modelValue', 'change'])

watch(
  () => props.name,
  (v) => {
    localName.value = v
  }
)

onMounted(() => {
  nextTick(() => {
    const _localId = StringUtil.getUUID()
    localId.value = props.id || _localId
    localName.value = props.name || localId.value
  })
})

function onChange(e: Event) {
  const $input = e.target as HTMLInputElement
  emits('change', e)
  emits('update:modelValue', $input.value)
}
</script>

<template>
  <Wrapper
    :class="{
      'is-checked': localChecked,
      'is-disabled': props.disabled,
      'use-theme-6-checkicon': props.theme === THEME_KEYNAME.THEME_6 && props.useTheme6CheckIcon
    }"
    :data-theme="props.theme"
  >
    <inputCSS
      :id="localId"
      type="radio"
      :value="props.value"
      :name="localName"
      :checked="props.checked || StringUtil.isEqual(props.modelValue, props.value)"
      :disabled="props.disabled"
      @change="onChange"
    />
    <InputLabel :for="localId">
      <InputCheckUI
        v-if="
          props.theme === THEME_KEYNAME.THEME_1 ||
          props.theme === THEME_KEYNAME.THEME_2 ||
          props.theme === THEME_KEYNAME.THEME_3 ||
          props.theme === THEME_KEYNAME.THEME_4 ||
          props.theme === THEME_KEYNAME.THEME_5
        "
      />
      <InputLabelText v-if="$slots.default">
        <slot />
      </InputLabelText>
    </InputLabel>
  </Wrapper>
</template>
