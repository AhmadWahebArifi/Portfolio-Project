import { useState } from "react";
import { Menu, X, LucideLanguages } from "lucide-react";
import Theme from "../store/Theme";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  const MenuHandler = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -50, // Start 50px above its final position (or "-100%" to slide from top completely)
      transition: {
        duration: 0.2, // Faster exit
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0, // Slide to its natural position
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        // Optional: Add a slight delay or stagger for children if you animate list items too
        // delayChildren: 0.1,
        // staggerChildren: 0.05
      },
    },
  };

  // Optional: Variants for list items if you want a staggered effect
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const languageHandler = () => {
    const next = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(next);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white text-black shadow-md dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <LucideLanguages
              onClick={languageHandler}
              className="cursor-pointer hover:text-blue-600 transition-all duration-300 ease-in-out"
              title={i18n.language === "fa" ? "English" : "فارسی"}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Theme className="cursor-pointer transition-all duration-300 ease-in-out" />
          </motion.div>
          <div className="text-sm sm:text-base font-bold text-gray-800 dark:text-white hidden xs:block sm:block">
            Ahmad Waheb's Portfolio
          </div>
        </div>
        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-6 sm:gap-8 text-gray-700 font-medium dark:text-white">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-blue-600 transition-all duration-300 ease-in-out relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
          <motion.button
            onClick={MenuHandler}
            className="text-gray-700 dark:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile nav
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4 text-center text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-blue-600 transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )} */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
            // `overflow-hidden` can be important to clip content during animation
            initial="hidden" // Start with the "hidden" variant
            animate="visible" // Animate to the "visible" variant when present
            exit="hidden" // Animate to "hidden" when being removed
            variants={menuVariants} // Use the defined variants
          >
            <ul className="flex flex-col items-center gap-3 sm:gap-4 p-4 text-gray-700 dark:text-gray-200 font-medium">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  className="w-full text-center"
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="block py-3 px-4 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 ease-in-out text-base sm:text-lg relative group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </motion.a>
                </motion.li>
              ))}
              {/* Add Theme and Language switcher for mobile if needed */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
