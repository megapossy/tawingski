import vj from "validate.js";

import { huwaits } from "@/utils/helpers";
import { error as er } from "@/utils/error";

type FieldType = "username" | "password" | "confirmPassword" | "email";

type Constraint = {
  field: FieldType;
  value: (string | number) | (string | number)[];
};

type FieldConstraint = Partial<Record<FieldType, string[]>>;

const checkEmailDuplicate = async (
  value: string | number,
  options: boolean,
  key: string,
  attributes: FieldConstraint
) => {
  // console.log("checkEmailDuplicate", {
  //   value,
  //   options,
  //   key,
  //   attributes,
  // });

  // if (value === "asd@ggg.com") return undefined;
  // else return "^Duplicate Email!";

  return undefined;
};

const checkUsernameDuplicate = async (
  value: string | number,
  options: boolean,
  key: string,
  attributes: FieldConstraint
) => {
  // console.log("checkUsernameDuplicate", {
  //   value,
  //   options,
  //   key,
  //   attributes,
  // });

  // if (value === "asdf1234") return undefined;
  // else return "^Duplicate Username!";

  return undefined;
};

const VContraints = {
  email: {
    presence: true,
    email: true,
    // checkEmailDuplicate: false,
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
    // checkUsernameDuplicate: false,
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
    equality: {
      attribute: "password",
      message: "^Passwords are not equal",
    },
  },
};

export const validateFieldsAsync = async (
  toValidate: Constraint[]
): Promise<FieldConstraint> => {
  let _values = {};
  let _contraints = {};

  // async validators
  // custom validators asynchronous
  const VContraintsAsync = {
    ...VContraints,
    email: {
      ...VContraints.email,
      checkEmailDuplicate: true,
    },
    username: {
      ...VContraints.username,
      checkUsernameDuplicate: true,
    },
  };
  vj.validators.checkEmailDuplicate = checkEmailDuplicate;
  vj.validators.checkUsernameDuplicate = checkUsernameDuplicate;

  toValidate.forEach((el) => {
    _values = {
      ..._values,

      [el.field]: el.value,
    };
    _contraints = {
      ..._contraints,
      [el.field]: VContraintsAsync[el.field],
    };
  });

  return await vj.async(_values, _contraints);
};

export const validateFields = (toValidate: Constraint[]): FieldConstraint => {
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

  return vj(_values, _contraints);
};
