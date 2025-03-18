<script setup lang="ts">
import {ref} from 'vue'
import type {Props} from '@/components/BsDatepicker/index.type'
import {Wrapper, BsDatepickerInput /* , BsDatepickerFooter */} from '@/components/BsDatepicker/index.style'
import BsIcon from '@/components/BsIcon/index.vue'

import {DatePicker} from 'v-calendar'
import 'v-calendar/style.css'

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  isRange: false
})

const model = defineModel<Date | {start: Date; end: Date}>()

const masks = {title: 'YYYY년 MMM', modelValue: 'YYYY-MM-DD'}

const attributes = ref()

const selectAttribute = ref({
  // dot: true
  // highlight: {
  //   color: 'orange',
  //   color: props.color,
  //   fillMode: 'light'
  // }
})

// function clear() {
//   console.log('clear')
//   // model.value.start ? (model.value.start = '') : (model.value = '')
// }
function dayclick(c: any, m: any) {
  console.log(c, m)
}
</script>
<!-- https://www.npmjs.com/package/vue-scroll-picker -->
<!-- https://github.com/plusone-masaki/vue-drumroll-datetime-picker -->
<!-- https://codepen.io/takaneichinose/pen/VJbNLe -->
<template>
  <Wrapper :data-theme="props.color">
    <!-- :color="props.color" -->
    <!-- :color="'custom'" -->
    <DatePicker
      v-model.string="model"
      :is-range="props.isRange"
      :masks="masks"
      :attributes="attributes"
      :select-attribute="selectAttribute"
      :color="'custom'"
      @dayclick="dayclick"
    >
      <template #default="{inputValue, togglePopover}">
        <BsDatepickerInput tabindex="0" @click="togglePopover">
          <input
            type="text"
            :value="props.isRange ? (inputValue.start ? inputValue.start + ' - ' + inputValue.end : '') : inputValue"
            :placeholder="props.isRange ? '0000.00.00 - 0000.00.00' : '0000.00.00'"
          />
          <button type="button">
            <BsIcon :type="'icon_calendar_month_fill'" :width="'20px'" :height="'20px'" :color="'Gray/Darkgray_04'" />
          </button>
        </BsDatepickerInput>
      </template>
      <template #footer>
        <!-- <BsDatepickerFooter>
          <button type="button">확인</button>
        </BsDatepickerFooter> -->
      </template>
    </DatePicker>
  </Wrapper>
</template>
