import { Firebase } from "@/services/Firebase";
import { useUserStore as useFBUserStore } from "@/store/useFirebase";

const _useFirebase = {
  actions: {
    init: {
      user: () => {
        const fbUserStore = useFBUserStore();
        fbUserStore.instance = new Firebase(config.firebase);
        return fbUserStore.instance;
      },
    },
  },
};

export const useFirebase = () => {
  return _useFirebase;
};
