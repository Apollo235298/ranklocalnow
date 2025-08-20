import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Search, BarChart3, Users, Zap, Brain, TrendingUp, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "ChatGPT Optimization",
      description: "Get your business featured in ChatGPT, Perplexity, and Claude responses when customers search.",
      features: ["AI search optimization", "Response monitoring", "Content optimization", "Competitor analysis"]
    },
    {
      icon: Search,
      title: "GEO Local Search",
      description: "Dominate local search results with advanced local GEO strategies tailored for Lexington businesses.",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Website GEO Optimization"]
    },
    {
      icon: Database,
      title: "Custom CRM System",
      description: "Streamline your business operations with our AI-powered CRM designed specifically for local businesses.",
      features: ["Lead management", "Automated follow-ups", "Customer insights", "Integration ready"]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Built for the new era of AI search and customer discovery."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Results", 
      description: "Every strategy is backed by real performance data and metrics."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "See results in weeks, not months with our proven methodology."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Deep understanding of the Lexington market and customer behavior."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Complete
            <span className="block bg-gradient-ai bg-clip-text text-transparent">Business Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From AI search optimization to custom CRM solutions, we provide everything 
            your Lexington business needs to thrive in the digital age.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-tech transition-smooth bg-background/50 backdrop-blur-sm border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-ai rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-ai rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-ai text-white hover:opacity-90 transition-smooth"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-background/30 backdrop-blur-sm border-0 shadow-soft hover:shadow-tech transition-smooth">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-white shadow-tech">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Dominate AI Search?</h3>
              <p className="text-xl mb-8 text-white/90">
                Let's analyze your current visibility and create a strategy that puts you ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/10 hover:text-white hover:backdrop-blur-md transition-smooth">
                  Get Free Analysis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white text-black border-white hover:bg-white/10 hover:text-white hover:backdrop-blur-md transition-smooth"
                  onClick={() => window.location.href = 'https://api.leadconnectorhq.com/widget/bookings/bookwithusdigitalmarketing-67eb90b3-c4fc-4510-a589-37496a39af56?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_term=TERM&utm_content=CONTENT'}
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;