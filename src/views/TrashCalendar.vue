<template>
  <div class="home">
    <PageHeader />
    <TrashCalendar />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TrashCalendar from '@/components/TrashCalendar.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TrashCalendar,
    PageHeader,
    PageFooter,
  },
});
</script>
