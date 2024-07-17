import { useTranslation } from "react-i18next";

const projectList = [
  {
    image: "/pizzaOrder.png",
    title: "Pizza Order",
    text: "project1",
    tags: ["react", "axios"],
    github: "https://github.com/sinem-ertan/fsweb-s7-challenge-pizza",
    site: "",
  },
  {
    image: "/x-logo.avif",
    title: "X ( Twitter )",
    text: "project2",
    tags: ["react", "redux", "axios"],
    github: "https://github.com/sinem-ertan/homework-twitter",
    site: "",
  },
  {
    image: "/points.jpg",
    title: "Journey",
    text: "project3",
    tags: ["react", "redux", "axios"],
    github: "",
    site: "",
  },
];

function Project({ image, title, text, tags, github, site }) {
  const { t } = useTranslation();

  return (
    <div className="w-3/12 flex flex-col content-start">
      <div className="w-full">
        <img src={image} className="h-56 object-cover" />
      </div>
      <div className="text-darkpurple text-3xl mt-5 dark:text-darkmodelightpurple">
        {title}
      </div>
      <p className="text-gray-500 text-sm mt-5 dark:text-white">{t(text)}</p>
      <div className="w-full flex mt-5">
        {tags.map((tag, index) => {
          return (
            <div
              className="rounded-lg border border-darkpurple text-darkpurple text-sm pb-1 pt-1 pr-4 pl-4 mr-2 dark:border-anotherpurple dark:text-anotherpurple"
              key={index}
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-between mt-5">
        <a
          className="text-darkpurple underline dark:text-darkmodepalepurple"
          target="_blank"
          href={github}
        >
          Github
        </a>
        <a
          className="text-darkpurple underline dark:text-darkmodepalepurple"
          target="_blank"
          href={site}
        >
          {t("view.site")}
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-10 mb-10" id="projects">
      <h2 className="text-5xl font-medium dark:text-paleblue">
        {t("projects")}
      </h2>
      <div className="w-full flex justify-between mt-10">
        {projectList.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
