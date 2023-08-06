<template>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { getToken, onMessage } from "firebase/messaging";
import { messaging, vapidKey } from "@/firebase/config";

export default ({
  mounted: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
         .then(registration => {
           registration.showNotification("バイブレーションの例", {
             body: "ブンブン! ブンブン!",
             icon: "../images/touch/chrome-touch-icon-192x192.png",
             vibrate: [200, 100, 200, 100, 200, 100, 200],
             tag: "vibration-sample",
           });
         })
    }
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, vapidKey)
        .then(async (currentToken) => {
          console.log(currentToken);// currentTokenがデバイスのトークンとなり、これは適宜データベースに保存して使用する。
        })
        .catch((e) => {
          console.log(e);
        });
      }
    });
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
    });
  }
});
</script>
