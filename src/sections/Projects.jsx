import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import img1 from "../assets/pr.jpg";
import img2 from "../assets/data.jpg";
import img3 from "../assets/pr.jpg";

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
              <div className="mb-6 sm:mb-8 lg:mb-10 overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-gray-950 dark:shadow-card dark:hover:shadow-3">
                <img
                  src={images[idx % images.length]}
                  alt="project"
                  className="w-full"
                />
                <div className="p-4 sm:p-6 md:p-7 lg:p-8 xl:p-9 text-center duration-300 hover:bg-blue-950 hover:text-white dark:hover:bg-inherit">
                  <h3>
                    <a
                      href="#"
                      className="mb-3 sm:mb-4 block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-semibold text-dark hover:text-primary dark:text-white"
                    >
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mb-5 sm:mb-7 text-sm sm:text-base leading-relaxed text-body-color">
                    {proj.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-full border border-gray-3 px-5 sm:px-7 py-2 text-sm sm:text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:bg-gray-900"
                  >
                    {t("projects.viewDetails")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
