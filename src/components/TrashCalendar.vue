<template>
  <div class="container">
    <div class="p-3 my-2">
      <h2>{{ targetTrashAreaName }}ごみカレンダー</h2>
      <div class="mb-2 text-end" v-show="!canShowTrashArea">
        <button @click="canShowTrashArea = !canShowTrashArea" class="btn btn-sm btn-outline-secondary">地域を変更する</button>
      </div>
      <div class="form-floating mb-2 ms-auto" v-show="canShowTrashArea">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          v-model="targetTrashAreaId"
          @change="getTrashDates"
          >
          <option 
            v-for="trashArea in trashAreas"
            :value="trashArea.id" 
            :key="trashArea.id"
            v-show="trashArea.id"
            >{{ trashArea.name }}</option>
        </select>
        <label for="floatingSelect">地域設定</label>
      </div>
      <FullCalendar
        defaultView="dayGridMonth"
        :options='calendarOptions'
      />
    </div>
    <div class="p-3 my-2">
      <h2>FAQ</h2>
      <div class="accordion accordion-flush" id="accordionFlushFAQ">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              正式な情報はどこで確認できますか？
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              みどり市のHPをご確認ください。<a href="https://www.city.midori.gunma.jp/www/contents/1000000002006/" target="_blank">こちら</a>から「一般廃棄物（家庭系ごみ）の収集及び分別について（ゴミカレンダー含む）」を確認することができます。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              ごみの分別に迷っています。
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              <h6 class="fs-7 fw-bold">もえるゴミの例:</h6>
              <p>
                ・生ごみ<br/>
                ・布団、毛布<br/>
                ・プラスチック<br/>
                ・おむつ<br/>
                ・使い捨てカイロ<br/>
                ・アルミホイル、貝殻、落ち葉<br/>
                ・木の枝（長さ70cm以内、直径15cm以内）
              </p>
              <h6 class="fs-7 fw-bold">もえないゴミの例:</h6>
              <p>
                ・家電製品の一部（法律で定められた小型家電、家電リサイクル法対象製品を除く。）<br/>
                ・傘<br/>
                ・ガスコンロ<br/>
                ・割れたガラスやせともの<br/>
                ・刃物<br/>
                ・白熱電球、LED電球<br/>
                ・物干し竿（長さ70cm以内）<br/>
                ・一斗缶、塗料缶<br/>
                ※大（45リットル）の袋に入らない場合は粗大ごみです。
              </p>
              <h6 class="fs-7 fw-bold">公民館で回収するゴミ:</h6>
              <p>
                ・蛍光管（1.2m以内）<br/>
                ・スプレー缶、カセットボンベ<br/>
                ・紙パック<br/>
                ・白トレイ<br/>
                ・乾電池<br/>
                ・粗大ゴミ<br/>
                ※回収日は<a href="https://www.city.midori.gunma.jp/www/contents/1000000002006/" target="_blank">こちら</a>のゴミカレンダーをご確認ください。。
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              「小型家電」について教えてください。
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              スマートフォンやノートパソコンなどが対象です。市役所に回収ボックスが設置されています。<br/>
              詳しくは<a href="https://www.city.midori.gunma.jp/www/contents/1391731204692/" target="_blank">こちら</a>をご確認ください。。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              「家電リサイクル法」について教えてください。
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              エアコン、テレビ、冷蔵庫、洗濯機などが対象です。<br/>
              詳しくは<a href="https://www.city.midori.gunma.jp/www/contents/1000000002008/" target="_blank">こちら</a>をご確認ください。。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              清掃センターへ持ち込むことはできますか。
            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              可能です。主に平日の日中と、毎月の最終日曜日などで受け入れています。<br/>
              詳しくは<a href="https://www.city.midori.gunma.jp/www/contents/1000000002022/" target="_blank">こちら</a>をご確認ください。。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              スーパーや家電量販店などで回収しているものはありますか？。
            </button>
          </h2>
          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushFAQ">
            <div class="accordion-body text-start">
              白トレイ、牛乳パック、空き缶、ペットボトル、古着、古紙・段ボール、透明トレイ、インクカートリッジ、電池、蛍光管などを回収しています。<br/>
              詳しくは<a href="https://www.city.midori.gunma.jp/www/contents/1413261040106/" target="_blank">こちら</a>の「ごみ減量化・リサイクル協力店の回収品目一覧(563KB)(PDF文書)」をご確認ください。<br/>
              また<a href="https://www.kasumi.co.jp/tenpotop/gunma-ken/kiryu/416/" target="blank_">カスミ桐生相生店</a>や<a href="https://www.yaoko-net.com/store/store02/106.html" target="_blank">ヤオコー桐生相生店</a>なども利用できます。<br/>
              段ボールは回収店舗が少ないのでご注意ください。<a href="https://map.beisia.co.jp/map/182" target="_blank">ベイシアあかぼりモール店</a>なども利用できます。回収時間にご注意ください。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="small mx-auto my-2">
      <small>大間々町、東町については今後対応予定です。</small><br/>
      <small>その他のゴミ出しに関する情報はFAQをご確認ください。</small><br/>
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
.form-floating {
  max-width: 300px;
}
</style>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import jaLocale from '@fullcalendar/core/locales/ja';
import { getDatabase, ref, orderByChild } from "firebase/database";
import { doc, query, collection, getDoc, setDoc, getDocs, where, orderBy, startAfter, limit, Timestamp } from "firebase/firestore";
import db from '@/firebase/firestore';
import { format } from 'date-fns/fp';
import { getAuth, signInAnonymously } from "firebase/auth";

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
        events: [{}],
        dayCellContent: (date: object): object => {
          type MyObject = {
            [key: string]: any;
          };
          const retDate: MyObject = date
          return retDate.dayNumberText.replace("日", "");
        }
      },
      targetTrashAreaId: '',
      canShowTrashArea: false,
      trashAreas: [{}],
      trashTypes: [{}]
    }
  },
  mounted: async function() {
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
          borderColor: doc.data().borderColor,
          backgroundColor: doc.data().backgroundColor
        });
      });
    }
    await this.signInAnonymously();
    await this.getTrashArea();
    await this.getTrashDates();
  },
  methods: {
    getTrashArea: async function () {
      if (this.targetTrashAreaId) return;
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const trashArea = docSnap.data().trashArea.id
        this.targetTrashAreaId = trashArea;
        console.log(this.targetTrashAreaId);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    },
    getTrashDates: async function () {
      if (!this.targetTrashAreaId) return;
      this.calendarOptions.events = [];
      let dateNow = new Date();
      const trashDatesQuerySnap = await getDocs(
        query(
          collection(db, 'trashDates'),
          where('trashArea', '==', doc(db, 'trashAreas', this.targetTrashAreaId)),
          orderBy("targetDate"),
          startAfter(Timestamp.fromMillis(dateNow.setDate(dateNow.getDate() - 2))),
          limit(30)
        )
      );

      if (trashDatesQuerySnap.docs) {
        trashDatesQuerySnap.forEach(doc => {
          const trashType: any = this.trashTypes.find((trashType: any) => trashType.id == doc.data().trashType.id);
          this.calendarOptions.events.push({
            title: trashType.name,
            date: format('yyyy-MM-dd', doc.data().targetDate.seconds * 1000),
            borderColor: trashType.borderColor,
            backgroundColor: trashType.backgroundColor
          });
        });
      }

      this.canShowTrashArea = false;
    },
    signInAnonymously: async function () {
      const auth = getAuth();
      await signInAnonymously(auth)
        .then(() => {
          console.log("good");
        })
        .catch((error) => {
          console.log(error.message);
        });
      return auth;
    }
  },
  watch: {
    targetTrashAreaId: async function () {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;
      await setDoc(doc(db, "users", user.uid), {
        trashArea: doc(db, 'trashAreas/' + this.targetTrashAreaId)
      });
    }
  },
  computed: {
    targetTrashAreaName: function () {
      const trashArea: any = this.trashAreas.find((trashArea: any) => trashArea.id == this.targetTrashAreaId);
      const trashAreaName: string = trashArea ? trashArea.name : '';
      return trashAreaName;
    }
  }
});
</script>
