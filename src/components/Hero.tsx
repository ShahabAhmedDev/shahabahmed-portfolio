import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Mail } from 'lucide-react';
import shahabPortrait from '@/assets/shahab-portrait.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-bg"></div>
      <div className="absolute inset-0 grid-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4 md:space-y-6">
              <Badge variant="secondary" className="text-xs md:text-sm font-medium">
                Unity Expert | AR/VR • Simulations • Experiences | NVIDIA AI Services
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-gradient">Shahab Ahmed</span>
                <br />
                Unity Expert & XR Developer
              </h1>
              
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Results-driven Unity Expert with 4+ years of experience and 40+ shipped projects across mobile (Android/iOS), AR/VR, and immersive platforms. 
                Specializing in scalable, high-performance interactive experiences—from engaging gameplay systems to cutting-edge AI-driven simulations 
                powered by NVIDIA microservices, WebRTC, and gRPC.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:opacity-90 transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                asChild
              >
                <a href="/ShahabAhmedResume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Resume
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Shipped Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </div>
          
          {/* Portrait */}
          <div className="relative animate-float flex justify-center">
            <div className="relative rounded-2xl overflow-hidden glow aspect-square max-w-md">
              <img 
                src={shahabPortrait} 
                alt="Shahab Ahmed - Unity Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;