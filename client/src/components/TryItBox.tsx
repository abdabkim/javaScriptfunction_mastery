import { Lightbulb } from "lucide-react";
import CodeEditor from "./CodeEditor";

interface TryItBoxProps {
  code: string;
  title?: string;
}

export default function TryItBox({ code, title }: TryItBoxProps) {
  return (
    <div className="my-8 border-l-4 border-[hsl(var(--success))] bg-[hsl(var(--success))]/5 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-[hsl(var(--success))]/10 hover-elevate animate-fade-in-up" data-testid="try-it-box">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-[hsl(var(--success))]/10 transition-all duration-300">
          <Lightbulb className="h-5 w-5 text-[hsl(var(--success))] transition-transform duration-300 hover:rotate-12" />
        </div>
        <h3 className="text-lg font-semibold text-[hsl(var(--success))]">Try It Yourself</h3>
      </div>
      {title && <p className="text-sm text-muted-foreground mb-4">{title}</p>}
      <CodeEditor initialCode={code} />
    </div>
  );
}
