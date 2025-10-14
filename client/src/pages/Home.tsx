import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, BookOpen, Zap, Target, Boxes, GitBranch, Repeat, Clock, RotateCw } from "lucide-react";
import heroImage from "@assets/stock_images/abstract_coding_prog_c8b6a36d.jpg";
import techImage1 from "@assets/stock_images/colorful_abstract_te_204ac2a0.jpg";
import techImage2 from "@assets/stock_images/colorful_abstract_te_7c08473f.jpg";
import codeImage from "@assets/stock_images/javascript_coding_ed_ff15cb80.jpg";

export default function Home() {
  const features = [
    {
      icon: Code2,
      title: "Interactive Code Editor",
      description: "Write, edit, and run JavaScript code directly in your browser with instant feedback.",
      color: "bg-primary/10 text-primary",
      hoverColor: "group-hover:bg-primary/20"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Lessons",
      description: "From basics to advanced concepts, learn everything about JavaScript functions.",
      color: "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]",
      hoverColor: "group-hover:bg-[hsl(var(--success))]/20"
    },
    {
      icon: Zap,
      title: "Real-world Examples",
      description: "Practical code examples that demonstrate how functions work in real applications.",
      color: "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]",
      hoverColor: "group-hover:bg-[hsl(var(--warning))]/20"
    },
    {
      icon: Target,
      title: "Progressive Learning",
      description: "Structured curriculum that builds your knowledge step by step.",
      color: "bg-[hsl(var(--info))]/10 text-[hsl(var(--info))]",
      hoverColor: "group-hover:bg-[hsl(var(--info))]/20"
    },
  ];

  const topics = [
    { icon: Code2, title: "Function Basics", path: "/basics", description: "Learn function syntax, parameters, and return values", color: "bg-primary/10 text-primary" },
    { icon: Zap, title: "Expressions & Arrows", path: "/expressions", description: "Master function expressions and arrow function syntax", color: "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]" },
    { icon: Boxes, title: "Scope & Closures", path: "/scope", description: "Understand variable scope and closure concepts", color: "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]" },
    { icon: GitBranch, title: "Callbacks & Async", path: "/callbacks", description: "Work with callbacks, recursion, and async functions", color: "bg-[hsl(var(--info))]/10 text-[hsl(var(--info))]" },
    { icon: Repeat, title: "Built-in Objects", path: "/built-in", description: "Use Math, String, Array, and Date objects in functions", color: "bg-secondary/30 text-secondary-foreground" },
    { icon: RotateCw, title: "Array Rotation", path: "/array-rotation", description: "Master array rotation with in-place algorithmic thinking", color: "bg-accent/30 text-accent-foreground" },
    { icon: Clock, title: "Practice Zone", path: "/practice", description: "Apply your knowledge with hands-on exercises", color: "bg-primary/10 text-primary" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
          <div className="inline-block p-4 rounded-full bg-primary/10 mb-6 animate-fade-in">
            <Code2 className="h-16 w-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Master JavaScript Functions
          </h1>
          <p className="text-xl mb-8 text-muted-foreground animate-fade-in-up animation-delay-200">
            Learn everything about JavaScript functions with interactive examples, 
            live code execution, and comprehensive lessons from beginner to advanced.
          </p>
          <Link href="/basics">
            <Button size="lg" className="animate-fade-in-up animation-delay-300 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid="button-get-started">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Why Learn Here?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="p-6 text-center hover-elevate transition-all duration-300 hover:shadow-xl animate-fade-in-up group border-2 border-transparent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4 transition-all duration-300 ${feature.hoverColor}`}>
                  <feature.icon className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="font-semibold mb-2 transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Visual Showcase */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-3xl font-bold">Interactive Learning Experience</h2>
              <p className="text-lg text-muted-foreground">
                Experience hands-on learning with our interactive code editor. See your code come to life 
                in real-time and understand JavaScript functions through practical examples.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 rounded-lg bg-primary/10 border-2 border-primary/20 hover-elevate transition-all duration-300 hover:shadow-md">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Code Examples</div>
                </div>
                <div className="flex-1 p-4 rounded-lg bg-[hsl(var(--success))]/10 border-2 border-[hsl(var(--success))]/20 hover-elevate transition-all duration-300 hover:shadow-md">
                  <div className="text-2xl font-bold text-[hsl(var(--success))] mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Lesson Topics</div>
                </div>
                <div className="flex-1 p-4 rounded-lg bg-[hsl(var(--warning))]/10 border-2 border-[hsl(var(--warning))]/20 hover-elevate transition-all duration-300 hover:shadow-md">
                  <div className="text-2xl font-bold text-[hsl(var(--warning))] mb-1">Live</div>
                  <div className="text-sm text-muted-foreground">Code Editor</div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden animate-fade-in-up animation-delay-200">
              <img 
                src={codeImage} 
                alt="Coding workspace" 
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in-up">What You'll Learn</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Explore comprehensive lessons covering every aspect of JavaScript functions, 
            from fundamental concepts to advanced patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link key={topic.path} href={topic.path}>
                <Card 
                  className="p-6 hover-elevate transition-all duration-300 h-full cursor-pointer group hover:shadow-xl animate-fade-in-up border-2 border-transparent" 
                  data-testid={`topic-card-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${topic.color} transition-all duration-300`}>
                      <topic.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 transition-colors duration-300">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">{topic.description}</p>
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
