<template>
  <div class="container">
    <div class="p-3 my-2">
      <h2>笠懸町ごみカレンダー</h2>
      <FullCalendar
        defaultView="dayGridMonth"
        :options='calendarOptions' 
      />
    </div>
    <div class="small mx-auto">
      <small>当ホームページに掲載されている情報の正確性については万全を期しておりますが、利用者が当ホームページの情報を用いて行う一切の行為について、何らの責任を負うものではありません。</small>
    </div>
  </div>
</template>

<style>
.carousel-item {
  height: 80vh;
}
.caption {
  letter-spacing: 0.2em;
  background-color: rgba(0, 20, 0, 0.5);
}
.small {
  max-width: 600px;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja';
import { doc, getDoc } from "firebase/firestore";
import db from '@/firebase/firestore';

export default defineComponent({
  name: 'TrashCalendar',
  components: {
    FullCalendar
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        locale: jaLocale,
        events: [
          { 
            title: 'ペットボトル',
            date: '2023-05-17',
            borderColor: '#455500',
            backgroundColor: '#455500',
          }
        ],
        dayCellContent: (date: object): object => {
          type MyObject = {
            [key: string]: any;
          };
          const retDate: MyObject = date
          return retDate.dayNumberText.replace("日", "");
        }
      }
    }
  },
  mounted: async function() {
    const docRef = doc(db, "trashTypes", "bottles");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    let burnables: Array<string> = [
      '2023-05-09',
      '2023-05-12',
      '2023-05-16',
      '2023-05-19',
      '2023-05-23',
      '2023-05-26',
      '2023-05-30',
      '2023-06-02',
      '2023-06-06',
      '2023-06-09',
      '2023-06-13',
      '2023-06-16',
      '2023-06-20',
      '2023-06-23',
      '2023-06-27',
      '2023-06-30',
    ];
    burnables.forEach((burnable: string) => { 
      this.calendarOptions.events.push({
        title: '燃えるゴミ',
        date: burnable,
        borderColor: '#990000',
        backgroundColor: '#990000',
      });
    });
    let PETs: Array<string> = [
      '2023-06-21',
      '2023-07-19',
      '2023-08-16',
      '2023-09-20',
      '2023-10-18',
      '2023-11-15',
      '2023-12-20',
      '2024-01-17',
      '2024-02-21',
      '2024-03-20',
    ];
    PETs.forEach((PET: string) => { 
      this.calendarOptions.events.push({
        title: 'ペットボトル',
        date: PET,
        borderColor: '#455500',
        backgroundColor: '#455500',
      });
    });
    let cans: Array<string> = [
      '2023-05-18',
      '2023-06-15',
      '2023-07-20',
      '2023-08-17',
      '2023-09-21',
      '2023-10-19',
      '2023-11-16',
      '2023-12-21',
      '2024-01-18',
      '2024-02-15',
      '2024-03-21',
    ];
    cans.forEach((can: string) => { 
      this.calendarOptions.events.push({
        title: '缶',
        date: can,
        borderColor: '#252550',
        backgroundColor: '#252550',
      });
    });
    let bottles: Array<string> = [
      '2023-05-25',
      '2023-06-22',
      '2023-07-27',
      '2023-08-24',
      '2023-09-28',
      '2023-10-26',
      '2023-11-23',
      '2023-12-28',
      '2024-01-25',
      '2024-02-22',
      '2024-03-28',
    ];
    bottles.forEach((bottle: string) => { 
      this.calendarOptions.events.push({
        title: 'ビン',
        date: bottle,
        borderColor: '#552500',
        backgroundColor: '#552500',
      });
    });
  },
});
</script>
