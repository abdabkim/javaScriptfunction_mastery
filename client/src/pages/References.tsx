import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { ExternalLink, BookOpen, Code2, GraduationCap } from "lucide-react";

export default function References() {
  const references = [
    {
      name: "Mozilla Developer Network (MDN)",
      url: "https://developer.mozilla.org",
      description: "Comprehensive documentation for JavaScript, including detailed guides on functions, scope, closures, and all built-in objects.",
      icon: BookOpen,
      topics: ["Function reference", "Closures guide", "Array methods", "Async/await documentation"],
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org",
      description: "Extensive tutorials and examples covering JavaScript functions, data structures, and algorithms with practical implementations.",
      icon: Code2,
      topics: ["Function tutorials", "Recursion examples", "Built-in methods", "Practice problems"],
    },
    {
      name: "Programiz",
      url: "https://www.programiz.com",
      description: "Beginner-friendly tutorials with interactive examples. Great for understanding core concepts with clear explanations.",
      icon: GraduationCap,
      topics: ["JavaScript basics", "Function examples", "Interactive tutorials", "Step-by-step guides"],
    },
  ];

  const additionalResources = [
    {
      title: "JavaScript.info",
      url: "https://javascript.info",
      description: "Modern JavaScript tutorial covering functions in depth",
    },
    {
      title: "You Don't Know JS",
      url: "https://github.com/getify/You-Dont-Know-JS",
      description: "Deep dive into JavaScript mechanics and scope",
    },
    {
      title: "Eloquent JavaScript",
      url: "https://eloquentjavascript.net",
      description: "Free book with chapters on functions and program structure",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "References & Resources" }]} />
      
      <h1 className="text-4xl font-bold mb-4">References & Resources</h1>
      <p className="text-lg text-muted-foreground mb-12">
        This learning platform was inspired by and references the following excellent educational resources. 
        We encourage you to explore these sites for additional learning and deeper understanding.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Primary References</h2>
        <div className="space-y-6">
          {references.map((ref, index) => (
            <Card 
              key={ref.name} 
              className="p-6 hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <ref.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold">{ref.name}</h3>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1 flex-shrink-0"
                      data-testid={`link-${ref.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      Visit Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4">{ref.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ref.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalResources.map((resource) => (
            <Card key={resource.title} className="p-4 hover-elevate transition-all">
              <h3 className="font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
                data-testid={`link-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn more
                <ExternalLink className="h-3 w-3" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About This Platform</h2>
        <Card className="p-6">
          <p className="leading-relaxed mb-4">
            This JavaScript Function Mastery platform was built as a comprehensive educational resource 
            to help learners master JavaScript functions from beginner to advanced level. All content is 
            original and crafted with educational clarity in mind.
          </p>
          <p className="leading-relaxed">
            The structure and teaching approach were inspired by the pedagogical excellence of platforms 
            like Programiz, MDN, and GeeksforGeeks. We're grateful to these communities for their 
            commitment to making programming education accessible to everyone.
          </p>
        </Card>
      </section>

      <div className="border-t pt-8">
        <h3 className="font-semibold mb-4">Recommended Learning Path</h3>
        <ol className="space-y-2">
          <li className="flex gap-2">
            <span className="font-semibold text-primary">1.</span>
            <span>Start with our Function Basics lesson to build a strong foundation</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-primary">2.</span>
            <span>Progress through each lesson in order, practicing with the code editor</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-primary">3.</span>
            <span>Complete the Practice Zone exercises to solidify your understanding</span>
          </li>
          <li className="flex gap-2">
            <span className="font-semibold text-primary">4.</span>
            <span>Explore the reference materials above for deeper knowledge</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
