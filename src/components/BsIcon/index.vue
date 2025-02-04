<script setup lang="ts">
import {Wrapper} from '@/components/BsIcon/index.style'
import type {Props} from '@/components/BsIcon/index.type'

const props = withDefaults(defineProps<Props>(), {
  type: '',
  color: '#000',
  width: '24px',
  height: '24px'
})
</script>

<template>
  <Wrapper :type="props.type" :color="props.color" :width="props.width" :height="props.height"></Wrapper>
</template>
