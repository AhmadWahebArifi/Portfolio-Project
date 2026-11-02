import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="content-section about-section" id="about">
      <div className="section-wrap about-grid">
        <div>
          <p className="section-index">03 / {t("about.kicker")}</p>
          <h2>{t("about.heading")}</h2>
        </div>
        <div className="about-copy">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <div className="about-meta">
            <span><MapPin size={15} /> {t("about.location")}</span>
            <a href="https://github.com/AhmadWahebArifi" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
