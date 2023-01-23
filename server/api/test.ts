export default defineEventHandler(async (event) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(!!1);
    }, 3000);
  });

  return {
    api: "works",
  };
});
