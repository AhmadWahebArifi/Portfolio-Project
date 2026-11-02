import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import portrait from "../assets/myphoto.jpg";
import cv from "../assets/Waheb's CV.pdf";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero section-wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" />{t("hero.eyebrow")}</p>
        <h1>{t("hero.headline")}</h1>
        <p className="hero-intro">{t("hero.subtitle")}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {t("hero.viewWork")} <ArrowDown size={16} />
          </a>
          <a className="button button-quiet" href={cv} download>
            <Download size={16} /> {t("hero.download")}
          </a>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <div className="portrait-frame">
          <img src={portrait} alt={t("hero.portraitAlt")} />
        </div>
        <div className="portrait-caption">
          <span>{t("hero.portraitCaption")}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </div>
      </div>
      <a className="scroll-cue" href="#projects">
        <span>{t("hero.scroll")}</span><span className="scroll-line" />
      </a>
    </section>
  );
};

export default Hero;
