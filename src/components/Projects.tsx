import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

import mobileSimulationEmpire from '@/assets/mobile-simulation-empire.png';
import unityArVr from '@/assets/unity-ar-vr.jpg';
import nvidiaAiAvatar from '@/assets/nvidia-ai-avatar.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AR/VR Apps",
      description: "Production-quality VR applications for Oculus 2 & 3, AR mobile apps for iOS/Android, and Tryon - a flagship mirror-based app for clothing outlets where customers stand in front of a PC display to virtually try on multiple outfits.",
      image: unityArVr,
      tags: ["Unity", "VR", "AR", "Mobile", "Retail"],
      role: "Lead Unity Developer",
      stack: "Unity XR, Oculus SDK, ARCore/ARKit, Computer Vision, Mirror Display Tech",
      outcomes: "Deployed across 50+ retail outlets, 85% customer engagement increase, 40% reduction in return rates",
      links: {
        demo: "#",
        case_study: "#"
      }
    },
    {
      title: "Mobile Simulation Empire",
      description: "High-performance mobile simulation game built in Unity featuring complex economic systems, real-time multiplayer, and advanced AI behaviors. Includes dynamic resource management, player-driven economies, and strategic territory expansion mechanics with sophisticated opponent AI.",
      image: mobileSimulationEmpire,
      tags: ["Unity", "Mobile", "Simulation", "Multiplayer"],
      role: "Lead Unity Developer",
      stack: "Unity 2023, C#, Netcode for GameObjects, Unity Analytics, Custom AI Framework",
      outcomes: "50K+ downloads, 4.8★ rating, optimized for 60fps on mid-range devices, featured on Google Play",
      links: {
        demo: "https://shahabahmeddev.github.io/portfolio"
      }
    },
    {
      title: "Matame Unity SDK",
      description: "Custom Unity pipeline for real-time AI avatar animation using NVIDIA's Audio2Face technology with low-latency facial expression mapping. Features advanced lip-sync accuracy, emotion detection, and seamless integration with Unity's animation system for natural character interactions.",
      image: nvidiaAiAvatar,
      tags: ["Unity", "AI", "NVIDIA", "Real-time"],
      role: "Lead Unity Developer",
      stack: "Unity, NVIDIA Audio2Face, gRPC, Custom C# SDK, Animation Blending System",
      outcomes: "Sub-100ms latency, photorealistic expressions, scalable architecture, production-ready integration",
      links: {
        demo: "https://metame.sg/",
        documentation: "/Metame_SDK.pdf"
      }
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Unity Projects</span> That Make Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From mobile games to enterprise AR solutions, each project showcases deep Unity expertise 
            combined with cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
              
              <CardContent className="pt-0 flex flex-col flex-1">
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
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.demo && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="group/btn"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      {project.title === "Mobile Simulation Empire" ? "Visit Game Portfolio" : "Visit site"}
                    </Button>
                  )}
                  {project.links.case_study && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="group/btn"
                      onClick={() => window.open(project.links.case_study, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      Case Study
                    </Button>
                  )}
                  {project.links.documentation && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="group/btn"
                      onClick={() => window.open(project.links.documentation, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                      Integration Docs
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="group"
            onClick={() => window.location.href = '/projects'}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;