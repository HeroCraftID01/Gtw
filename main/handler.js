// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set, get, child, onValue, push, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOVZwAU8Di0PLAO7JLG-M2s1xsw4nQNI8",
  authDomain: "chestsheetinfor.firebaseapp.com",
  databaseURL: "https://chestsheetinfor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chestsheetinfor",
  storageBucket: "chestsheetinfor.appspot.com",
  messagingSenderId: "364389133511",
  appId: "1:364389133511:web:40a6b83aba443dde4e22e2",
  measurementId: "G-21XGV3CCKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const dbRef = ref(db);
        const name = ref(db, 'System/' + "/Shut_Down" + date + "/reason");
        onValue(name, (snapshot) => {
          const data = snapshot.val();
            
        })