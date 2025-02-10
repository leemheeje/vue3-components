<script setup lang="ts">
import {onBeforeUnmount, ref, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'
import {} from 'vue'
import {
  Dimm,
  Wrapper,
  ModalInnerSection,
  ModalHeader,
  ModalHeaderText,
  ModalHeaderCloseButton,
  ModalButtonGroup,
  ModalContent,
  ModalFooter
} from '@/components/BsModal/index.style'
import type {Props} from '@/components/BsModal/index.type'
import BsButton from '@/components/BsButton/index.vue'
import {THEME_KEYNAME, COLOR_KEYNAME} from '@/constants/components/BsButton/index'
import {ALIGN_KEYNAME, BUTTON_LAYOUT} from '@/constants/components/BsModal/index'
import ObjectUtil from '@/utils/ObjectUtil'

const props = withDefaults(defineProps<Props>(), {
  teleportTo: 'body',
  headerText: 'headerText',
  useDimm: true,
  align: ALIGN_KEYNAME.CENTER_CENTER,
  buttonLayout: BUTTON_LAYOUT.LAYOUT_RIGHT,
  buttons: () => [
    {codeText: '취소', clickCallback: () => {}},
    {codeText: '확인', clickCallback: () => {}}
  ],
  modelValue: false
})
const localRef = ref()
const localValue = ref()
const isLocked = useScrollLock(document.documentElement)
const emits = defineEmits(['update:modelValue', 'close'])

watch(
  () => props.modelValue,
  (v: boolean) => {
    localValue.value = v
    isLocked.value = localValue.value
  },
  {immediate: true}
)

onBeforeUnmount(() => {
  isLocked.value = false
})

function setFocus() {
  localRef.value?.$el.focus()
}

function onClose() {
  emits('update:modelValue', false)
  emits('close')
}
function onButtonClick(item: Record<string, any>) {
  if (typeof item.clickCallback === 'function') {
    item.clickCallback(item)
  }
}

defineExpose({
  setFocus
})
</script>

<template>
  <Teleport v-if="localValue" :to="props.teleportTo">
    <Dimm v-if="props.useDimm" />
    <Wrapper ref="localRef" tabindex="0" :data-align="props.align" @click.self="onClose">
      <ModalInnerSection>
        <ModalHeader>
          <ModalHeaderText>{{ props.headerText }}</ModalHeaderText>
          <ModalHeaderCloseButton @click="onClose"></ModalHeaderCloseButton>
        </ModalHeader>
        <ModalContent><slot /></ModalContent>
        <ModalFooter v-if="!ObjectUtil.isEmpty(props.buttons)">
          <ModalButtonGroup :data-button-layout="props.buttonLayout">
            <BsButton
              v-for="(item, index) in props.buttons"
              :key="index"
              :theme="
                ObjectUtil.isLastIndex(props.buttons, index) ? THEME_KEYNAME.DEFAULT : THEME_KEYNAME.DEFAULT_OUTLINE
              "
              :color="
                ObjectUtil.isLastIndex(props.buttons, index)
                  ? COLOR_KEYNAME['Primary/Primary_01']
                  : COLOR_KEYNAME[`Gray/Darkgray_01`]
              "
              @click="onButtonClick(item)"
            >
              {{ item.codeText }}
            </BsButton>
          </ModalButtonGroup>
        </ModalFooter>
      </ModalInnerSection>
    </Wrapper>
  </Teleport>
</template>
