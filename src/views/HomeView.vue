<template>
  <div class="home">
    <PageLayoutSkill title="職務経歴書" date="2023年3月29日" name="渡辺貴義">
      <template #col-main>
        <SkillSheet/>
      </template>
    </PageLayoutSkill>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageLayoutSkill from '@/views/utils/PageLayoutSkill.vue'
import SkillSheet from '@/components/SkillSheet.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    PageLayoutSkill,
    SkillSheet,
  },
});
</script>
