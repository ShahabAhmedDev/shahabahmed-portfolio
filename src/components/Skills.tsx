import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Unity Development",
      icon: "🎮",
      skills: [
        { name: "Unity 3D", level: 95, years: "4+" },
        { name: "C# (OOP)", level: 92, years: "4+" },
        { name: "Gameplay Programming", level: 90, years: "4+" },
        { name: "Performance Profiling", level: 88, years: "3+" }
      ]
    },
    {
      title: "NVIDIA AI Services",
      icon: "🤖",
      skills: [
        { name: "NVIDIA ACE", level: 90, years: "2+" },
        { name: "NVIDIA NIM", level: 85, years: "2+" },
        { name: "Audio2Face (A2F)", level: 92, years: "2+" },
        { name: "ElevenLab Integration", level: 88, years: "2+" }
      ]
    },
    {
      title: "AR/VR Development",
      icon: "🥽",
      skills: [
        { name: "Unity XR Toolkit", level: 88, years: "3+" },
        { name: "ARCore/ARKit", level: 85, years: "3+" },
        { name: "Quest Platform", level: 82, years: "2+" },
        { name: "Spatial Computing", level: 80, years: "2+" }
      ]
    },
    {
      title: "Real-Time Systems",
      icon: "⚡",
      skills: [
        { name: "WebRTC", level: 88, years: "2+" },
        { name: "gRPC", level: 90, years: "2+" },
        { name: "REST APIs", level: 85, years: "3+" },
        { name: "LivKit Integration", level: 82, years: "1+" }
      ]
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "Android/iOS Optimization", level: 92, years: "4+" },
        { name: "Unity Ads & AdMob", level: 88, years: "3+" },
        { name: "In-App Purchases", level: 85, years: "3+" },
        { name: "Unity Analytics", level: 82, years: "3+" }
      ]
    },
    {
      title: "Tools & Pipeline",
      icon: "🛠️",
      skills: [
        { name: "Unity Timeline", level: 85, years: "3+" },
        { name: "Addressables", level: 82, years: "2+" },
        { name: "HDRP / URP", level: 80, years: "3+" },
        { name: "Custom Editor Tools", level: 88, years: "3+" }
      ]
    }
  ];

  const certifications = [
    "Bachelor of Science in Computer Science (BSCS)",
    "Hajvery University - CGPA: 3.25 (2015-2019)",
    "NVIDIA Developer Program Member",
    "40+ Shipped Unity Projects Across Multiple Platforms"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Deep Expertise</span> Across the Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unity-first approach complemented by cutting-edge AI technologies and 
              cross-platform development capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{skill.years}</span>
                            <span className="text-xs font-medium">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Certifications & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 opacity-90">Professional Certifications</h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-start opacity-90">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 opacity-90">Key Achievements</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Architected Metame AI SDK with real-time lip-sync & emotions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Built Speak Ease supporting 36+ language pairs
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Optimized mobile games achieving 1M+ downloads
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Led 25+ mobile game launches across multiple genres
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;