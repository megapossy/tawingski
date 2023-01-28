import { Firebase } from "@/services/Firebase";
import { useUserStore as useFBUserStore } from "@/store/useFirebase";

const _useFirebase = {
  actions: {
    init: {
      user: () => {
        const fbUserStore = useFBUserStore();
        fbUserStore.instance = new Firebase({
          apiKey: "AIzaSyCo0y1eq4eaU92XziF8mKmdx2f3HClbXVg",
          authDomain: "tawingski.firebaseapp.com",
          databaseURL: "https://tawingski-default-rtdb.firebaseio.com",
          projectId: "tawingski",
          storageBucket: "tawingski.appspot.com",
          messagingSenderId: "929731228554",
          appId: "1:929731228554:web:eccc30e11c8dc8ed714e73",
          measurementId: "G-FQJN5QFE8R",
        });
      },
    },
  },
};

export const useFirebase = () => {
  return _useFirebase;
};
