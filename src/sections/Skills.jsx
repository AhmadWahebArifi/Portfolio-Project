import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true });

  return (
    <section className="content-section stack-section" id="skills">
      <div className="section-wrap">
        <div className="section-heading">
          <p className="section-index">02 / {t("skills.kicker")}</p>
          <div>
            <h2>{t("skills.heading")}</h2>
            <p className="section-description">{t("skills.intro")}</p>
          </div>
        </div>

        <div className="stack-list">
          {groups.map((group, index) => (
            <div className="stack-row" key={group.label}>
              <span className="stack-number">0{index + 1}</span>
              <h3>{group.label}</h3>
              <ul className="tag-list">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
