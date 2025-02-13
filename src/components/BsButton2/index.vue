<script setup lang="ts">
import {} from 'vue'
import type {Props} from '@/components/BsButton2/index.type'
import {Wrapper} from '@/components/BsButton2/index.style'

const props = withDefaults(defineProps<Props>(), {
  color: 'red'
})
</script>

<template>
  <Wrapper>{{ props.color }}button</Wrapper>
</template>
