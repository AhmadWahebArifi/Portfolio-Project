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
        className="text-center font-semibold mb-10 text-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.2 }}
      >
        {t("projects.heading")}
      </motion.h1>
      <div className="container">
        <div className="flex flex-wrap">
          {items.map((proj, idx) => (
            <motion.div
              key={idx}
              className="w-5/6 ml-10 sm:w-full sm:ml-0 px-4 md:w-1/2 xl:w-1/3"
              variants={cardVariants}
            >
              <div className="mb-10 overflow-hidden rounded-3xl bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-gray-950 dark:shadow-card dark:hover:shadow-3">
                <img src={images[idx % images.length]} alt="project" className="w-full" />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 duration-300 hover:bg-blue-950 hover:text-white dark:hover:bg-inherit">
                  <h3>
                    <a
                      href="#"
                      className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                    >
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mb-7 text-base leading-relaxed text-body-color">
                    {proj.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 dark:hover:bg-gray-900"
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
