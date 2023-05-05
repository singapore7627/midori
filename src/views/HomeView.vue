<template>
  <div class="home">
    <PageHeader />
    <TopInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopInfo from '@/components/TopInfo.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TopInfo,
    PageHeader,
  },
});
</script>
