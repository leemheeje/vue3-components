<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/css'

const onSwiper = () => {}

const onSlideChange = () => {}
</script>

<template>
  <Swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slide-change="onSlideChange">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
</template>
