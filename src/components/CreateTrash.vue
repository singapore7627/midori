<template>
  <div class="container">
    <div class="p-3 my-2">
      <h2>ごみカレンダー追加フォーム</h2>
      <div class="p-3">
        <div class="form-floating mb-3">
          <select v-model="inputArea" class="form-select" id="trashArea" aria-label="地区">
            <option selected>地区を選んでください</option>
            <option v-for="trashArea in trashAreas" :key="trashArea.id" :value="trashArea.id">{{ trashArea.name }}</option>
          </select>
          <label for="trashArea">地区</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="inputType" class="form-select" id="trashType" aria-label="種類">
            <option selected>ごみの種類を選んでください</option>
            <option v-for="trashType in trashTypes" :key="trashType.id" :value="trashType.id">{{ trashType.name }}</option>
          </select>
          <label for="trashType">ごみの種類</label>
        </div>
        <form class="form-floating mb-3">
          <input v-model="inputYear" type="text" class="form-control" id="targetYear" placeholder="YYYY">
          <label for="targetYear">対象年</label>
        </form>
        <form class="form-floating mb-3">
          <input v-model="inputMonth" type="text" class="form-control" id="targetMonth" placeholder="MM">
          <label for="targetMonth">対象月</label>
        </form>
        <form class="form-floating mb-3">
          <input v-model="inputDay" type="text" class="form-control" id="targetDay" placeholder="DD">
          <label for="targetDay">対象日</label>
        </form>
        <button @click="createTrash" class="btn btn-primary">登録</button>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-item {
  height: 70vh;
}
.caption {
  letter-spacing: 0.2em;
  background-color: rgba(0, 20, 0, 0.5);
}
</style>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { getDatabase, ref, orderByChild } from "firebase/database";
import { doc, query, collection, getDoc, getDocs, addDoc, Timestamp } from "firebase/firestore";
import db from '@/firebase/firestore';

export default defineComponent({
  name: 'MealList',
  data: function() {
    return {
      inputArea: '',
      inputType: '',
      inputYear: '',
      inputMonth: '',
      inputDay: '',
      trashAreas: [{}],
      trashTypes: [{}]
    }
  },
  mounted: async function() {
    const trashTypesQuerySnap = await getDocs(
      query(
        collection(db, 'trashTypes')
      )
    );
    if (trashTypesQuerySnap.docs) {
      trashTypesQuerySnap.forEach(doc => {
        this.trashTypes.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
    }

    const trashAreasQuerySnap = await getDocs(
      query(
        collection(db, 'trashAreas')
      )
    );
    if (trashAreasQuerySnap.docs) {
      trashAreasQuerySnap.forEach(doc => {
        this.trashAreas.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
    }
  },
  methods: {
    createTrash: async function () {
      let targetDate = new Date(parseInt(this.inputYear), parseInt(this.inputMonth) - 1, parseInt(this.inputDay));
      let trashDate = {
        trashArea: doc(db, 'trashAreas/' + this.inputArea),
        trashType: doc(db, 'trashTypes/' + this.inputType),
        targetDate: Timestamp.fromDate(targetDate)
      };
      const docRef = await addDoc(collection(db, "trashDates"), trashDate);
      alert(docRef.path + docRef.id + 'が新規に登録されました。' )
    }
  }
});
</script>
