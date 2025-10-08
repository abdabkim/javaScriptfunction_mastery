import { Lightbulb } from "lucide-react";
import CodeEditor from "./CodeEditor";

interface TryItBoxProps {
  code: string;
  title?: string;
}

export default function TryItBox({ code, title }: TryItBoxProps) {
  return (
    <div className="my-8 border-l-4 border-chart-2 bg-chart-2/5 rounded-lg p-6" data-testid="try-it-box">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-chart-2" />
        <h3 className="text-lg font-semibold">Try It Yourself</h3>
      </div>
      {title && <p className="text-sm text-muted-foreground mb-4">{title}</p>}
      <CodeEditor initialCode={code} />
    </div>
  );
}
