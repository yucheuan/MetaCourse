import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => { //“Render whatever was passed between <ThemeProvider>...</ThemeProvider>”
    const [theme, setTheme] = useState("light")

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
