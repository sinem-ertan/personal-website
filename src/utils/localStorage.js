export const getTheme = () => {
  return localStorage.getItem("theme");
};

export const getLanguage = () => {
  return localStorage.getItem("language");
};

export const setTheme = (theme) => {
  return localStorage.setItem("theme", theme);
};

export const setLanguage = (language) => {
  return localStorage.setItem("language", language);
};
