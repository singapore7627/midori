importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyCrYWFx-Tl3wo_lqZ_DMItFdeihrP0sd_g",
  authDomain: "midori-city.firebaseapp.com",
  projectId: "midori-city",
  storageBucket: "midori-city.appspot.com",
  messagingSenderId: "301925790281",
  appId: "1:301925790281:web:a4e2da65c6c32ef0c58598",
  measurementId: "G-5DXPE10WCL"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title + "aaa";
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});