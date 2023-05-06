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
  mounted:  function() {
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
  },
});
</script>
