import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-ai bg-clip-text text-transparent">
              RankLocalNow
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Lexington's only GEO & CRM
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">Home</a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-smooth bg-transparent hover:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 bg-background border border-border rounded-lg shadow-lg">
                      <NavigationMenuLink asChild>
                        <a 
                          href="#services" 
                          className="block p-3 rounded hover:bg-accent transition-smooth text-foreground hover:text-accent-foreground"
                        >
                          <div className="font-medium">AI Optimization</div>
                          <div className="text-sm text-muted-foreground">Get found in AI search results</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/learn-to-rank-chatgpt" 
                          className="block p-3 rounded hover:bg-accent transition-smooth text-foreground hover:text-accent-foreground"
                        >
                          <div className="font-medium">Learn to Rank in ChatGPT</div>
                          <div className="text-sm text-muted-foreground">Master AI search strategies</div>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a 
                          href="/pricing" 
                          className="block p-3 rounded hover:bg-accent transition-smooth text-foreground hover:text-accent-foreground"
                        >
                          <div className="font-medium">Pricing</div>
                          <div className="text-sm text-muted-foreground">View our service plans</div>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#crm" className="text-foreground hover:text-primary transition-smooth">CRM</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ranklocalnow.ai</span>
              </div>
            </div>
            <Button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }} 
              className="bg-gradient-ai text-white hover:opacity-90 transition-smooth shadow-ai"
            >
              Get Started
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth">AI Optimization</a>
              <a href="/learn-to-rank-chatgpt" className="text-foreground hover:text-primary transition-smooth pl-4">Learn to Rank in ChatGPT</a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-smooth pl-4">Pricing</a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
              <a href="#crm" className="text-foreground hover:text-primary transition-smooth">CRM</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;