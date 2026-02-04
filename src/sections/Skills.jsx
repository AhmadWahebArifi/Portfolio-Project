import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import img2 from "../assets/skills/web1.gif";

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [showCards, setShowCards] = useState("all");
  const sectionRef = useRef(null);
  // Use amount: 0.6 so animation triggers when 60% of section is visible
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const activeClasses = "bg-primary text-blue-800 dark:text-red-600";
  const inactiveClasses =
    "text-black dark:text-white dark:hover:text-blue-800 hover:bg-primary hover:text-blue-600";

  const filters = t("skills.filters", { returnObjects: true });
  const cards = t("skills.cards", { returnObjects: true });

  // Animation variants for the section and cards
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2.2, staggerChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div className="-mx-4 flex flex-wrap" variants={sectionVariants}>
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-[60px] max-w-[510px] text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <span className="mb-2 block text-lg font-semibold text-primary">
                {t("nav.skills")}
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]">
                {t("skills.heading")}
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                {t("skills.subheading")}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="-mx-4 flex flex-wrap justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <div className="w-full px-4">
            <ul className="mb-12 flex flex-wrap justify-center space-x-1">
              {filters.map((category) => (
                <li className="mb-1" key={category}>
                  <button
                    onClick={() => setShowCards(category)}
                    className={`inline-block rounded-lg px-3 sm:px-5 py-2 text-center text-sm sm:text-base font-semibold hover:scale-110 md:py-3 lg:px-8 ${
                      showCards === category ? activeClasses : inactiveClasses
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Portfolio Cards */}
        <motion.div className="-mx-4 flex flex-wrap" variants={sectionVariants}>
          {cards
            .filter(
              (project) =>
                showCards === "all" || showCards === project.category,
            )
            .map((project, index) => (
              <motion.div
                key={index}
                className="w-full px-2 sm:px-4 md:w-1/2 lg:w-1/3"
                variants={cardVariants}
              >
                <div className="relative mb-8 sm:mb-12 px-2 sm:px-4">
                  <div className="overflow-hidden rounded-[10px]">
                    <img src={img2} alt={project.title} className="w-full" />
                  </div>
                  <div className="relative z-10 mx-4 sm:mx-7 -mt-16 sm:-mt-20 rounded-lg bg-white px-2 sm:px-3 py-6 sm:py-[34px] text-center shadow-portfolio dark:text-white dark:bg-gray-900">
                    <span className="mb-2 block text-xs sm:text-sm font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-bold text-dark dark:text-white">
                      {project.title}
                    </h3>
                    <a
                      href="#"
                      className="inline-block rounded-md border border-stroke px-4 sm:px-7 py-2 sm:py-[10px] text-xs sm:text-sm font-medium hover:text-black transition hover:border-primary hover:bg-primary hover:scale-110 dark:hover:text-blue-600"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
