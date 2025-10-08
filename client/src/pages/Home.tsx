import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, BookOpen, Zap, Target, Boxes, GitBranch, Repeat, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/JavaScript_code_hero_image_e01bae94.png";

export default function Home() {
  const features = [
    {
      icon: Code2,
      title: "Interactive Code Editor",
      description: "Write, edit, and run JavaScript code directly in your browser with instant feedback.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Lessons",
      description: "From basics to advanced concepts, learn everything about JavaScript functions.",
    },
    {
      icon: Zap,
      title: "Real-world Examples",
      description: "Practical code examples that demonstrate how functions work in real applications.",
    },
    {
      icon: Target,
      title: "Progressive Learning",
      description: "Structured curriculum that builds your knowledge step by step.",
    },
  ];

  const topics = [
    { icon: Code2, title: "Function Basics", path: "/basics", description: "Learn function syntax, parameters, and return values" },
    { icon: Zap, title: "Expressions & Arrows", path: "/expressions", description: "Master function expressions and arrow function syntax" },
    { icon: Boxes, title: "Scope & Closures", path: "/scope", description: "Understand variable scope and closure concepts" },
    { icon: GitBranch, title: "Callbacks & Async", path: "/callbacks", description: "Work with callbacks, recursion, and async functions" },
    { icon: Repeat, title: "Built-in Objects", path: "/built-in", description: "Use Math, String, Array, and Date objects in functions" },
    { icon: Clock, title: "Practice Zone", path: "/practice", description: "Apply your knowledge with hands-on exercises" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="JavaScript code visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Master JavaScript Functions
          </h1>
          <p className="text-xl mb-8 text-white/90 drop-shadow">
            Learn everything about JavaScript functions with interactive examples, 
            live code execution, and comprehensive lessons from beginner to advanced.
          </p>
          <Link href="/basics">
            <Button size="lg" className="backdrop-blur-md bg-primary border border-primary-border" data-testid="button-get-started">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn Here?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6 text-center hover-elevate transition-all">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">What You'll Learn</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore comprehensive lessons covering every aspect of JavaScript functions, 
            from fundamental concepts to advanced patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link key={topic.path} href={topic.path}>
                <Card className="p-6 hover-elevate transition-all h-full cursor-pointer group" data-testid={`topic-card-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
