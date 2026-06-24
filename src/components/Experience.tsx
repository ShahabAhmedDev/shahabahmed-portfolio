import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Unity Developer",
      company: "Evolve Innovation Solutions (EIS)",
      location: "Lahore, Pakistan",
      period: "June 2024 - Present",
      type: "NEXT-Gen AI Solutions",
      achievements: [
        "Architected Metame, a production-ready Unity AI SDK integrating ElevenLab, NVIDIA Riva, ACE, and Audio2Face with WebRTC/gRPC pipelines to power lifelike NPCs or agents with real-time conversational AI",
        "Architected and launched Speak Ease, an Android translation app enabling real-time bilingual conversations across 36 language pairs using NVIDIA microservices for speech recognition, translation, and audio synthesis—built entirely in Unity",
        "Developed AI-powered virtual humans for interactive simulations, implementing real-time dialogue systems and expressive character behaviors that enhanced user engagement and training effectiveness",
        "Built scalable AR/VR experiences for training, entertainment, and interactive storytelling, optimizing for Quest and mobile AR platforms",
        "Led multiple Singapore event showcases including EQ (2024), Comic Con (2024), DFL (2024), and GITEX (2025)"
      ]
    },
    {
      title: "Sr. Unity Developer",
      company: "Big Heap Technology (BHT)",
      location: "Lahore, Pakistan",
      period: "May 2022 - June 2024",
      type: "Mobile App/Game Development",
      achievements: [
        "Shipped 25+ mobile games across FPS, GTA-style open-world, animal simulations, car parking, and vehicle riding genres with responsive touch controls",
        "Optimized for 60fps on mid-tier devices and reduced APK sizes by 30-50% through asset compression and efficient rendering techniques",
        "Delivered smooth, user-friendly experiences with intuitive UI, minimal load times, and optimized performance for extended gameplay",
        "Implemented monetization strategies (Unity Ads, AdMob, rewarded videos, IAP) optimized for revenue and user retention",
        "Achieved over 1 million downloads on a single mobile title across Google Play and App Store"
      ]
    },
    {
      title: "Unity Developer",
      company: "Intech Studio",
      location: "Lahore, Pakistan",
      period: "May 2021 - May 2022",
      type: "Game Development Services",
      achievements: [
        "Developed games using Unity and C#, implementing core gameplay mechanics, UI systems, and touch controls",
        "Created reusable game components and scripts following object-oriented programming principles to maintain clean, modular codebases",
        "Collaborated with designers to rapidly prototype and iterate on game concepts, ensuring smooth gameplay and intuitive player experiences",
        "Utilized Unity's physics engine, particle systems, and animation tools to build engaging game features and visual effects",
        "Gained experience with popular plugins including Invector character controllers, Game Creator Toolkit, Malbers Animal Controller, and Realistic Car Controller"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Professional Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Career Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              4+ years of specialized Unity development delivering cutting-edge AI solutions 
              and high-performance mobile games.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center text-lg font-medium text-primary mb-1">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground md:text-right">
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;