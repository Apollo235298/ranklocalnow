import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, TrendingUp, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LearningCenter = () => {
  const learningResources = [
    {
      icon: Target,
      title: "Rank Local in ChatGPT",
      description: "Learn the core principles of making your content ChatGPT-friendly",
      topics: ["Content structuring", "Authority signals", "Citation formats"]
    },
    {
      icon: TrendingUp,
      title: "Google AI Overviews Mastery",
      description: "Dominate Google's AI-powered search results with proven strategies",
      topics: ["Featured snippet optimization", "E-A-T signals", "Schema markup"]
    },
    {
      icon: Lightbulb,
      title: "Perplexity & Claude Tactics",
      description: "Advanced techniques for ranking in emerging AI search platforms",
      topics: ["Source credibility", "Query interpretation", "Answer formatting"]
    }
  ];

  const quickTips = [
    "Use clear, authoritative language in your content",
    "Structure information with headers and bullet points",
    "Include relevant statistics and data sources",
    "Create comprehensive, in-depth content",
    "Optimize for question-based queries"
  ];

  return (
    <section id="learning-center" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Learning Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master the art of AI search optimization with our comprehensive guides and proven strategies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {learningResources.map((resource, index) => (
            <Card key={index} className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-tech">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-ai rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <div className="space-y-2 mb-6">
                  {resource.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              Quick AI Optimization Tips
            </h3>
            <div className="space-y-4 mb-8">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
            <Link to="/learn-to-rank-chatgpt">
              <Button size="lg" className="bg-gradient-ai text-white hover:opacity-90 transition-smooth shadow-ai">
                <BookOpen className="h-5 w-5 mr-2" />
                Access Full Learning Library
              </Button>
            </Link>
          </div>

          <Card className="bg-gradient-surface border-2 border-primary/20 shadow-tech">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Free AI Audit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Get a personalized analysis of how your business appears in AI search results across ChatGPT, Perplexity, and Google AI.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">ChatGPT Visibility</span>
                  <span className="text-sm text-muted-foreground">Analyzed</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">AI Overview Presence</span>
                  <span className="text-sm text-muted-foreground">Tracked</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">Citation Opportunities</span>
                  <span className="text-sm text-muted-foreground">Identified</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-ai text-white hover:opacity-90 transition-smooth">
                Get My Free Audit
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LearningCenter;