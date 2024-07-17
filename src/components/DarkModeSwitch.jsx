import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../actions/theme";
import { setTheme } from "../utils/localStorage";

function DarkModeSwitch() {
  const dispath = useDispatch();
  const theme = useSelector((store) => store.theme);
  const { t } = useTranslation();

  const isDarkMode = theme === "dark";

  useEffect(() => {
    setTheme(theme);

    const html = document.getElementsByTagName("html")[0];

    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggle = (e) => {
    dispath(changeTheme(e.target.checked ? "dark" : "light"));
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isDarkMode}
        className="sr-only peer"
        onChange={toggle}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:after:border-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:bg-yellow  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-darkpurple"></div>
      <span className="ms-3 text-xs font-semibold text-neutral-500 uppercase">
        {isDarkMode ? t("light.mode") : t("dark.mode")}
      </span>
    </label>
  );
}

export default DarkModeSwitch;
