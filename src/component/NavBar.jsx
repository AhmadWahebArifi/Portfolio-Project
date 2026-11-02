import { useState } from "react";
import { ArrowUpRight, Languages, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { label: t("nav.work"), href: "#projects" },
    { label: t("nav.stack"), href: "#skills" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fa" ? "en" : "fa");
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="wordmark" href="#top" aria-label={t("nav.home")}>
          <span className="wordmark-mark">AW</span>
          <span>Ahmad Waheb Arifi</span>
        </a>

        <nav className={`main-nav${isOpen ? " is-open" : ""}`} aria-label={t("nav.label")}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="language-button" onClick={toggleLanguage} type="button" aria-label={t("nav.language")}>
            <Languages size={16} strokeWidth={1.7} />
            <span>{i18n.language === "fa" ? "EN" : "دری"}</span>
          </button>
          <a className="nav-cta" href="#contact">
            {t("nav.sayHello")} <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
