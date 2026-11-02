import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer" id="contact">
      <div className="section-wrap footer-main">
        <div>
          <p className="section-index">04 / {t("contact.kicker")}</p>
          <h2>{t("contact.heading")}</h2>
          <p className="footer-copy">{t("contact.intro")}</p>
        </div>
        <a className="button button-primary" href="https://github.com/AhmadWahebArifi" target="_blank" rel="noreferrer">
          {t("contact.cta")} <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} Ahmad Waheb Arifi</span>
        <span>{t("contact.footerNote")}</span>
        <a href="#top" className="back-to-top">{t("contact.backToTop")} <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
};

export default Footer;
