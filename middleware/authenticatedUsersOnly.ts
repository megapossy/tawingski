import { useStore as useUserAuth } from "~~/store/user/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  let authenticated = true;

  const userAuthStore = useUserAuth();

  if (userAuthStore.isLoggedIn) {
    return;
  }
  return navigateTo({
    name: "login",
  });
});
