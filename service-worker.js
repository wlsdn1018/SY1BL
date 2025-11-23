// Service Worker for Push Notifications
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyBQrZ3fxpjXAXT8i991iUReu-YnMYGN8jU",
    authDomain: "sy1bl-31462.firebaseapp.com",
    databaseURL: "https://sy1bl-31462-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sy1bl-31462",
    storageBucket: "sy1bl-31462.firebasestorage.app",
    messagingSenderId: "823520271852",
    appId: "1:823520271852:web:21b1d3239d6916f79174c9",
    measurementId: "G-8CXK5921NF"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// 백그라운드 메시지 수신
messaging.onBackgroundMessage((payload) => {
    console.log('백그라운드 메시지 수신:', payload);
    
    const notificationTitle = payload.notification.title || '공사관리 알림';
    const notificationOptions = {
        body: payload.notification.body || '새로운 업데이트가 있습니다.',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        vibrate: [500, 200, 500, 200, 500],
        tag: 'construction-notification',
        requireInteraction: true, // 사용자가 닫을 때까지 유지
        data: payload.data
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// 알림 클릭 시 앱 열기
self.addEventListener('notificationclick', (event) => {
    console.log('알림 클릭됨:', event);
    
    event.notification.close();
    
    // 앱 열기
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // 이미 열린 창이 있으면 포커스
            for (const client of clientList) {
                if (client.url.includes('construction_management') && 'focus' in client) {
                    return client.focus();
                }
            }
            // 새 창 열기
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});

// Service Worker 설치
self.addEventListener('install', (event) => {
    console.log('Service Worker 설치됨');
    self.skipWaiting();
});

// Service Worker 활성화
self.addEventListener('activate', (event) => {
    console.log('Service Worker 활성화됨');
    event.waitUntil(clients.claim());
});
