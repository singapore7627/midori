<template>
  <div>
    <carousel :items-to-show="1.5">
      <slide :key="slide">
        <img src="@/assets/img/bg-hanetaki.png">
      </slide>
      <slide v-for="slide in 10" :key="slide">
        {{ slide }}
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'TopInfo',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>
