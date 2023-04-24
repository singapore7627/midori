<template>
  <div>
    <div class="row mb-4">
      <div class="col text-start">
        <h3 class="mb-2 fs-6 fw-bold">■{{ title }}</h3>
        <p v-for="(contents, index) in contentsP" :key="index">
          <template v-for="(content, index) in contents" :key="index">
            {{ content }}
            <template v-if="index + 1 < contents.length">
              <br/>
            </template>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentP',
  props: [
    'title',
    'contentsP'
  ]
}
</script>
