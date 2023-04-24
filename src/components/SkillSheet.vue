<template>
  <div>
    <ComponentP title="職務要約" :contentsP="state.summaryContent" />
    <ComponentP title="知識・技術" :contentsP="state.knowledgeContent" />
    <ComponentP title="取得資格" :contentsP="state.certificationContent" />
    <ComponentCareer title="職務経歴" :careers="state.careerContent" />
    <ComponentP title="自己PR" :contentsP="state.prContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ComponentP from '@/components/utils/ComponentP.vue';
import ComponentCareer from '@/components/utils/ComponentCareer.vue';

export default defineComponent({
  setup() {
    const state = reactive<{ summaryContent: string[][], knowledgeContent: string[][], certificationContent: string[][], careerContent: object[], prContent: string[][] }>({
      summaryContent: [],
      knowledgeContent: [],
      certificationContent: [],
      careerContent: [],
      prContent: []
    });

    state.summaryContent.push([
      "みどり市について",
    ]);
    state.summaryContent.push([
      "笠懸町、大間々町、東村",
    ]);
    state.knowledgeContent.push([
      "【HTML / CSS】",
    ]);
    state.certificationContent.push([
      "東武鉄道"
    ]);
    state.prContent.push([
      "(参考)",
    ]);

    state.careerContent.push(
      {
        period: "2018/06 - 2018/12",
        projectName: "水道料金",
        purpose: [
          "経営",
        ],
        phase: "リース",
        teamSize: "8人",
        tech: ["Java ( Liferay, Spring Boot )", "SQLServer"],
        duties: [
          "ウォーターフォール",
        ],
        skills: [
          "Java",
        ],
        comments: [
          "公営",
        ]
      }
    );

    return { state };
  },
  name: 'SkillSheet',
  components: {
    ComponentP,
    ComponentCareer,
  },
});
</script>
