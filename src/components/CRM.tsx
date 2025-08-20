import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Bell, BarChart3, Zap, CheckCircle, MessageSquare, Calendar, TrendingUp } from "lucide-react";
const CRM = () => {
  const features = [{
    icon: Users,
    title: "Smart Lead Management",
    description: "Automatically capture and organize leads from all sources with AI-powered scoring.",
    status: "live"
  }, {
    icon: Bell,
    title: "Intelligent Notifications",
    description: "Never miss a follow-up with AI-driven alerts and reminders.",
    status: "live"
  }, {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into customer behavior and sales performance.",
    status: "live"
  }, {
    icon: MessageSquare,
    title: "Automated Follow-ups",
    description: "AI-powered email and SMS sequences that convert.",
    status: "live"
  }, {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent appointment booking with customer preferences.",
    status: "live"
  }, {
    icon: TrendingUp,
    title: "Predictive Insights",
    description: "AI predictions for customer lifetime value and churn risk.",
    status: "live"
  }];
  const stats = [{
    label: "Average Lead Response Time",
    value: "< 2 minutes",
    change: "85% faster"
  }, {
    label: "Customer Satisfaction",
    value: "4.9/5",
    change: "+23%"
  }, {
    label: "Sales Conversion Rate",
    value: "34%",
    change: "+156%"
  }, {
    label: "Time Saved Weekly",
    value: "12 hours",
    change: "per user"
  }];
  return <section id="crm" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Custom
            <span className="block bg-gradient-ai bg-clip-text text-transparent">CRM Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Purpose-built for local Lexington businesses. Our AI-powered CRM streamlines operations, 
            automates follow-ups, and maximizes every customer interaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => <Card key={index} className="text-center p-6 bg-background/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-tech transition-smooth">
              <div className="text-3xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary mb-1">{stat.label}</div>
              <div className="text-xs text-success">{stat.change}</div>
            </Card>)}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <Card key={index} className="group overflow-hidden bg-background/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-tech transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant={feature.status === 'live' ? 'default' : 'secondary'} className={feature.status === 'live' ? 'bg-success text-success-foreground' : ''}>
                    {feature.status === 'live' ? <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Live
                      </> : 'Coming Soon'}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-hero text-white shadow-tech">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-warning mr-3" />
                <h3 className="text-3xl font-bold">Ready to Future Proof Your Business?</h3>
              </div>
              <p className="text-xl mb-8 text-white/90">Join local Lexington businesses already using our AI strategies and CRM to automate operations, boost sales, and get into AI search. Only limited to a select few in each industry. Grab your spot before it's too late!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/20 hover:text-white hover:backdrop-blur-sm hover:border-white/30 transition-smooth">
                  Start a Trial!
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-black hover:text-white hover:bg-white/20 hover:backdrop-blur-sm transition-smooth">
                  View Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default CRM;