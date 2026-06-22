// firebase-config.js

// 1. Import fungsi-fungsi yang dibutuhkan dari CDN Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 2. Kunci konfigurasi dari Firebase Console (Ganti dengan data asli milikmu)
const firebaseConfig = {
  apiKey: "AIzaSyBv2hjCX18ZbwfmlcLlEvc5oXZ2sFtQnSw",
  authDomain: "web-absensi-sekolah-ai.firebaseapp.com",
  projectId: "web-absensi-sekolah-ai",
  storageBucket: "web-absensi-sekolah-ai.firebasestorage.app",
  messagingSenderId: "161251479824",
  appId: "1:161251479824:web:69d109d2e5a4344d5f5595",
  measurementId: "G-Y6CV4FVCD2"
};

// 3. Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);

// 4. Ekspor layanan Auth dan Firestore agar bisa di-import oleh file HTML lain
export const auth = getAuth(app);
export const db = getFirestore(app);