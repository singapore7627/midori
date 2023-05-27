<template>
  <div class="container">
    <div class="p-3 my-2">
      <h2>グルメ</h2>
    </div>
    <div id="carouselTop" class="carousel slide" data-bs-ride="carousel-indicators">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <a href="https://bedfordcafe.com/garmentdistrict" target="_blank">桐生『Garment District』</a>
          <img src="@/assets/img/meals/GarmentDistrict.jpg" class="d-block w-100 h-100" alt="GarmentDistrict">
        </div>
        <div class="carousel-item active position-relative">
          <a href="https://16106midori.jp/spot/eat/107/" target="_blank">SAKURAかき氷工房</a>
          <img src="@/assets/img/meals/SAKURAかき氷工房.jpg" class="d-block w-100 h-100" alt="SAKURAかき氷工房">
        </div>
        <div class="carousel-item active position-relative">
          <a href="https://tabelog.com/gunma/A1002/A100201/10011431/" target="_blank">に志きや 焼きまんじゅう</a>
          <img src="@/assets/img/meals/に志きや.jpg" class="d-block w-100 h-100" alt="に志きや">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselTop" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselTop" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style>
.carousel-item {
  height: 70vh;
}
.caption {
  letter-spacing: 0.2em;
  background-color: rgba(0, 20, 0, 0.5);
}
</style>


<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'MealList',
  components: {
    
  },
});
</script>
