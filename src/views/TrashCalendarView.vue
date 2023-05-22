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
import { useHead } from 'unhead'

export default defineComponent({
  name: 'HomeView',
  components: {
    TrashCalendar,
    PageHeader,
    PageFooter,
  },
  mounted() {
    useHead({
      title: '笠懸町ごみカレンダー | みどり市ポータル',
      meta: [
        {
          name: 'description',
          content: 'みどり市のポータルサイトです。市民の生活に役立つ情報を発信します。',
        },
        {
          name: 'keywords',
          content: 'みどり市, 笠懸町, 大間々町, 東村, ごみカレンダー, ごみ, 観光, グルメ, ランチ',
        },
      ],
    });
  }
});
</script>
