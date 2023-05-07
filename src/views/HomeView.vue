<template>
  <div class="home">
    <PageHeader />
    <TopInfo />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopInfo from '@/components/TopInfo.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import { useHead } from 'unhead'

export default defineComponent({
  name: 'HomeView',
  components: {
    TopInfo,
    PageHeader,
    PageFooter,
  },
  mounted() {
    useHead({
      title: 'みどり市ポータル',
      meta: [
        {
          name: 'description',
          content: 'みどり市のポータルサイトです。市民の生活に役立つ情報を発信します。',
        },
        {
          name: 'expires',
          content: '86400',
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
