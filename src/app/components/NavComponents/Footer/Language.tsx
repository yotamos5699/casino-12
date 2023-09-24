import React from "react";
export const languages = [
  { icon: "ru", name: "Русский" },
  { icon: "pt", name: "Portugués" },
  { icon: "en", name: "English" },
  { icon: "tr", name: "Türkçe" },
  { icon: "de", name: "Deutsch" },
  { icon: "uk", name: "Українська" },
  { icon: "es", name: "Español" },
  { icon: "vi", name: "Tiếng Việt" },
  { icon: "fl", name: "Filippiiniläinen" },
  { icon: "zh", name: "中国人" },
  { icon: "fr", name: "Français" },
  { icon: "hy", name: "հայերեն" },
  { icon: "hi", name: "हिंदी" },
  { icon: "uz", name: "O`zbek" },
  { icon: "id", name: "Indonesia" },
  { icon: "az", name: "Azərbaycan" },
  { icon: "ja", name: "日本人" },
  { icon: "ka", name: "ქართული" },
  { icon: "ko", name: "한국어" },
  { icon: "kk", name: "Қазақ" },
  { icon: "pl", name: "Polskie" },
];
function Language() {
  return <div className="footer__language" v-on-clickaway="close"></div>;
}

export default Language;
