<template>
  <div class="home">
    <PageHeader />
    <MealList />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MealList from '@/components/MealList.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import { useHead } from 'unhead'

export default defineComponent({
  name: 'MealView',
  components: {
    MealList,
    PageHeader,
    PageFooter,
  },
  mounted() {
    useHead({
      title: 'みどり市ポータル | グルメ紹介',
      meta: [
        {
          name: 'description',
          content: 'みどり市のグルメを紹介します。',
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
