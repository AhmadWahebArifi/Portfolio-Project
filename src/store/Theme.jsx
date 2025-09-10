import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSun, setIsSun] = useState(theme === "light"); // State to track sun/moon

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsSun(false); // Set to moon when theme is dark
    } else {
      document.documentElement.classList.remove("dark");
      setIsSun(true); // Set to sun when theme is light
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark"); // Toggle theme
    setIsSun(!isSun); // Toggle sun/moon state
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded  text-black dark:text-white transition"
    >
      <div>
        <div className=" w-6 h-6 rounded-full relative transition-all duration-400">
          <div
            className={` w-4 h-4 flex justify-center items-center rounded-full  absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ${
              isSun ? "left-1.5" : "left-[calc(100%-1.5rem)]"
            }`}
          >
            {isSun ? (
              <FaMoon className="text-gray-700 w-full h-full" />
            ) : (
              <FaSun className=" w-full h-full text-yellow-500" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
