import { useState, useEffect } from "react";
import { policy, type Locale } from "./content/policy";

function App() {
  const [locale, setLocale] = useState<Locale>("pt");
  const content = policy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title =
      locale === "pt"
        ? "Termos de Uso e Política de Privacidade — Clube de Descontos"
        : "Terms of Use and Privacy Policy — Clube de Descontos";
  }, [locale]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <h1 className="text-lg font-bold text-foreground sm:text-xl">
            Clube de Descontos
          </h1>
          <div className="flex rounded-lg border border-border bg-muted/50 p-0.5">
            <button
              type="button"
              onClick={() => setLocale("pt")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Português
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-12">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-2xl font-bold text-foreground">
            {content.pageTitle}
          </h2>
          <div className="space-y-6">
            {content.sections.map((section, i) => (
              <section key={i} className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">
                  {section.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
