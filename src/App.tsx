import { useTranslation } from "react-i18next";
import { useAppContext } from "./context/AppContext";

function App() {
  const { t } = useTranslation();
  const { siteTitle, locale, setLocale, currentPage, navigateTo, pages } = useAppContext();
  const pageContent = pages[currentPage];
  const isHome = currentPage === "home";

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-6 md:px-10 md:pb-16 md:pt-8">
        <header className="flex flex-col gap-6 border-b border-base-300/70 pb-6 md:flex-row md:items-center md:justify-between">
          <button
            className="font-display text-left text-3xl tracking-[-0.04em] text-base-content transition-opacity hover:opacity-70 md:text-4xl"
            onClick={() => navigateTo("home")}
            type="button"
          >
            {siteTitle}
          </button>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap gap-5 text-sm uppercase tracking-[0.24em] text-base-content/65">
              <button className={navLinkClass(currentPage === "home")} onClick={() => navigateTo("home")} type="button">
                {t("nav.home")}
              </button>
              <button className={navLinkClass(currentPage === "rsvp")} onClick={() => navigateTo("rsvp")} type="button">
                {t("nav.rsvp")}
              </button>
              <button
                className={navLinkClass(currentPage === "love-story")}
                onClick={() => navigateTo("love-story")}
                type="button"
              >
                {t("nav.loveStory")}
              </button>
            </nav>

            <div className="flex items-center gap-2 rounded-full border border-base-300 bg-white/70 p-1">
              <span className="px-3 text-[11px] uppercase tracking-[0.25em] text-base-content/45">
                {t("common.language")}
              </span>
              <button
                className={localeButtonClass(locale === "en")}
                onClick={() => setLocale("en")}
                type="button"
              >
                EN
              </button>
              <button
                className={localeButtonClass(locale === "es")}
                onClick={() => setLocale("es")}
                type="button"
              >
                ES
              </button>
            </div>
          </div>
        </header>

        <section className="grid flex-1 items-center gap-14 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <div className="space-y-8">
            <p className="text-xs uppercase tracking-[0.38em] text-base-content/50">
              {pageContent.eyebrow}
            </p>
            <div className="space-y-6">
              <h1 className="font-display max-w-4xl text-5xl leading-[0.96] tracking-[-0.05em] text-base-content md:text-7xl">
                {isHome ? siteTitle : pageContent.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-base-content/68 md:text-xl">
                {isHome ? pageContent.headline : pageContent.description}
              </p>
              {isHome ? (
                <button
                  className="inline-flex items-center border-b border-base-content pb-1 text-sm uppercase tracking-[0.24em] text-base-content transition-opacity hover:opacity-65"
                  onClick={() => navigateTo("love-story")}
                  type="button"
                >
                  {t("home.cta")}
                </button>
              ) : (
                <p className="text-xs uppercase tracking-[0.3em] text-base-content/45">
                  {t("common.comingSoon")}
                </p>
              )}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(145deg,_rgba(191,212,226,0.45),_rgba(244,239,230,0.92)_48%,_rgba(243,180,154,0.38))] p-8 shadow-[0_30px_80px_rgba(143,175,196,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_35%)]" />
            <div className="relative space-y-10">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-base-content/45">
                  {t("home.subtitle")}
                </p>
                <p className="font-display text-3xl leading-tight tracking-[-0.04em] text-base-content md:text-4xl">
                  {isHome ? pageContent.description : siteTitle}
                </p>
              </div>

              <div className="grid gap-4 text-sm text-base-content/60 md:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/60 p-5 backdrop-blur-sm">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-base-content/40">01</p>
                  <p>{t("nav.home")}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/60 p-5 backdrop-blur-sm">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-base-content/40">02</p>
                  <p>{t("nav.rsvp")}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/60 p-5 backdrop-blur-sm md:col-span-2">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-base-content/40">03</p>
                  <p>{t("nav.loveStory")}</p>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function navLinkClass(isActive: boolean) {
  return `transition-colors hover:text-base-content ${isActive ? "text-base-content" : "text-base-content/55"}`;
}

function localeButtonClass(isActive: boolean) {
  return `rounded-full px-3 py-2 text-xs uppercase tracking-[0.22em] transition-colors ${
    isActive ? "bg-base-content text-base-100" : "text-base-content/60 hover:text-base-content"
  }`;
}

export default App;
