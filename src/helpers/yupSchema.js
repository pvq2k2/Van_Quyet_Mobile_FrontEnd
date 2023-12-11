import * as yup from "yup";

export const registerSchema = yup
  .object({
    userName: yup
      .string()
      .required("Vui lòng nhập tên tài khoản !")
      .matches(
        /^[a-z0-9_]+$/,
        "Tên tài khoản không được chứa chữ hoa, dấu cách và ký tự đặc biệt !",
      )
      .max(15, "Tên tài khoản không được quá 15 ký tự !")
      .trim(),
    fullName: yup.string().required("Vui lòng nhập họ và tên !").trim(),
    email: yup
      .string()
      .required("Vui lòng nhập email !")
      .email("Vui lòng nhập đúng định dạng email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Vui lòng nhập đúng định dạng email",
      )
      .trim(),
    numberPhone: yup
      .string()
      .required("Vui lòng nhập số điện thoại !")
      .matches(
        /^(?:\+84|0)(?:3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/,
        "Vui lòng nhập đúng định dạng số điện thoại",
      )
      .trim(),

    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu !")
      .matches(
        /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/,
        "Mật khẩu phải có chữ hoa, chữ thường, chữ số và kí tự đặc biệt !",
      )
      .trim(),

    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
      .matches(
        /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/,
        "Mật khẩu phải có chữ hoa, chữ thường, chữ số và kí tự đặc biệt !",
      )
      .trim(),
  })
  .required();

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập email !")
      .email("Vui lòng nhập đúng định dạng email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Vui lòng nhập đúng định dạng email",
      )
      .trim(),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu !")
      .matches(
        /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/,
        "Mật khẩu phải có chữ hoa, chữ thường, chữ số và kí tự đặc biệt !",
      )
      .trim(),
  })
  .required();

export const forgotPasswordSchema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập email !")
      .email("Vui lòng nhập đúng định dạng email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Vui lòng nhập đúng định dạng email",
      )
      .trim(),
  })
  .required();

export const resetPasswordSchema = yup
  .object({
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu !")
      .matches(
        /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/,
        "Mật khẩu phải có chữ hoa, chữ thường, chữ số và kí tự đặc biệt !",
      )
      .trim(),

    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
      .matches(
        /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]+$/,
        "Mật khẩu phải có chữ hoa, chữ thường, chữ số và kí tự đặc biệt !",
      )
      .trim(),
  })
  .required();
