import * as yup from "yup";

const validations = yup.object().shape({
  height: yup
    .number("Sayı dışında karakter girmeyiniz!")
    .min(0, "Boy bilgisi negatif bir değer olamaz!")
    .required("Bu alan zorunludur!"),
  weight: yup
    .number("Sayı dışında karakter girmeyiniz!")
    .min(0, "Kilo bilgisi negatif olamaz!")
    .required("Bu alan zorunludur!"),
});

export default validations;
