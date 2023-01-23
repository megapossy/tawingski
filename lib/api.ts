// import { useFetch } from "@vueuse/core";
import { useLazyAsyncData, useLazyFetch } from "#app";

export enum Method {
  CONNECT = "CONNECT",
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
  TRACE = "TRACE",
}

export type Option = {
  host: string;
  endpoint: string;
  method: Method;
  payload: any;
  query: { [key: string]: string };
  authenticated?: boolean;
};

export const api = async (option?: Option) => {
  // useFetch()

  // const retVal = await useFetch("/api/test");
  const retVal = useLazyFetch("/api/test");

  console.log("api", retVal.data);

  return retVal;
};
