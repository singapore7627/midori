<template>
  <div class="home">
    <PageHeader />
    <CreateTrash />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateTrash from '@/components/CreateTrash.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import { useHead } from 'unhead'

export default defineComponent({
  name: 'AdminTrashView',
  components: {
    CreateTrash,
    PageHeader,
    PageFooter,
  }
});
</script>
