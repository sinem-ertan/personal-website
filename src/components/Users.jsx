import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Users() {
  const { t } = useTranslation();
  const { loading, data: users } = useSelector((store) => store.users);

  if (!loading && !users.length) {
    return <></>;
  }

  if (loading) {
    return (
      <div className="w-full p-20 justify-center items-center flex text-2xl dark:text-darkmodepalepurple">
        {t("loading")}
      </div>
    );
  }

  return (
    <div className="w-full flex justify-between">
      {users.map((user) => {
        return (
          <div className="w-3/12 flex flex-col p-20 pb-0">
            <div className="w-full">
              <img src={user.avatar} />
            </div>
            <div className="font-semibold text-center pt-5 dark:text-darkmodepalepurple">{`${user.first_name} ${user.last_name}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
