import { useEffect } from "react";

const LeadForm = () => {
  useEffect(() => {
    // SEO: Title, description, canonical
    document.title = "Contact Rola Duran Realtor";

    const metaDescId = "meta-desc-lead-form";
    let meta = document.querySelector(`meta[name="description"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Contact Rola Duran Realtor in Lexington, KY. Fill out the form for a fast response."
    );

    const linkId = "canonical-lead-form";
    let link: HTMLLinkElement | null = document.querySelector(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  return (
    <main id="lead-form" className="min-h-screen bg-gradient-subtle py-16">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Contact Rola Duran Realtor
          </h1>
          <p className="text-muted-foreground mt-2">
            Fill out the form below and I will reach out to you ASAP. Once you submit the form, check you inbox SPAM folder and click "Report Not Spam" in order to get my messages!
          </p>
        </header>

        <section aria-label="Contact form" className="bg-background rounded-lg shadow-elegant p-4 md:p-6">
          <div style={{ width: "100%", height: 870 }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ZXhmoYI1jQfwMhXKnY9O"
              style={{ width: "100%", height: 870, border: "none", borderRadius: 8 }}
              id="inline-ZXhmoYI1jQfwMhXKnY9O"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Real Estate Broker Contact"
              data-height="870"
              data-layout-iframe-id="inline-ZXhmoYI1jQfwMhXKnY9O"
              data-form-id="ZXhmoYI1jQfwMhXKnY9O"
              title="Real Estate Broker Contact"
            />
          </div>
          {/* External script to initialize the embedded form */}
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </section>
      </div>
    </main>
  );
};

export default LeadForm;
