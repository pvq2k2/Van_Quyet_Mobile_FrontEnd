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

//Admin Schema
export const productSchema = yup
  .object({
    name: yup.string().required("Vui lòng nhập tên sản phẩm !").trim(),
    price: yup.string().required("Vui lòng nhập giá gốc !").trim(),
    discount: yup
      .string()
      .required("Vui lòng nhập giảm giá !")
      .trim()
      .test("is-higher", "Giảm giá phải nhỏ hơn giá gốc", function (value) {
        const { price } = this.parent;
        const parsedPrice = parseInt(price.replace(/,/g, ""));
        const parsedDiscount = parseInt(value.replace(/,/g, ""));
        return parsedDiscount < parsedPrice;
      }),
    height: yup
      .number()
      .typeError("Chiều cao phải là một số !")
      .positive("Chiều cao phải là một số dương !")
      .max(150, "Chiều cao không được quá 150cm !")
      .min(1, "Chiều cao không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều cao !"),
    width: yup
      .number()
      .typeError("Chiều rộng phải là một số !")
      .positive("Chiều rộng phải là một số dương !")
      .max(150, "Chiều rộng không được quá 150cm !")
      .min(1, "Chiều rộng không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều rộng !"),
    length: yup
      .number()
      .typeError("Chiều dài phải là một số !")
      .positive("Chiều dài phải là một số dương !")
      .max(150, "Chiều dài không được quá 150cm !")
      .min(1, "Chiều dài không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều dài !"),
    weight: yup
      .number()
      .typeError("Khối lượng phải là một số !")
      .positive("Khối lượng phải là một số dương !")
      .max(30000, "Khối lượng không được quá 30000 gram !")
      .min(1, "Khối lượng không được nhỏ hơn 1 !")
      .required("Vui lòng nhập khối lượng !"),
    category: yup.string().required("Vui lòng chọn danh mục !").trim(),
    subCategoriesID: yup
      .string()
      .required("Vui lòng chọn danh mục con !")
      .trim(),
    description: yup.string().required("Vui lòng nhập mô tả !").trim(),

    image: yup
      .mixed()
      .test(
        "file",
        "Vui lòng chọn hình ảnh !",
        (value) => value instanceof FileList && value.length > 0,
      )
      .test(
        "fileType",
        "File này không phải file có định dạng ảnh !",
        (value) => {
          return (
            value &&
            value[0] &&
            [
              "image/jpeg",
              "image/png",
              "image/jpg",
              "image/gif",
              "image/bmp",
              "image/webp",
              "image/svg+xml",
            ].includes(value[0].type)
          );
        },
      )
      .test("fileSize", "Kích thước ảnh quá lớn !", (value) => {
        return value && value[0] && value[0].size <= 2000000;
      }),
  })
  .required();

export const updatedProductSchema = yup
  .object({
    name: yup.string().required("Vui lòng nhập tên sản phẩm !").trim(),
    price: yup.string().required("Vui lòng nhập giá gốc !").trim(),
    discount: yup
      .string()
      .required("Vui lòng nhập giảm giá !")
      .trim()
      .test("is-higher", "Giảm giá phải nhỏ hơn giá gốc", function (value) {
        const { price } = this.parent;
        const parsedPrice = parseInt(price.replace(/,/g, ""));
        const parsedDiscount = parseInt(value.replace(/,/g, ""));
        return parsedDiscount < parsedPrice;
      }),
    height: yup
      .number()
      .typeError("Chiều cao phải là một số !")
      .positive("Chiều cao phải là một số dương !")
      .max(150, "Chiều cao không được quá 150cm !")
      .min(1, "Chiều cao không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều cao !"),
    width: yup
      .number()
      .typeError("Chiều rộng phải là một số !")
      .positive("Chiều rộng phải là một số dương !")
      .max(150, "Chiều rộng không được quá 150cm !")
      .min(1, "Chiều rộng không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều rộng !"),
    length: yup
      .number()
      .typeError("Chiều dài phải là một số !")
      .positive("Chiều dài phải là một số dương !")
      .max(150, "Chiều dài không được quá 150cm !")
      .min(1, "Chiều dài không được nhỏ hơn 1 !")
      .required("Vui lòng nhập chiều dài !"),
    weight: yup
      .number()
      .typeError("Khối lượng phải là một số !")
      .positive("Khối lượng phải là một số dương !")
      .max(30000, "Khối lượng không được quá 30000 gram !")
      .min(1, "Khối lượng không được nhỏ hơn 1 !")
      .required("Vui lòng nhập khối lượng !"),
    category: yup.string().required("Vui lòng chọn danh mục !").trim(),
    subCategoriesID: yup
      .string()
      .required("Vui lòng chọn danh mục con !")
      .trim(),
    description: yup.string().required("Vui lòng nhập mô tả !").trim(),

    image: yup.mixed().when("fileClicked", {
      is: true,
      then: () =>
        yup
          .mixed()
          .test(
            "file",
            "Vui lòng chọn hình ảnh !",
            (value) => value instanceof FileList && value.length > 0,
          )
          .test(
            "fileType",
            "File này không phải là file hình ảnh!",
            (value) =>
              value &&
              value[0] &&
              [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/gif",
                "image/bmp",
                "image/webp",
                "image/svg+xml",
              ].includes(value[0].type),
          )
          .test("fileSize", "Kích thước ảnh quá lớn!", (value) => {
            return value && value[0] && value[0].size <= 2000000;
          }),
    }),
    fileClicked: yup.boolean(),
  })
  .required();

export const categoriesSchema = yup
  .object({
    name: yup.string().required("Vui lòng tên danh mục !").trim(),
    icon: yup
      .string()
      .required("Vui lòng chọn icon !")
      .max(1, "Icon chỉ có 1 ký tự !")
      .trim(),
  })
  .required();

export const subCategoriesSchema = yup
  .object({
    name: yup.string().required("Vui lòng tên danh mục !").trim(),
    image: yup
      .mixed()
      .test(
        "file",
        "Vui lòng chọn hình ảnh !",
        (value) => value instanceof FileList && value.length > 0,
      )
      .test(
        "fileType",
        "File này không phải file có định dạng ảnh !",
        (value) => {
          return (
            value &&
            value[0] &&
            [
              "image/jpeg",
              "image/png",
              "image/jpg",
              "image/gif",
              "image/bmp",
              "image/webp",
              "image/svg+xml",
            ].includes(value[0].type)
          );
        },
      )
      .test("fileSize", "Kích thước ảnh quá lớn !", (value) => {
        return value && value[0] && value[0].size <= 2000000;
      }),
  })
  .required();

export const updatedSubCategoriesSchema = yup
  .object({
    name: yup.string().required("Vui lòng nhập tên danh mục!").trim(),
    image: yup.mixed().when("fileClicked", {
      is: true,
      then: () =>
        yup
          .mixed()
          .test(
            "file",
            "Vui lòng chọn hình ảnh !",
            (value) => value instanceof FileList && value.length > 0,
          )
          .test(
            "fileType",
            "File này không phải là file hình ảnh!",
            (value) =>
              value &&
              value[0] &&
              [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/gif",
                "image/bmp",
                "image/webp",
                "image/svg+xml",
              ].includes(value[0].type),
          )
          .test("fileSize", "Kích thước ảnh quá lớn!", (value) => {
            return value && value[0] && value[0].size <= 2000000;
          }),
    }),
    fileClicked: yup.boolean(),
  })
  .required();

export const colorSchema = yup
  .object({
    name: yup.string().required("Vui lòng tên màu sắc !").trim(),
    value: yup
      .string()
      .required("Vui lòng chọn màu sắc !")
      .matches(
        /^(#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|rgba?\(\s*(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*(0(\.\d+)?|1(\.0+)?)\s*)?)?\)|hsla?\(\s*(\d+(\.\d+)?\s*,\s*\d+(\.\d+)?%\s*,\s*\d+(\.\d+)?%\s*(,\s*(0(\.\d+)?|1(\.0+)?)\s*)?)?\))$/,
        "Giá trị màu phải là hex, rgb và hsl !",
      )
      .trim(),
  })
  .required();

export const sizeSchema = yup
  .object({
    name: yup.string().required("Vui lòng tên kích cỡ !").trim(),
    value: yup.string().required("Vui lòng kích cỡ !").trim(),
  })
  .required();

export const productImageSchema = yup
  .object({
    title: yup.string().required("Vui lòng nhập tên ảnh !").trim(),
    colorID: yup.string().required("Vui lòng chọn màu !").trim(),
    image: yup
      .mixed()
      .test(
        "file",
        "Vui lòng chọn hình ảnh !",
        (value) => value instanceof FileList && value.length > 0,
      )
      .test(
        "fileType",
        "File này không phải file có định dạng ảnh !",
        (value) => {
          return (
            value &&
            value[0] &&
            [
              "image/jpeg",
              "image/png",
              "image/jpg",
              "image/gif",
              "image/bmp",
              "image/webp",
              "image/svg+xml",
            ].includes(value[0].type)
          );
        },
      )
      .test("fileSize", "Kích thước ảnh quá lớn !", (value) => {
        return value && value[0] && value[0].size <= 2000000;
      }),
  })
  .required();

export const updatedProductImageSchema = yup
  .object({
    title: yup.string().required("Vui lòng nhập tên ảnh!").trim(),
    colorID: yup.string().required("Vui lòng chọn màu !").trim(),
    image: yup.mixed().when("fileClicked", {
      is: true,
      then: () =>
        yup
          .mixed()
          .test(
            "file",
            "Vui lòng chọn hình ảnh !",
            (value) => value instanceof FileList && value.length > 0,
          )
          .test(
            "fileType",
            "File này không phải là file hình ảnh!",
            (value) =>
              value &&
              value[0] &&
              [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/gif",
                "image/bmp",
                "image/webp",
                "image/svg+xml",
              ].includes(value[0].type),
          )
          .test("fileSize", "Kích thước ảnh quá lớn!", (value) => {
            return value && value[0] && value[0].size <= 2000000;
          }),
    }),
    fileClicked: yup.boolean(),
  })
  .required();
