<script setup lang="ts">
import {ref} from 'vue'
import type {Props} from '@/components/BsTimepicker/index.type'
import {Wrapper} from '@/components/BsTimepicker/index.style'

import {TimePicker} from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'

const props = withDefaults(defineProps<Props>(), {
  color: 'red'
})

const now = ref()
</script>
<!-- https://www.npmjs.com/package/vue-scroll-picker -->
<!-- https://github.com/plusone-masaki/vue-drumroll-datetime-picker -->
<!-- https://codepen.io/takaneichinose/pen/VJbNLe -->
<!-- https://blog.csdn.net/qq_50721840/article/details/143229561 -->
<!-- https://github.com/MohamedAbd0/time_picker_spinner -->
<template>
  <Wrapper :style="props.color ? 'color: ' + props.color : ''">
    <input type="text" :value="now" />
    <time-picker
      v-model="now"
      format="HH:mm"
      :pattern="{
        hour: 'A hh',
        minute: 'mm',
        dividerTime: ':'
      }"
    />
  </Wrapper>
</template>

<!-- <style src="vue-scroll-picker/dist/style.css"></style> -->
