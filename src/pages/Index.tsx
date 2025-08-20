import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LearningCenter from "@/components/LearningCenter";
import FAQ from "@/components/FAQ";
import CRM from "@/components/CRM";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Rank Local Now by Josh Moon";
    const description = "Discover how your Kentucky business can adapt to AI search. From ChatGPT to Google AI, Rank Local Now helps you stay visible, save time, and grow revenue";

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const canonicalUrl = `${window.location.origin}/`;
    linkCanonical.setAttribute('href', canonicalUrl);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <LearningCenter />
      <CRM />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
