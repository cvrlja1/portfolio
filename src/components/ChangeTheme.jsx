import { useState, useEffect } from "react";


function ChangeTheme() {
    const [isDark, setIsDark] = useState(() => {
       return document.documentElement.classList.contains("dark");
    });

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.toggle("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    useEffect(() => {
        const Theme = localStorage.getItem("theme");
        if (Theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);


    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            aria-label="Toggle Dark Mode"
        >
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}

export default ChangeTheme;