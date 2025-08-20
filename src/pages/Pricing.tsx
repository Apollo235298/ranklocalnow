import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Pricing = () => {
  const plans = [{
    name: "Bronze",
    price: "$499",
    period: "/month",
    description: "3 month trial starting at $399. Perfect for local businesses who want to lay the foundation of becoming visible in ChatGPT and AI resources",
    icon: <Zap className="h-6 w-6" />,
    features: ["Robots.txt and sitemap", "Schema markup on primary pages", "FAQ's on GBP and Website", "CRM lite", "Monthly performance reports", "Dedicated support", "GTM and GA4 set up and tracking"],
    popular: false,
    buttonText: "Get Started"
  }, {
    name: "Gold",
    price: "$599",
    period: "/month",
    description: "Advanced features for optimizing your business growth and stay competitive",
    icon: <Crown className="h-6 w-6" />,
    features: ["Everything in Bronze", "Calendar sync and appointment reminders", "Custom phone number", "Automatic text back", "One lead funnel", "Social media lead funnel", "Monthly FAQ refresh", "25 optimized photographs per quarter"],
    popular: true,
    buttonText: "Start Free Trial"
  }, {
    name: "Diamond",
    price: "$699",
    period: "/month",
    description: "The complete solution to manage all your repetitive tasks, while capitalizing your business service",
    icon: <Rocket className="h-6 w-6" />,
    features: ["Monthly research on local queries", "One short case study or post", "Monthly Google Business optimization refresh", "Second automation sequence such as review request flow", "Three active funnels", "Monthly reporting", "Up to 80 backlinks", "Up to 50 optimized photographs for local Lexington Businesses per quarter"],
    popular: false,
    buttonText: "Contact Sales"
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
              Choose Your Growth Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for every stage of your business. All plans include our core AI optimization features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-ai scale-105' : 'border-border'} transition-all duration-300 hover:shadow-lg`}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-ai text-white px-4 py-1">
                    Most Popular
                  </Badge>}
                
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>)}
                  </ul>
                  
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-ai text-white shadow-ai' : ''}`} variant={plan.popular ? "default" : "outline"} onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}>
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-muted-foreground">There is a one time set-up fee of $99. After that, we will have you up and running! </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's included in the three month trial?</h3>
                <p className="text-muted-foreground">Everything in Bronze! We lay the foundation for your business to get into AI answers. All plans are on a 12 month contract, however we do offer month-to-month. The three month trial is a great way to see the difference for yourself before committing. </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-muted-foreground"><p className="text-muted-foreground">Yes! All plans are customizable. Contact me for a custom solution tailored to your business needs. We also offer photography options for real estate agents, short-term rental hosts, and local contractors provided by <a href="https://www.joshmoonphotography.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_term=TERM&utm_content=CONTENT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Josh Moon Photography</a>. </p> </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer drone services?</h3>
                <p className="text-muted-foreground">Yes! We have licensed FAA drone pilots to capture your project. This is provided as an additional add on service through <a href="https://www.joshmoonphotography.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_term=TERM&utm_content=CONTENT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Josh Moon Photography</a>.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom photography packages for Real Estate?</h3>
                <p className="text-muted-foreground">Yes! <a href="https://www.joshmoonphotography.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_term=TERM&utm_content=CONTENT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Josh Moon photography</a> does customized photoshoots for your real estate listing and short-term rental. He also does this for local contractors and builders to showcase their work.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How is Josh Moon Photography different than others?</h3>
                <p className="text-muted-foreground"><a href="https://www.joshmoonphotography.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN&utm_term=TERM&utm_content=CONTENT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Josh Moon Photography</a> is an award winning photographer in Kentucky. He is widely recognized, and experienced photographer who also helped build a 7 figure short-term rental business. He knows how to capture the experience and he also optimizes all his image to include meta data into the image increasing the likelihood of his images being ranked locally.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Pricing;