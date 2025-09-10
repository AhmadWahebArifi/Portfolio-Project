import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import image from "../assets/myphoto.jpg";
import img1 from "../assets/about/1.jpg";
import img2 from "../assets/about/2.jpg";
import img3 from "../assets/about/3.jpg";
import CV from "../assets/Waheb's CV.pdf";
// Animation Variants for Consistency
const profileVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  hover: { scale: 1.1, rotate: 5 },
};

// Keyframes for the glowing effect
const glowVariants = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(0, 255, 0, 0.0)",
      "0 0 15px rgba(0, 255, 0, 0.5)",
      "0 0 30px rgba(0, 255, 0, 0.3)",
      "0 0 15px rgba(0, 255, 0, 0.5)",
      "0 0 0px rgba(0, 255, 0, 0.0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation(isInView);
  const { t } = useTranslation();
  //use effect when page loads
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="sm:mt-12 flex flex-col lg:flex-row items-center justify-center h-screen px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-900 text-center">
        {/* Profile Section */}
        <motion.div
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-green-500 overflow-hidden mb-6 lg:mb-0 lg:mr-12"
          variants={profileVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{ boxShadow: "0 0 0px rgba(0, 255, 0, 0.0)" }}
            variants={glowVariants}
            animate="animate"
          >
            <motion.img
              src={image} // Replace with your profile picture path
              alt="Profile"
              className="w-full h-full object-cover"
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Combined Text Section */}
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {t("hero.greeting")}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t("hero.title")}
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          {/* Download Button */}
          <motion.a
            href={CV} // Place your file in public/files/CV.pdf
            download
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-500 hover:to-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            {t("hero.download")}
          </motion.a>
        </motion.div>
      </div>
      <section class="top-0 overflow-hidden bg-white pb-12 lg:pb-[90px]  dark:bg-gray-900">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap items-center justify-between">
            <div class="w-full px-4 lg:w-5/12">
              <div class="-mx-3 flex items-center sm:-mx-4">
                <div class="w-full m-2 px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    className="py-3 sm:py-4"
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: 75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 3, delay: 0.6 }}
                  >
                    <img src={img1} alt="LAMP & MERN" class="w-full rounded-md px-10" />
                  </motion.div>
                  <motion.div
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 2, delay: 1.2 }}
                    className="py-3 sm:py-4"
                  >
                    <img src={img2} alt="Databases & ETL" class="w-full rounded-md px-6" />
                  </motion.div>
                </div>
                <div class="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    ref={ref}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -75 },
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{ duration: 1, delay: 2 }}
                    className="relative z-10 my-4"
                  >
                    <img src={img3} alt="Cloud & DevOps" class="w-full rounded-md px-7" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div class="w-full px-12 lg:w-2/3 xl:w-7/12">
              <div class="mt-10 lg:-mt-0 mx-2">
                <span class=" font-serif mb-4 block text-lg font-semibold text-primary">
                  {t("hero.whatIDo")}
                </span>
                <h2 class="text-center font-serif mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                  {t("hero.headline")}
                </h2>
                <p class="font-mono mb-5 text-base text-body-color dark:text-dark-6">
                  {t("hero.points1")}
                  <br />{t("hero.points2")}
                  <br />{t("hero.points3")}
                </p>
                <p class="font-mono mb-8 text-base text-body-color dark:text-dark-6">
                  {t("hero.points4")}
                  <br />{t("hero.points5")}
                  <br />{t("hero.points6")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
