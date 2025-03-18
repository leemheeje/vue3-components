<script setup lang="ts">
import {ref, computed, defineProps, onMounted, onUnmounted} from 'vue'
import {register} from 'swiper/element/bundle'
import {SwiperWrapper, Numbering, Navigation} from './index.style'

register()

const props = defineProps<{
  type: 'pagination' | 'numbering'
  subType: '1-1' | '1-2' | '2-1' | '2-2'
  images: string[]
  navigationSize?: 'S' | 'M'
  label?: string
}>()

const swiperEl = ref<HTMLElement | null>(null)
const currentIndex = ref(1)

const updateCurrentIndex = () => {
  if (swiperEl.value) {
    currentIndex.value = (swiperEl.value as any).swiper.activeIndex + 1
  }
}

onMounted(() => {
  if (swiperEl.value) {
    ;(swiperEl.value as any).swiper.on('slideChange', updateCurrentIndex)
  }
})

onUnmounted(() => {
  if (swiperEl.value) {
    ;(swiperEl.value as any).swiper.off('slideChange', updateCurrentIndex)
  }
})
const navSizeClass = computed(() => (props.navigationSize === 'S' ? 'nav-small' : 'nav-medium'))
</script>

<template>
  <SwiperWrapper>
    <swiper-container
      ref="swiperEl"
      :pagination="type === 'pagination' ? {clickable: true} : undefined"
      :navigation="subType === '1-2' || subType.includes('2-') ? true : undefined"
    >
      <swiper-slide v-for="(img, index) in images" :key="index">
        <img :src="img" alt="Slide image" />
      </swiper-slide>
    </swiper-container>

    <!-- Type 2 넘버링 -->
    <Numbering v-if="type === 'numbering'" :class="{'type-2-2': subType === '2-2'}">
      <span v-if="subType === '2-1'">&lt; {{ currentIndex }}/{{ images.length }} &gt;</span>
      <div v-else-if="subType === '2-2'">
        <span class="nav">&lt; {{ currentIndex }}/{{ images.length }} &gt;</span>
        <span class="label">{{ label }}</span>
      </div>
    </Numbering>

    <Navigation v-if="subType === '1-2' || subType.includes('2-')" :class="navSizeClass">
      <button class="prev">〈</button>
      <button class="next">〉</button>
    </Navigation>
  </SwiperWrapper>
</template>
