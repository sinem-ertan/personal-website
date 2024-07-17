import { useTranslation } from "react-i18next";

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "TailwindCSS",
  "Cypress",
  "VS Code",
  "Adobe Photoshop",
  "3DS Max",
];

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-20 mb-10" id="skills">
      <h2 className="text-5xl font-medium dark:text-paleblue">{t("skills")}</h2>
      <div className="w-full flex flex-wrap mt-10">
        {skillList.map((skill, index) => {
          return (
            <div
              key={index}
              className="w-1/3 text-3xl text-darkpurple pb-5 dark:text-darkmodelightpurple"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
