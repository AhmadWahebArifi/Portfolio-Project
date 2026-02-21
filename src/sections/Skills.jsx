import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import img2 from "../assets/skills/web1.gif";
import video1 from "../assets/skills/problemsolving.mp4";
import dbVideo from "../assets/skills/db.mp4";
import javaVideo from "../assets/skills/java.mp4";
import mernVideo from "../assets/skills/mern.mp4";
import pythonVideo from "../assets/skills/python.mp4";
import pyVideo from "../assets/skills/py.mp4";
import MouseFlare from "../component/MouseFlare";

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

  const videoMap = {
    "LAMP (Linux, Apache, MySQL, PHP/Laravel)": video1,
    "MERN (MongoDB, Express, React, Node)": mernVideo,
    "MySQL — schema design, joins, indexes, optimization": dbVideo,
    "MongoDB — aggregation, pipelines, sharding basics": javaVideo,
    "ETL Pipelines — Python, data warehousing concepts": pyVideo,
    "Python, Java, C++ — scripting, services, algorithms": pythonVideo,
    "Full-Stack": mernVideo,
    Databases: dbVideo,
    "Data/ETL": pyVideo,
    Languages: javaVideo,
    "Web Development": img2,
  };

  const getMediaForProject = (project) => {
    const media = videoMap[project.title] || videoMap[project.category] || img2;
    const isVideo =
      media &&
      (media.includes(".mp4") ||
        media.includes(".webm") ||
        media.includes(".ogg"));
    return { media, isVideo };
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
            <ul className="mb-12 flex flex-wrap justify-center space-x-2">
              {filters.map((category) => (
                <li className="mb-2" key={category}>
                  <button
                    onClick={() => setShowCards(category)}
                    className={`inline-block rounded-full px-4 sm:px-6 py-2 text-center text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-110 md:py-3 lg:px-8 shadow-md hover:shadow-lg ${
                      showCards === category
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                        : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-gray-200 dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-600"
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
                <MouseFlare>
                  <div className="relative mb-8 sm:mb-12 px-2 sm:px-4 group">
                    <div className="overflow-hidden rounded-[15px] shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      {(() => {
                        const { media, isVideo } = getMediaForProject(project);
                        return isVideo ? (
                          <video
                            src={media}
                            alt={project.title}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <img
                            src={media}
                            alt={project.title}
                            className="w-full transition-transform duration-300 group-hover:scale-110"
                          />
                        );
                      })()}
                    </div>
                    <div className="relative z-10 mx-4 sm:mx-7 -mt-16 sm:-mt-20 rounded-xl bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-6 sm:py-[34px] text-center shadow-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-2xl dark:bg-gray-900/95 dark:group-hover:bg-gray-900 dark:text-white">
                      <span className="mb-2 block text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        {project.category}
                      </span>
                      <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {project.title}
                      </h3>
                      <a
                        href="#"
                        className="inline-block rounded-full border border-gray-300 px-4 sm:px-7 py-2 sm:py-[10px] text-xs sm:text-sm font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-lg dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </MouseFlare>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
