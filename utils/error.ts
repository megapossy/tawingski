export const error = {
  createError: (message: string, code = 100) => {
    const er = new Error(message);
    Object.assign(er, { code: code });
    return er;
  },
};
