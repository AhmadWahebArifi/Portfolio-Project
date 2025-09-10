import { useState } from "react";
import { Menu, X, LucideLanguages } from "lucide-react";
import Theme from "../store/Theme";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

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
      <div className="max-w-6xl px-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-4 ">
          <div>
            <LucideLanguages
              onClick={languageHandler}
              className="cursor-pointer hover:text-blue-600"
              title={i18n.language === "fa" ? "English" : "فارسی"}
            />
          </div>
          <div>
            {" "}
            <Theme className="cursor-pointer" />
          </div>
          <div className="text-lg font-bold text-gray-800 dark:text-white">
            Ahmad Waheb's Portifolio
          </div>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium dark:text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden flex">
          <button
            onClick={MenuHandler}
            className="text-gray-700 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
            // `overflow-hidden` can be important to clip content during animation
            initial="hidden" // Start with the "hidden" variant
            animate="visible" // Animate to the "visible" variant when present
            exit="hidden" // Animate to "hidden" when being removed
            variants={menuVariants} // Use the defined variants
          >
            <ul className="flex flex-col items-center gap-4 p-4 text-gray-700 dark:text-gray-200 font-medium">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  className="w-full text-center"
                  // Optional: Animate list items individually
                  // variants={listItemVariants}
                  // initial="hidden" // if not staggering from parent
                  // animate="visible" // if not staggering from parent
                  // transition={{ delay: index * 0.05 }} // Simple stagger if not using parent stagger
                >
                  <a
                    href={link.href}
                    className="block py-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                    onClick={() => setIsOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </a>
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
