import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const PrivacyPolicy = () => {
  useEffect(() => {
    // SEO: Title, description, canonical
    document.title = "Privacy Policy | Rola Duran Realtor";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "Read the Privacy Policy for Rola Lawand Duran, Realtor® in Lexington, KY. Learn how your information is collected, used, and protected.");

    // Canonical link
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    const canonicalUrl = `${window.location.origin}/privacy-policy`;
    link.setAttribute("href", canonicalUrl);

    // JSON-LD (WebPage)
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: canonicalUrl,
      inLanguage: "en-US",
      datePublished: "2020-08-01",
      description: "Privacy Policy for Rola Lawand Duran, Realtor® in Lexington, KY — how information is collected, used, and protected."
    });
    document.head.appendChild(ld);
    return () => {
      // Clean up JSON-LD when navigating away
      document.head.removeChild(ld);
    };
  }, []);
  return <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Privacy Policy – Rola Lawand Duran, Realtor® LLC</h1>
            <p className="text-muted-foreground mt-2">Effective Date: August 2020</p>
          </header>

          <article className="prose prose-invert max-w-none">
            <p className="text-foreground mb-6">
              Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your information when you visit my website or contact me for real estate services in Lexington, KY and surrounding areas.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">1. Information I Collect</h2>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Your name, phone number, and email address</li>
                <li>Property preferences or buying/selling needs</li>
                <li>Information you provide during calls, texts, or meetings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">2. How I Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Respond to your inquiries and requests</li>
                <li>Provide real estate services tailored to your needs</li>
                <li>Share updates on listings, market trends, and helpful resources</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">3. How I Protect Your Information</h2>
              <p className="text-foreground/90">
                Your information is stored securely and only accessible by authorized personnel. I do not sell or rent your personal data to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">4. Third-Party Services</h2>
              <p className="text-foreground/90">
                My website may use trusted third-party tools (such as analytics or email marketing services) that collect non-identifiable data to improve your experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">5. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-1 text-foreground/90">
                <li>Request a copy of your data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your personal information</li>
              </ul>
              <p className="mt-4 text-foreground/90">
                To exercise these rights, contact me at:<br />
                <span className="block mt-2">📧 <a className="underline hover:text-primary" href="mailto:rolalawand@gmail.com">rolalawand@gmail.com</a></span>
                <span className="block">📞 <a className="underline hover:text-primary" href="tel:+18592706789">(859) 270-6789</a></span>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-3">6. Updates to This Policy</h2>
              <p className="text-foreground/90">
                This Privacy Policy may be updated from time to time. The date at the top will reflect the most recent changes.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PrivacyPolicy;