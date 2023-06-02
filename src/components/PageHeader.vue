<template>
  <nav class="navbar navbar-expand-md px-md-2 navbar-dark bg-primary">
    <div class="container-fluid">
      <h1 class="navbar-brand m-0 fs-4 fw-bold">
        みどり市ポータル
      </h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMidori" aria-controls="navbarMidori" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMidori">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a href="#" class="nav-link text-white fw-normal">
              ホーム
            </a>
          </li>
          <li class="nav-item">
            <router-link to="meals" class="nav-link text-white fw-normal">
              グルメ
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="trash" class="nav-link text-white fw-normal">
              ごみカレンダー
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default {
  name: 'PageHeader',
}
</script>
