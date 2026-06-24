import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Users, Zap, BarChart3 } from 'lucide-react';

import translationApp from '@/assets/translation-app.jpg';

const CaseStudy = () => {
  const metrics = [
    { icon: Clock, label: "Latency", value: "<100ms", description: "Sub-100ms translation time" },
    { icon: Users, label: "Language Pairs", value: "36+", description: "Supported language combinations" },
    { icon: Zap, label: "Performance", value: "60fps", description: "Smooth Unity rendering" },
    { icon: BarChart3, label: "Architecture", value: "gRPC", description: "Microservices integration" }
  ];

  const services = [
    {
      name: "NVIDIA ACE",
      purpose: "AI conversation orchestration",
      integration: "gRPC microservice for conversation flow management"
    },
    {
      name: "NVIDIA NIM",
      purpose: "Neural inference optimization",
      integration: "Optimized model serving for real-time translation"
    },
    {
      name: "Audio2Face (A2F)",
      purpose: "Facial animation from speech",
      integration: "Unity SDK for real-time avatar lip-sync"
    },
    {
      name: "Text-to-Speech (TTS)",
      purpose: "Natural voice synthesis",
      integration: "Streaming audio pipeline with Unity AudioSource"
    },
    {
      name: "ASR (Speech Recognition)",
      purpose: "Real-time speech capture",
      integration: "Continuous audio stream processing with noise reduction"
    }
  ];

  return (
    <section id="case-study" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Flagship Case Study
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Speak Ease: Real-Time Translation App
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Unity-powered mobile application featuring real-time speech translation 
              across 36+ language pairs using NVIDIA's cutting-edge AI microservices architecture.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating a bilingual mobile application that could translate speech in real-time across 36+ 
                  language pairs with sub-100ms latency while maintaining natural conversation flow. The solution 
                  needed to handle bidirectional translation, provide visual feedback, and work seamlessly across 
                  different mobile devices powered entirely by Unity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Built Speak Ease entirely in Unity, leveraging NVIDIA microservices and gRPC-based streaming 
                  for a complete AI-powered translation pipeline supporting 36+ language pairs:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Real-time audio capture and preprocessing in Unity
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    NVIDIA Riva ASR for speech-to-text conversion across 36+ languages
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Neural machine translation via NVIDIA NIM microservices
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Text-to-speech synthesis with natural voice output
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Bidirectional translation enabling real-time conversations
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={translationApp} 
                alt="Live Translation App Interface"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="font-medium mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">NVIDIA Microservices Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="space-y-3 p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-primary">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.purpose}</p>
                    <div className="text-xs bg-background p-2 rounded border">
                      <span className="font-medium">Integration: </span>
                      {service.integration}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Architecture & Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Technical Architecture</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Unity client with custom audio processing pipeline</li>
                    <li>• gRPC communication layer for low-latency service calls</li>
                    <li>• Microservices orchestration via NVIDIA ACE</li>
                    <li>• Real-time audio streaming with adaptive buffering</li>
                    <li>• Cross-platform deployment (iOS/Android)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Performance Optimizations</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Predictive caching of common translations</li>
                    <li>• Audio chunk optimization for minimal latency</li>
                    <li>• Efficient memory management for continuous operation</li>
                    <li>• Network failover and offline mode capabilities</li>
                    <li>• Battery optimization for extended usage</li>
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

export default CaseStudy;