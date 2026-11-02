import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import crmImage from "../assets/pr.jpg";
import shopImage from "../assets/image-01.jpg";
import dataImage from "../assets/data.jpg";

const projectImages = [crmImage, shopImage, dataImage];
const repositories = {
  sarmayayab: [
    { label: "frontend", url: "https://github.com/AhmadWahebArifi/SarmayaYab_frontend" },
    { label: "backend", url: "https://github.com/AhmadWahebArifi/SarmayaYab_backend" },
  ],
  shipsmart: [
    { label: "repository", url: "https://github.com/AhmadWahebArifi/ShipSmart" },
  ],
  provinceGame: [
    { label: "repository", url: "https://github.com/AhmadWahebArifi/Afghanistan-Province-Game" },
  ],
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section className="content-section projects-section" id="projects">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-index">01 / {t("projects.kicker")}</p>
          <div>
            <h2>{t("projects.heading")}</h2>
            <p className="section-description">{t("projects.intro")}</p>
          </div>
          <a className="text-link" href="https://github.com/AhmadWahebArifi" target="_blank" rel="noreferrer">
            {t("projects.github")} <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div className="project-image">
                <img src={projectImages[index % projectImages.length]} alt="" loading="lazy" />
              </div>
              <div className="project-copy">
                <p className="project-type">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={t("projects.technologies")}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-links">
                  {repositories[project.slug]?.map((repository) => (
                    <a href={repository.url} key={repository.url} target="_blank" rel="noreferrer">
                      {t(`projects.${repository.label}`)} <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
