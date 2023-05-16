<template>
  <div>
    <div id="carouselTop" class="carousel slide" data-bs-ride="carousel-indicators">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <img src="@/assets/img/bg-hanetaki.png" class="d-block w-100 h-100" alt="高津戸橋">
          <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-1 p-4 ps-5 caption rounded">
            豊かな自然の街、<br/>
            みどり市。
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/bg-sakura-kori.jpg" class="d-block w-100 h-100" alt="元総社えんにち茶屋">
          <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-1 p-4 ps-5 caption rounded">
            食と文化の街、<br/>
            みどり市。
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/img/bg-senbon.jpg" class="d-block w-100 h-100" alt="赤城南面千本桜">
          <div class="position-absolute top-50 start-50 translate-middle text-white fw-bold fs-1 p-4 ps-5 caption rounded">
            平和と安心の街、<br/>
            みどり市。
          </div>
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
  height: 80vh;
}
.caption {
  letter-spacing: 0.2em;
  background-color: rgba(0, 20, 0, 0.5);
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'TopInfo',
  components: {
  },
});
</script>
