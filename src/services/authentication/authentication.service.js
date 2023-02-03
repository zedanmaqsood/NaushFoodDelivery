import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA4yexJwDsBLSIr3tD849tdYZ1EdFXV6vE",
  authDomain: "naushfood-f2d34.firebaseapp.com",
  projectId: "naushfood-f2d34",
  storageBucket: "naushfood-f2d34.appspot.com",
  messagingSenderId: "19326605675",
  appId: "1:19326605675:web:dfd2cd14bd24aca978542e",
};

const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
