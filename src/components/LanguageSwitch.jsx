import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../actions/language";
import { setLanguage } from "../utils/localStorage";

function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language);

  useEffect(() => {
    dispatch(changeLanguage(i18n.language));
  }, []);

  const change = () => {
    const selectedLanguage = language === "en" ? "tr" : "en";

    dispatch(changeLanguage(selectedLanguage));

    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div
      className="text-xs font-semibold text-neutral-500 flex items-center cursor-pointer"
      onClick={change}
    >
      {language === "en" ? (
        <div>
          <span className="text-xs font-semibold text-darkpurple dark:text-darkmodelightpurple">
            {t("lang")}
          </span>
          {t("lang.switch")}
        </div>
      ) : (
        <div>
          {t("lang.switch")}
          <span className="text-xs font-semibold text-darkpurple dark:text-darkmodelightpurple ml-1">
            {t("lang")}
          </span>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;
