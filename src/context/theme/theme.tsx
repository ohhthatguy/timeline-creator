import { useEffect, useState, createContext, useContext } from "react";

type themeType = "dark" | "light" | "system";
type themeContextType =
  | {
      theme: themeType;
      setTheme: (theme: themeType) => void;
    }
  | undefined;

type alignmentContextType =
  | {
      alignment: "vertical" | "horizontal";
      setAlignment: (ele: "vertical" | "horizontal") => void;
    }
  | undefined;

const ThemeContext = createContext<themeContextType>(undefined);
const AlignmentContext = createContext<alignmentContextType>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const initalTheme =
    (localStorage.getItem("ui-theme") as themeType) || "system";

  const [theme, setTheme] = useState<themeType>(initalTheme);

  useEffect(() => {
    const root = window.document.documentElement; //selsect the main html file
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem("ui-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const AlignmentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const alignmentInLocalStorage =
    (localStorage.getItem("ui-alignment") as "vertical" | "horizontal") ||
    "vertical";
  const [alignment, setAlignment] = useState<"vertical" | "horizontal">(
    alignmentInLocalStorage,
  );

  useEffect(() => {
    localStorage.setItem("ui-alignment", alignment);
  }, [alignment]);

  return (
    <AlignmentContext.Provider value={{ alignment, setAlignment }}>
      {children}
    </AlignmentContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context is not set / a value is missing");
  return context;
};

export const useAlignment = () => {
  const context = useContext(AlignmentContext);
  if (!context)
    throw new Error("Alignmnet context is not set / a value is missing");
  return context;
};
