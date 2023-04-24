<template>
  <div>
    <div class="row mb-4">
      <div class="col text-start">
        <h3 class="mb-2 fs-6 fw-bold">■{{ title }}</h3>
        <div class="w-100 mb-4" v-for="(career, index) in careers" :key="index">
          <h4 class="fs-7 fw-bold">No.{{ careers.length - index }} {{ career.period }} {{ career.projectName }}</h4>
          <div class="container-fluid border border-2 border-dark mx-3">
            <div class="row border-bottom border-1">
              <div class="col-6">
                <h5 class="fs-7 fw-bold my-2">プロジェクトの目的・説明</h5>
                <p>
                  <template v-for="(content, index) in career.purpose" :key="index">
                    {{ content }}
                    <template v-if="index + 1 < career.purpose.length">
                      <br/>
                    </template>
                  </template>
                </p>
              </div>
              <div class="col-2 border-start">
                <div class="row">
                  <h5 class="fs-7 fw-bold my-2">フェーズ</h5>
                  <p>
                    {{ career.phase }}
                  </p>
                </div>
                <div class="row">
                  <h5 class="fs-7 fw-bold my-2">人数</h5>
                  <p>
                    {{ career.teamSize }}
                  </p>
                </div>
              </div>
              <div class="col-4 border-start">
                <h5 class="fs-7 fw-bold my-2">主な技術</h5>
                <p>
                  <template v-for="(content, index) in career.tech" :key="index">
                    {{ content }}
                    <template v-if="index + 1 < career.tech.length">
                      <br/>
                    </template>
                  </template>
                </p>
              </div>
            </div>
            <div class="row border-bottom border-1">
              <div class="col-8">
                <h5 class="fs-7 fw-bold my-2">職務内容・役割</h5>
                <p>
                  <template v-for="(content, index) in career.duties" :key="index">
                    {{ content }}
                    <template v-if="index + 1 < career.duties.length">
                      <br/>
                    </template>
                  </template>
                </p>
              </div>
              <div class="col-4 border-start">
                <h5 class="fs-7 fw-bold my-2">スキル</h5>
                <p>
                  <template v-for="(content, index) in career.skills" :key="index">
                    {{ content }}
                    <template v-if="index + 1 < career.skills.length">
                      <br/>
                    </template>
                  </template>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5 class="fs-7 fw-bold my-2">コメント</h5>
                <p>
                  <template v-for="(content, index) in career.comments" :key="index">
                    {{ content }}
                    <template v-if="index + 1 < career.comments.length">
                      <br/>
                    </template>
                  </template>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentCareer',
  props: [
    'title',
    'careers'
  ]
}
</script>
