import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const TermsOfService = () => {
  useEffect(() => {
    // SEO: Title, description, canonical
    document.title = "Terms of Service | Rola Duran Realtor";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "Review the Terms of Service for Rola Lawand Duran, Realtor® in Lexington, KY. Understand website use, services, and limitations.");

    // Canonical link
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    const canonicalUrl = `${window.location.origin}/terms-of-service`;
    link.setAttribute("href", canonicalUrl);

    // JSON-LD (WebPage)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms of Service",
      url: canonicalUrl,
      inLanguage: "en-US",
      datePublished: "2020-08-01",
      description: "Terms of Service for Rola Lawand Duran, Realtor® in Lexington, KY — rules for using the website and services."
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, []);
  return <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Terms of Service – Rola Lawand Duran, Realtor® LLC</h1>
            <p className="text-muted-foreground mt-2">Effective Date: August 2020</p>
          </header>

          <article className="prose prose-invert max-w-none">
            <p className="text-foreground mb-6">
              These Terms of Service outline the rules and conditions for using my website and services. By visiting this site or engaging my services, you agree to these terms.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">1. Services Provided</h2>
              <p className="text-foreground/90">
                I offer real estate consulting, buying and selling representation, property marketing, and development services in Lexington, KY and surrounding counties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">2. No Guarantee of Results</h2>
              <p className="text-foreground/90">
                While I work diligently to achieve the best possible outcome, I cannot guarantee specific results, such as exact selling prices, purchase acceptance, or timelines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">3. Use of Website</h2>
              <p className="text-foreground/90">By using this site, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Submit false or misleading information</li>
                <li>Attempt to hack, disrupt, or misuse the site</li>
                <li>Reproduce or distribute any site content without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">4. Intellectual Property</h2>
              <p className="text-foreground/90">
                All text, images, and branding on this site are owned by me and protected under copyright law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">5. Limitation of Liability</h2>
              <p className="text-foreground/90">
                I am not liable for any damages resulting from use of this site, including but not limited to loss of data, profits, or business opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">6. Links to Third-Party Sites</h2>
              <p className="text-foreground/90">
                This website may link to other sites. I am not responsible for the content or privacy practices of those sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">7. Changes to These Terms</h2>
              <p className="text-foreground/90">
                I may update these Terms at any time. Continued use of my website after updates means you accept the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">8. Contact Information</h2>
              <p className="text-foreground/90">
                For questions about these Terms, contact me at:
              </p>
              <p className="mt-2 text-foreground/90">
                <span className="block">📧 <a className="underline hover:text-primary" href="mailto:rolalawand@gmail.com">rolalawand@gmail.com</a></span>
                <span className="block">📞 <a className="underline hover:text-primary" href="tel:+18592706789">(859) 270-6789</a></span>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>;
};
export default TermsOfService;