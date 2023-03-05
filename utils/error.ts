export const error = {
  create: (message: string | object, code: number | string = 100) => {
    if (typeof message === "string") {
      const er = new Error(message);
      Object.assign(er, { code: code });
      return er;
    } else {
      return message;
    }
  },
};
