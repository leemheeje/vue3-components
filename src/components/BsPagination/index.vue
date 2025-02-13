<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {Wrapper, BsPaginationInner, BsPaginationItem, BsPaginationButton} from '@/components/BsPagination/index.style'
import type {Props} from '@/components/BsPagination/index.type'
import {THEME_KEYNAME} from '@/constants/components/BsPagination/index'

const props = withDefaults(defineProps<Props>(), {
  theme: THEME_KEYNAME.THEME_1,
  totalRow: 0,
  perViewCount: 10,
  modelValue: 1
})

const localValue = ref(props.modelValue)
const isMore = ref(false)
const localRow = computed(() => {
  const _c = 1
  const _inArray = [...Array(props.totalRow)].map((__, i) => i + 1)
  const sIndex = props.modelValue - _c
  const eIndex = sIndex + props.perViewCount
  let _array = _inArray.slice(sIndex, eIndex)
  //isMore.value = !!_inArray[eIndex]
  if (_array.length < props.perViewCount) {
    _array = _inArray.slice(sIndex - (props.perViewCount - _array.length), eIndex)
  }
  return _array
})
const validIsDisabled = computed(() => ({
  first: localValue.value === 1,
  last: localValue.value === props.totalRow,
  prev: localValue.value <= 1,
  next: localValue.value >= props.totalRow
}))
const emits = defineEmits({
  'update:modelValue': null
})

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v
  },
  {immediate: true}
)

function onClick(n: number) {
  emits('update:modelValue', n)
}
</script>

<template>
  <Wrapper :data-theme="props.theme">
    <BsPaginationInner>
      <BsPaginationItem>
        <BsPaginationButton
          type="dprev"
          title="처음"
          :disabled="validIsDisabled.first"
          @click="onClick(1)"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem>
        <BsPaginationButton
          type="prev"
          title="이전"
          :disabled="validIsDisabled.prev"
          @click="onClick((localValue -= 1))"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem v-for="(item, index) in localRow" :key="index" @click="onClick(item)">
        <BsPaginationButton
          :class="{
            'is-active': localValue === item
          }"
          >{{ item }}</BsPaginationButton
        >
      </BsPaginationItem>
      <BsPaginationItem v-if="isMore">...</BsPaginationItem>
      <BsPaginationItem>
        <BsPaginationButton
          type="next"
          title="다음"
          :disabled="validIsDisabled.next"
          @click="onClick((localValue += 1))"
        ></BsPaginationButton>
      </BsPaginationItem>
      <BsPaginationItem>
        <BsPaginationButton
          type="dnext"
          title="마지막"
          :disabled="validIsDisabled.last"
          @click="onClick(props.totalRow)"
        ></BsPaginationButton>
      </BsPaginationItem>
    </BsPaginationInner>
  </Wrapper>
</template>
