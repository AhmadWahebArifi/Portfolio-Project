import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../assets/pr.jpg";
import img2 from "../assets/data.jpg";
import img3 from "../assets/pr.jpg";
import MouseFlare from "../component/MouseFlare";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1 } },
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const { t } = useTranslation();

  const items = t("projects.items", { returnObjects: true });
  const images = [img1, img2, img3];

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="bg-gray-100 pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-gray-900"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1
        className="text-center font-semibold mb-8 sm:mb-10 text-lg sm:text-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2 }}
      >
        {t("projects.heading")}
      </motion.h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2 sm:-mx-4">
          {items.map((proj, idx) => (
            <motion.div
              key={idx}
              className="w-full sm:w-5/6 md:w-1/2 lg:w-1/3 px-2 sm:px-4"
              variants={cardVariants}
            >
              <MouseFlare>
                <div className="mb-6 sm:mb-8 lg:mb-10 overflow-hidden rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl duration-300 hover:shadow-2xl hover:scale-105 dark:bg-gray-900/90 dark:shadow-card dark:hover:shadow-3xl border border-gray-100 dark:border-gray-800">
                  <div className="overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    <img
                      src={images[idx % images.length]}
                      alt="project"
                      className="w-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-9 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-900">
                    <h3>
                      <a
                        href="#"
                        className="mb-3 sm:mb-4 block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        {proj.title}
                      </a>
                    </h3>
                    <p className="mb-5 sm:mb-7 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {proj.description}
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-full border border-gray-300 px-5 sm:px-7 py-2 text-sm sm:text-base font-medium text-gray-700 transition-all duration-300 hover:border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-lg dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400"
                    >
                      {t("projects.viewDetails")}
                    </a>
                  </div>
                </div>
              </MouseFlare>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
