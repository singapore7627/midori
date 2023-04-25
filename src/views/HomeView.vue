<template>
  <div class="home">
    <PageHeader />
    <PageLayoutSkill title="みどり市" date="2023年3月29日" name="みどり市">
      <template #col-main>
        <SkillSheet />
      </template>
    </PageLayoutSkill>
    <div class="mt-auto">
      <PageFooter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutSkill from '@/views/utils/PageLayoutSkill.vue'
import SkillSheet from '@/components/SkillSheet.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PageLayoutSkill,
    SkillSheet,
    PageHeader,
    PageFooter,
  },
});
</script>
