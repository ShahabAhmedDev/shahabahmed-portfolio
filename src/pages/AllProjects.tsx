import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import unityMobileGame from '@/assets/unity-mobile-game.jpg';
import unityArVr from '@/assets/unity-ar-vr.jpg';
import nvidiaAiAvatar from '@/assets/nvidia-ai-avatar.jpg';
import translationApp from '@/assets/translation-app.jpg';

const AllProjects = () => {
  const navigate = useNavigate();
  
  const allProjects = [
    {
      title: "Live Language Translation App",
      description: "Real-time Unity mobile application powered by NVIDIA microservices for instant language translation with sub-200ms latency.",
      image: translationApp,
      tags: ["Unity", "NVIDIA", "Real-time", "Mobile"],
      role: "Lead Unity Developer & AI Integration Specialist",
      stack: "Unity 2023, NVIDIA ACE, NIM, Audio2Face, TTS, ASR, gRPC",
      outcomes: "Sub-200ms latency, 15+ languages, 99.2% accuracy, Featured project",
      featured: true,
      links: {
        demo: "#",
        case_study: "#"
      }
    },
    {
      title: "Mobile Simulation Empire",
      description: "High-performance mobile simulation game built in Unity featuring complex economic systems, real-time multiplayer, and advanced AI behaviors.",
      image: unityMobileGame,
      tags: ["Unity", "Mobile", "Simulation", "Multiplayer"],
      role: "Lead Unity Developer",
      stack: "Unity 2023, C#, Netcode for GameObjects, Unity Analytics",
      outcomes: "50K+ downloads, 4.8★ rating, optimized for 60fps on mid-range devices",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Enterprise AR Training Suite",
      description: "Production-quality AR application for industrial training with hand tracking, spatial mapping, and multi-user collaboration.",
      image: unityArVr,
      tags: ["Unity", "AR", "Enterprise", "Training"],
      role: "AR/VR Specialist",
      stack: "Unity XR, ARCore/ARKit, Mixed Reality Toolkit, Azure Spatial Anchors",
      outcomes: "Deployed to 200+ employees, 40% training time reduction, 95% completion rate",
      links: {
        demo: "#",
        case_study: "#"
      }
    },
    {
      title: "AI Avatar SDK Integration",
      description: "Custom Unity pipeline for real-time AI avatar animation using NVIDIA's Audio2Face technology with low-latency facial expression mapping.",
      image: nvidiaAiAvatar,
      tags: ["Unity", "AI", "NVIDIA", "Real-time"],
      role: "AI Integration Engineer",
      stack: "Unity, NVIDIA Audio2Face, gRPC, Custom C# SDK",
      outcomes: "Sub-100ms latency, photorealistic expressions, scalable architecture",
      featured: true,
      links: {
        demo: "#",
        documentation: "#"
      }
    },
    {
      title: "VR Medical Training Platform",
      description: "Immersive VR training environment for medical procedures with haptic feedback and performance analytics.",
      image: unityArVr,
      tags: ["Unity", "VR", "Medical", "Training"],
      role: "VR Developer",
      stack: "Unity XR, OpenXR, Custom Haptics, Analytics Dashboard",
      outcomes: "95% skill retention, 60% faster learning curve, FDA compliant",
      links: {
        demo: "#",
        case_study: "#"
      }
    },
    {
      title: "Real-time Multiplayer Racing",
      description: "Cross-platform Unity racing game with custom networking, physics optimization, and competitive matchmaking.",
      image: unityMobileGame,
      tags: ["Unity", "Multiplayer", "Racing", "Cross-platform"],
      role: "Multiplayer Specialist",
      stack: "Unity Netcode, Mirror Networking, Custom Physics, Matchmaking",
      outcomes: "100K+ players, 95% uptime, sub-50ms network latency",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Complete Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All <span className="text-gradient">Unity Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive showcase of Unity expertise across mobile games, AR/VR applications, 
              AI integrations, and enterprise solutions. Each project demonstrates technical excellence 
              and real-world impact.
            </p>
          </div>

          {/* Featured Project */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            {allProjects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Role:</span>
                        <span className="text-muted-foreground ml-2">{project.role}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Stack:</span>
                        <span className="text-muted-foreground ml-2">{project.stack}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Outcomes:</span>
                        <span className="text-muted-foreground ml-2">{project.outcomes}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.links.demo && (
                        <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.links.case_study && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Case Study
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">
              All Projects
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {allProjects.filter(project => !project.featured).map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Role:</span>
                        <span className="text-muted-foreground ml-2">{project.role}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Stack:</span>
                        <span className="text-muted-foreground ml-2">{project.stack}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Outcomes:</span>
                        <span className="text-muted-foreground ml-2">{project.outcomes}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.links.demo && (
                        <Button size="sm" variant="outline" className="group/btn">
                          <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="group/btn">
                          <Github className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                      )}
                      {project.links.case_study && (
                        <Button size="sm" variant="outline" className="group/btn">
                          <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Case Study
                        </Button>
                      )}
                      {project.links.documentation && (
                        <Button size="sm" variant="outline" className="group/btn">
                          <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                          Docs
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllProjects;