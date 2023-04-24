<template>
  <div>
    <div class="container-fluid overflow-hidden">
      <div class="max-width py-3 mx-auto">
        <div class="row mb-3">
          <div class="col">
            <h1 class="my-2 fs-3">{{ title }}</h1>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-end">
            <div class="mb-1 fs-7">{{ date }}</div>
            <div class="mb-1 fs-7">{{ name }}</div>
          </div>
        </div>
        <div class="row px-3">
          <div class="col">
            <slot name="col-main" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLayoutSkill',
  props: [
    'title',
    'date',
    'name'
  ]
}
</script>

<style scoped lang="scss">
  .max-width {
    max-width: 960px;
  }
</style>
