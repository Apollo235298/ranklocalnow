import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Boost Your
            <span className="block bg-gradient-ai bg-clip-text text-transparent">AI Visibility</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get your business in AI search and streamline your business operations? 
            Get started with a free analysis today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-tech">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Get Your Free AI Analysis</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                    <Input type="tel" placeholder="(859) 555-0123" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Business Name</label>
                    <Input placeholder="Your business name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Website (if any)</label>
                    <Input placeholder="https://yourbusiness.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">How can we help?</label>
                    <Textarea 
                      placeholder="Tell us about your business goals and challenges..."
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-ai text-white hover:opacity-90 transition-smooth shadow-ai"
                  >
                    Get Free Analysis
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p className="text-muted-foreground">(605) 376-1263</p>
                      <p className="text-sm text-muted-foreground">Available Monday-Friday 8AM-5:30PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground">info@ranklocalnow.ai</p>
                      <p className="text-sm text-muted-foreground">We respond within 5 minutes!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Location</h4>
                      <p className="text-muted-foreground">Lexington, Kentucky<br />Serving Central Kentucky</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Mon-Fri: 8AM - 5:30 PM<br />
                        Weekends: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Quick Chat</h4>
                  <p className="text-sm text-muted-foreground mb-4">Have a quick question?</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-primary mb-2">Book Meeting</h4>
                  <p className="text-sm text-muted-foreground mb-4">Schedule a consultation</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;