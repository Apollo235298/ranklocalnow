import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Bot, Search, MapPin, Award, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  const achievements = [{
    icon: TrendingUp,
    title: "Built 7-figure businesses",
    description: "using AI optimization strategies"
  }, {
    icon: Bot,
    title: "ChatGPT early adopter",
    description: "since Day 1 launch"
  }, {
    icon: Search,
    title: "Google SGE Beta Program",
    description: "participant"
  }, {
    icon: MapPin,
    title: "Lexington-based",
    description: "serving Central Kentucky"
  }];
  return <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Is
              <span className="block bg-gradient-ai bg-clip-text text-transparent">Generative Engine Optimization?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">Generative Engine Optimization is the practice of making your content favored inside AI answers. Think ChatGPT, Claude, Gemini, Perplexity, and Google's AI Overviews. Traditional SEO practices involve optimizing your content to show up as a link in general search, but with GEO you structure and write content so these AI systems can specifically understand, trust, and cite it when users are looking. This is vital since AI search traffic is projected to surpass traditional Google search by the end of 2027.  I'm your AI expert, and I don't just optimize for Google - I optimize for the future. As ChatGPT, Perplexity, and Google's AI summaries reshape how customers discover businesses, traditional SEO is becoming obsolete! Zero click searches have increased from 56% in May 2024 to 69% by May 2025. Meaning, users aren't clicking links in Google anymore, they are being filtered through the AI response. My clients get the ultimate advantage: visibility where customers actually search today.</p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Increased traffic and leads don't matter unless you have a system to convert them automatically. Combined with a custom CRM solution, I help Lexington businesses capture, nurture, and convert leads more effectively than ever. While competitors fight over declining Google clicks, my clients get prepared for the future of AI search where 800 million weekly users go for answers.</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>)}
            </div>
            
            <Link to="/learn-to-rank-chatgpt">
              <Button size="lg" className="bg-gradient-ai text-white hover:opacity-90 transition-smooth shadow-ai">
                Learn GEO Best Strategies
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-tech bg-gradient-surface backdrop-blur-sm">
              <div className="p-12">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-ai rounded-2xl flex items-center justify-center shadow-glow">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">AI-Powered Intelligence</h3>
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive system monitors and optimizes your presence across all AI search platforms, ensuring maximum visibility in the new era of search.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">800M+</div>
                      <div className="text-sm text-muted-foreground">Weekly AI searches</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent">4.4x</div>
                      <div className="text-sm text-muted-foreground">Better conversions</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="text-left p-4 bg-background/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Real-Time Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Track your brand mentions across ChatGPT, Perplexity, Claude, and Google AI Overviews 24/7.</p>
                    </div>
                    <div className="text-left p-4 bg-background/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Content Optimization</h4>
                      <p className="text-sm text-muted-foreground">AI-powered content analysis ensures your business ranks higher in generative search results.</p>
                    </div>
                    <div className="text-left p-4 bg-background/30 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Competitive Analysis</h4>
                      <p className="text-sm text-muted-foreground">See how competitors appear in AI responses and identify opportunities to outrank them.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-8 -left-8 bg-white p-6 shadow-ai max-w-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-ai rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Certified AI Specialist</h4>
                  <p className="text-sm text-muted-foreground">Advanced AI Search Optimization</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;