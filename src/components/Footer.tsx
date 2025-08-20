import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-ai bg-clip-text text-transparent">LexingtonAI</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted AI search optimization and CRM partner, dedicated to helping 
              Lexington businesses dominate the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:opacity-80 transition-smooth">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:opacity-80 transition-smooth">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:opacity-80 transition-smooth">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">ChatGPT Optimization</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Local Lexington GEO</a></li>
              <li><a href="#crm" className="text-primary-foreground/80 hover:text-accent transition-smooth">Custom CRM</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">Free Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-smooth">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">Services</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">(859) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">hello@lexingtonai.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  Lexington, Kentucky<br />
                  Central Kentucky Region
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">© 2025 LexingtonAI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">Privacy Policy</a>
              <a href="/terms-of-service" className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;