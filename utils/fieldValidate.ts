import vj from "validate.js";

type FieldType = "username" | "password" | "confirmPassword" | "email";

type Constraint = {
  field: FieldType;
  value: (string | number) | (string | number)[];
};

const VContraints = {
  email: {
    presence: true,
    email: true,
  },
  username: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters",
    },
    format: {
      pattern: "[a-zA-Z0-9_]+",
      flags: "i",
      message: "can only contain a-z, 0-9 and underscore",
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: "must be at least 6 characters",
    },
  },
  confirmPassword: {
    presence: true,
    equality: "password",
  },
};

export const validateFields = (
  toValidate: Constraint[]
): Partial<Record<FieldType, string[]>> => {
  let _values = {};
  let _contraints = {};

  toValidate.forEach((el) => {
    _values = {
      ..._values,

      [el.field]: el.value,
    };
    _contraints = {
      ..._contraints,
      [el.field]: VContraints[el.field],
    };
  });

  return vj.validate(_values, _contraints);
};
