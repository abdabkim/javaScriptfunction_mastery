import { Code2 } from "lucide-react";

export default function Footer() {
  const references = [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
    { name: "Programiz", url: "https://www.programiz.com" },
  ];

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">JS Function Mastery</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A comprehensive platform to master JavaScript functions from beginner to advanced level.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learning Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Interactive Code Editor</li>
              <li>Real-world Examples</li>
              <li>Progressive Lessons</li>
              <li>Practice Exercises</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">References</h3>
            <ul className="space-y-2">
              {references.map((ref) => (
                <li key={ref.name}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                    data-testid={`link-${ref.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {ref.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Built for learning. Inspired by educational excellence.</p>
        </div>
      </div>
    </footer>
  );
}
