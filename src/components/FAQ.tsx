import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "GEO vs. SEO",
      answer: "Generative Engine Optimization is the practice of making your content be favored inside AI answers. Think ChatGPT, Claude, Gemini, Perplexity, and Google's AI Overviews. It doesn't replace traditional SEO strategies, it complements it. Traditional SEO practices involve optimizing your content to show up as a link in search, but with GEO you structure and write content so these AI systems can specifically understand it, trust it, and cite it. Industry guides from Foundation, Backlinko, and Search Engine Land all point to the same goal: become the source AI pulls from in a massively growing industry. Some argue even more important since AI search traffic is projected to surpass traditional Google search by the end of 2027."
    },
    {
      question: "How has AI changed online search traffic?",
      answer: "Search in 2025 looks different than ever before! Zero-click searches have increased from 56% in May 2024 to 69% by May 2025, a massive 13% increase! Translation, people are getting their answers inside AI summaries, like Google's AI's quick summary response, and are never being seen! Think about the last time you googled something and got your answer inside the summary window, you didn't click any other link besides what was inside that window did you? 71% of Americans now use AI to search for information online, with ChatGPT being the largest AI engine people are using with 800 million weekly active users as of April 2025. By 2028, AI search could capture 13% of informational search and 6% of commercial search traffic."
    },
    {
      question: "Why does this matter for your business in Lexington?",
      answer: "One of the most interesting statistics I ran across is that AI search visitors are 4.4x more valuable than traditional organic search visitors when measured by conversion rates. It's because they trust the AI, and when they land on your page they are already informed and ready to buy. Furthermore, I've seen one prediction that traditional search volume will drop by 25% by 2026, with organic search traffic potentially decreasing by over 50%. If your business isn't adapting to the new way users are interacting with AI, then you'll be behind. Those who implement proper strategies now, will be more poised to own the visibility in your niche later."
    },
    {
      question: "How to Rank in ChatGPT and AI",
      answer: "Follow E-E-A-T so machines and people trust you. Incorporating credible citations and statistics can improve visibility by 30-40% in AI-generated responses. If you don't have a robots.txt file that allows AI bots to access your page, then do so now! A Robots.txt is a simple text file that tells web crawlers (bots) which pages or sections of a site they are allowed or disallowed to crawl, and there are a number of bots you need to allow access. If you allow the right bots, your content can be ingested into large language models or used by AI answer engines. The potential upside is brand visibility and referral traffic from AI applications. If not, then you miss out on visibility. To see what this looks like for your business just type in your site www.yoursite.com/robots.txt to get access. While controlling crawlers with robots.txt manages who can see your content, schema markup controls how easily they can understand and present your content. Schema markup refers to adding structured data (often in JSON-LD format in your HTML) that labels the products and relationships on the page – for example, marking that '$299,000' is the price of a product with name 'X', or that a certain text is the answer to a FAQ question. This has been a part of SEO best practices for years, but its importance is, if anything, growing with the advent of AI-driven search results."
    },
    {
      question: "What to do next",
      answer: "Answer the exact questions your buyers ask. Mark up pages with structured data. Add plain language summaries at the top of each page. Include local proof, stats, and sources. Add a robots.txt file to allow bots to understand your site. Build visuals that are easy for AI to describe. There is so much more to be said, but one thing you need to do is implement a strategy now before this industry grows, with or without you."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Generative Engine Optimization in 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-tech transition-smooth"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-primary/80 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;