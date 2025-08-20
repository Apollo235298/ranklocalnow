import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LearnToRank = () => {
  useEffect(() => {
    document.title = "Learn to Rank in ChatGPT - LexingtonAI";
    const description = "Master the art of ranking in ChatGPT and other AI search engines. Learn proven strategies to get your content featured in AI responses and boost your visibility.";

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
    const canonicalUrl = `${window.location.origin}/learn-to-rank-chatgpt`;
    linkCanonical.setAttribute('href', canonicalUrl);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Learn to Rank in <span className="text-gradient">ChatGPT</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Master the strategies to get your content featured in AI search results and dominate the new era of search
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-primary mb-8">The Future of Search is Here</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  In 2025, the way people search for information has fundamentally changed. With 71% of Americans now using AI to search for information online, and zero-click searches increasing from 56% to 69% in just one year, businesses must adapt or risk becoming invisible.
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Why AI Search Matters</h3>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>• AI search visitors are 4.4x more valuable than traditional organic search visitors</li>
                  <li>• ChatGPT has 800 million weekly active users as of April 2025</li>
                  <li>• By 2028, AI search could capture 13% of informational and 6% of commercial search traffic</li>
                  <li>• Traditional search volume is predicted to drop by 25% by 2026</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Core Strategies to Rank in AI</h3>
                
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">1. Follow E-E-A-T Principles</h4>
                  <p className="text-muted-foreground">
                    Experience, Expertise, Authoritativeness, and Trustworthiness are crucial for AI systems to trust your content. Incorporating credible citations and statistics can improve visibility by 30-40% in AI-generated responses.
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">2. Optimize Your Robots.txt</h4>
                  <p className="text-muted-foreground">
                    Ensure AI bots can access your content by properly configuring your robots.txt file. This simple text file tells web crawlers which pages they can access. Without proper configuration, your content won't be ingested into large language models.
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">3. Implement Schema Markup</h4>
                  <p className="text-muted-foreground">
                    Structure your content with JSON-LD schema markup to help AI systems understand and present your content effectively. This includes marking prices, product names, FAQ answers, and other structured data.
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">4. Create AI-Friendly Content</h4>
                  <p className="text-muted-foreground">
                    Answer exact questions your buyers ask, add plain language summaries at the top of pages, include local proof and statistics, and build visuals that are easy for AI to describe and understand.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">GEO vs. SEO: What's the Difference?</h3>
                <p className="text-muted-foreground mb-6">
                  Generative Engine Optimization (GEO) is the practice of making your content favored inside AI answers like ChatGPT, Claude, Gemini, Perplexity, and Google's AI Overviews. It doesn't replace traditional SEO—it complements it. While SEO optimizes for link placement in search results, GEO structures content so AI systems can understand, trust, and cite it.
                </p>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">Ready to Dominate AI Search?</h3>
                  <p className="text-muted-foreground mb-4">
                    The businesses that implement proper GEO strategies now will be positioned to own visibility in their niche as this industry grows. Don't wait—start optimizing for AI search today.
                  </p>
                  <a 
                    href="/lead-form" 
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnToRank;