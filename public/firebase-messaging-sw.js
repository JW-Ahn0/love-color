/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyBYXmj_6ayXGZEIYkxHqJ1hhjcd4JLmwDg",
  authDomain: "love-to-color.firebaseapp.com",
  projectId: "love-to-color",
  storageBucket: "love-to-color.firebasestorage.app",
  messagingSenderId: "322789676043",
  appId: "1:322789676043:web:123b7eed12aa22f74b230e",
};

firebase.initializeApp(firebaseConfig);

self.addEventListener("install", function (e) {
  console.log("[FCM Service Worker] installed");
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("[FCM Service Worker] actived", e);
});

// Web Push 이벤트 처리
self.addEventListener("push", function (e) {
  if (!e.data.json()) return;

  const resultData = e.data.json().notification;
  const notificationTitle = resultData.title;
  const notificationOptions = {
    body: resultData.body,
    icon: resultData.image, // 웹 푸시 이미지는 icon
    tag: resultData.tag,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Web Push 알림 클릭 핸들러
self.addEventListener("notificationclick", function (event) {
  console.log("notification click");
  const url = "/";
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});
