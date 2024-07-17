import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-between mt-10">
      <div className="w-16 h-16 rounded-full bg-lightpurple text-darkpurple flex items-center justify-center text-3xl font-semibold rotate-45 dark:bg-darkpurple dark:text-darkmodelightpurple">
        S
      </div>
      <nav className="flex w-3/12">
        <ul className="flex w-full justify-between items-center text-gray-500 dark:text-darkmodegray">
          <li className="cursor-pointer">
            <a href="#skills">{t("skills")}</a>
          </li>
          <li className="cursor-pointer">
            <a href="#projects">{t("projects")}</a>
          </li>
          <li className="text-darkpurple border-darkpurple pl-8 pr-8 pt-3 pb-3 border rounded-lg h-max dark:border-darkmodepalepurple dark:bg-darkmodepalepurple cursor-pointer">
            <a href="#footer">{t("hire.me")}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
