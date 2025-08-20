import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-6 w-6 text-accent" />
            <span className="text-white/90 font-medium">AI Search Optimization</span>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4 text-warning" />
              <span className="text-white/90">Lexington, Kentucky</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How to Rank your
            <span className="block bg-gradient-ai bg-clip-text text-transparent">Lexington Business</span>
            in ChatGPT
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            While competitors fight for Google rankings that no one clicks, we put your business 
            directly where <a href="https://backlinko.com/generative-engine-optimization-geo" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">800 million weekly</a> users actually search: inside ChatGPT, Perplexity, 
            and Google's AI summaries. Plus, streamline operations with our custom CRM built for 
            local businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-ai text-white hover:opacity-90 transition-smooth px-8 py-6 text-lg font-semibold shadow-ai"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black hover:text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule A CRM Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold bg-gradient-ai bg-clip-text text-transparent">69%</div>
                <TrendingUp className="h-6 w-6 text-accent ml-2" />
              </div>
              <div className="text-white/90 text-sm">of Google searches now end without clicking any website</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold bg-gradient-tech bg-clip-text text-transparent">4.4x</div>
                <Brain className="h-6 w-6 text-success ml-2" />
              </div>
              <div className="text-white/90 text-sm">AI search visitors convert better than Google visitors</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-warning">71%</div>
                <Zap className="h-6 w-6 text-warning ml-2" />
              </div>
              <div className="text-white/90 text-sm">of Americans now use AI to search for information online</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;