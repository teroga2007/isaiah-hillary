import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import i18n from "../i18n";
import siteContent from "../data/siteContent.json";

type Locale = "en" | "es";
type PageKey = "home" | "rsvp" | "love-story";

type AppContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
  siteTitle: string;
  currentPage: PageKey;
  navigateTo: (nextPage: PageKey) => void;
  pages: typeof siteContent.pages;
};

const normalizeLocale = (value?: string): Locale => {
  if (value?.toLowerCase().startsWith("es")) {
    return "es";
  }

  return "en";
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const routeMap: Record<string, PageKey> = {
  "/": "home",
  "/rsvp": "rsvp",
  "/love-story": "love-story"
};

const pageToPathname: Record<PageKey, string> = {
  home: "/",
  rsvp: "/rsvp",
  "love-story": "/love-story"
};

const getPageFromPathname = (pathname: string): PageKey => routeMap[pathname] ?? "home";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => normalizeLocale(i18n.resolvedLanguage ?? i18n.language));
  const [currentPage, setCurrentPage] = useState<PageKey>(() => getPageFromPathname(window.location.pathname));

  useEffect(() => {
    void i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPathname(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => setLocaleState(nextLocale),
      siteTitle: siteContent.siteTitle,
      currentPage,
      navigateTo: (nextPage: PageKey) => {
        const nextPath = pageToPathname[nextPage];

        if (window.location.pathname !== nextPath) {
          window.history.pushState({}, "", nextPath);
        }

        setCurrentPage(nextPage);
      },
      pages: siteContent.pages
    }),
    [currentPage, locale]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
}
