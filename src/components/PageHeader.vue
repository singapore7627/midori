<template>
  <header>
    <div class="px-3 py-2 bg-primary text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div class="col-4 me-lg-auto text-start fs-4">
            みどり市ポータル
          </div>
          <ul class="nav col-8 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" class="nav-link text-white">
                ホーム
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                ごみカレンダー
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default {
  name: 'PageHeader',
}
</script>
