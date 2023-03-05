// export default defineEventHandler(async (event) => {
//   await new Promise((res) => {
//     setTimeout(() => {
//       res(!!1);
//     }, 3000);
//   });

//   return {
//     api: "works",
//   };
// });

export default defineCachedEventHandler(
  async (event) => {
    const query = getQuery(event);
    const id = query.id;

    const result = await $fetch("https://fakestoreapi.com/products/" + id);

    return result;
  },
  { swr: true }
);
