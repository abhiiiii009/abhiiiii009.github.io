importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDuGNGyNXclE_n-zFdvszYSEFVKM25QzYE",
  authDomain: "smart-grocery-340b6.firebaseapp.com",
  projectId: "smart-grocery-340b6",
  storageBucket: "smart-grocery-340b6.firebasestorage.app",
  messagingSenderId: "838641807761",
  appId: "1:838641807761:web:848eee024ae7b084e6ea30"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  const { title, body } = payload.notification || {};
  if(title) {
    self.registration.showNotification(title, {
      body: body || '',
      icon: 'https://cdn.jsdelivr.net/npm/twemoji@14/2/72x72/1f6d2.png',
      badge: 'https://cdn.jsdelivr.net/npm/twemoji@14/2/72x72/1f6d2.png'
    });
  }
});
