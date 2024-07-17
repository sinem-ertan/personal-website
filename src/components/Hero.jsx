import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Github, Linkedin } from "../icons";
import { useDispatch } from "react-redux";
import { fetchUsers, fetchUsersSuccess, fetchUsersFail } from "../actions/user";
import { getUsers } from "../api/user";

function Hero() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getUsersClick = () => {
    dispatch(fetchUsers());

    getUsers()
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data.data));
      })
      .catch(() => {
        dispatch(fetchUsersFail());

        toast.error(t("error"));
      });
  };

  return (
    <section className="w-full flex justify-between mt-10">
      <div className="w-7/12">
        <div className="flex w-full items-center">
          <hr className="w-20 border-darkpurple dark:border-darkmodelightpurple" />
          <div className="text-darkpurple text-lg ml-3 dark:text-darkmodelightpurple">
            Sinem Ertan Bayar
          </div>
        </div>
        <h1 className="text-7xl font-bold mt-8 dark:text-paleblue">
          {t("hero.title")}
        </h1>
        <p className="text-gray-500 mt-8 dark:text-white">{t("hero.text")}</p>
        <div className="w-full mt-8 flex">
          <a
            onClick={getUsersClick}
            className="text-white border-darkpurple bg-darkpurple pl-8 pr-8 pt-3 pb-3 border rounded-lg mr-3 flex w-max dark:bg-darkmodelightpurple dark:text-black dark:border-darkmodelightpurple cursor-pointer"
          >
            {t("hire.me")}
          </a>
          <a
            href="https://github.com/sinem-ertan"
            target="_blank"
            className="text-darkpurple border-darkpurple pl-8 pr-8 pt-3 pb-3 border rounded-lg mr-3 flex w-max dark:border-darkmodelightpurple dark:text-darkmodelightpurple cursor-pointer"
          >
            <Github />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sinem-ertan-394655238/"
            target="_blank"
            className="text-darkpurple border-darkpurple pl-8 pr-8 pt-3 pb-3 border rounded-lg mr-3 flex w-max dark:border-darkmodelightpurple dark:text-darkmodelightpurple cursor-pointer"
          >
            <Linkedin className="text-xl" />
            Linkedin
          </a>
        </div>
      </div>
      <div className="w-5/12 flex items-center">
        <img
          className="w-full rounded-xl"
          src="/working.png"
          alt="working-woman"
        />
      </div>
    </section>
  );
}

export default Hero;
