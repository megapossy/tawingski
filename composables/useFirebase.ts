import { Firebase } from "@/services/Firebase";
import { useStore as useFBStore } from "@/store/useFirebase";

const _useFirebase = {
  actions: {
    init: {
      the: () => {
        const fbStore = useFBStore();
        fbStore.instance = new Firebase(config.firebase);
        return fbStore.instance;
      },
    },
  },
};

export const useFirebase = () => {
  return _useFirebase;
};
