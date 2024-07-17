import { useTranslation } from "react-i18next";

function Profile() {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-10 mb-10">
      <h2 className="text-5xl font-medium dark:text-paleblue">
        {t("profile")}
      </h2>
      <div className="w-full flex">
        <div className="w-5/12">
          <div className="text-darkpurple text-3xl mt-10 dark:text-darkmodelightpurple">
            {t("profile")}
          </div>
          <table className="mt-5 dark:text-white">
            <tbody>
              <tr>
                <td className="font-semibold pr-16 pb-3 dark:text-white">
                  {t("birthdate")}
                </td>
                <td className="pb-3 dark:text-white">22.09.1993</td>
              </tr>
              <tr>
                <td className="font-semibold pr-16 pb-3 dark:text-white">
                  {t("city")}
                </td>
                <td className="pb-3 dark:text-white">Muğla</td>
              </tr>
              <tr>
                <td className="font-semibold pr-16 pb-3 dark:text-white">
                  {t("education")}
                </td>
                <td className="pb-3 dark:text-white">
                  Osmangazi Ünv. Ekonomi
                  <br />
                  Lisans, 2015
                </td>
              </tr>
              <tr>
                <td className="font-semibold pr-16 pb-3 dark:text-white">
                  {t("role")}
                </td>
                <td className="pb-3 dark:text-white">Frontend Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-6/12">
          <div className="text-darkpurple text-3xl mt-10 dark:text-darkmodelightpurple">
            {t("about.me")}
          </div>
          <p className="text-gray-500 mt-8 dark:text-white">
            {t("about.me.text")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
