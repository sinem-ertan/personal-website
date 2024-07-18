import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-stone-50 w-full flex justify-center mt-20 dark:bg-darkmodeblack"
      id="footer"
    >
      <div className="flex w-full max-w-6xl pb-20 pt-20">
        <div className="w-full">
          <div className="w-5/12 text-5xl font-medium dark:text-paleblue">
            {t("together")}
          </div>
          <div className="w-full flex mt-14 justify-between">
            <div className="flex">
              <div>&#128073;</div>
              <div className="text-lg text-red underline ml-2  dark:text-palepurple">
                <a href="mailto:ssinemertan@gmail.com">
                  ssinemertan@gmail.com.tr
                </a>
              </div>
            </div>
            <div className="flex">
              <a
                className="text-lg font-medium dark:text-paleblue"
                target="_blank"
              >
                {t("blog")}
              </a>
              <a
                className="text-lg text-green ml-8 font-medium"
                href="https://github.com/sinem-ertan"
                target="_blank"
              >
                Github
              </a>
              <a
                className="text-lg text-blue ml-8 font-medium"
                href="https://www.linkedin.com/in/sinem-ertan-394655238/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
