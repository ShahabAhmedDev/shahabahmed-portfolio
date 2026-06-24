import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Gamepad2, Brain, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that scales with project complexity"
    },
    {
      icon: Gamepad2,
      title: "User Experience",
      description: "Creating intuitive, engaging experiences that users love to interact with"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and emerging technologies to solve real problems"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed, efficiency, and seamless real-time interactions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate About <span className="text-gradient">Unity Development</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the future of interactive experiences through innovative technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a results-driven Unity Expert with 4+ years of experience and 40+ shipped projects 
                  across mobile (Android/iOS), AR/VR, and immersive platforms. I specialize in building 
                  scalable, high-performance interactive experiences—from engaging gameplay systems to 
                  cutting-edge AI-driven simulations.
                </p>
                <p>
                  My flagship achievement is <strong>Metame</strong>, an AI SDK that brings virtual characters 
                  to life with real-time conversation, lip-sync, and emotional expressions using NVIDIA 
                  microservices, WebRTC, and gRPC. I also developed <strong>Speak Ease</strong>, a bilingual 
                  translation app supporting 36+ language pairs with sub-100ms latency.
                </p>
                <p>
                  I'm passionate about pushing the boundaries of AI-powered interactive experiences, with core 
                  expertise in Unity/C# development, performance optimization, multithreading, mobile monetization, 
                  and multiplayer networked systems. I bring innovative concepts from idea to launch, whether it's 
                  entertainment, education, or practical AI applications.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Technical Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Unity Development</div>
                    <div className="text-sm text-muted-foreground">C# (OOP), Gameplay Programming, 40+ shipped projects</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">NVIDIA AI Stack</div>
                    <div className="text-sm text-muted-foreground">ACE, NIM, Audio2Face, ElevenLab, LivKit integration</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Mobile & AR/VR</div>
                    <div className="text-sm text-muted-foreground">Android/iOS optimization, Quest platform, 1M+ downloads</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">Real-Time Architecture</div>
                    <div className="text-sm text-muted-foreground">WebRTC, gRPC, microservices, sub-100ms latency systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;