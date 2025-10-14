import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, CheckCircle, XCircle, Loader2 } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  title?: string;
  onRun?: (code: string) => void;
}

export default function CodeEditor({ initialCode, title = "JavaScript", onRun }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput(null);
    
    setTimeout(() => {
      const originalLog = console.log;
      const logs: string[] = [];
      
      console.log = (...args) => {
        logs.push(args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      };

      try {
        // eslint-disable-next-line no-eval
        eval(code);
        
        if (logs.length > 0) {
          setOutput({ type: "success", message: logs.join('\n') });
        } else {
          setOutput({ type: "success", message: "Code executed successfully (no output)" });
        }
        
        if (onRun) onRun(code);
      } catch (error) {
        setOutput({ 
          type: "error", 
          message: error instanceof Error ? error.message : "An error occurred" 
        });
      } finally {
        console.log = originalLog;
        setIsRunning(false);
      }
    }, 300);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
  };

  return (
    <div className="border-2 border-primary/20 rounded-lg overflow-hidden bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover-elevate" data-testid="code-editor">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-primary/5">
        <span className="text-sm font-medium text-primary">{title}</span>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleReset}
            data-testid="button-reset-code"
            className="transition-colors duration-300"
          >
            <RotateCcw className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-180" />
            Reset
          </Button>
          <Button
            size="sm"
            onClick={handleRun}
            disabled={isRunning}
            data-testid="button-run-code"
            className="transition-all duration-300 hover:shadow-md"
          >
            {isRunning ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            Run Code
          </Button>
        </div>
      </div>

      <div className="bg-[#282c34]">
        <CodeMirror
          value={code}
          height="200px"
          theme={oneDark}
          extensions={[javascript()]}
          onChange={(value) => setCode(value)}
          className="text-sm"
        />
      </div>

      {output && (
        <div className={`px-4 py-3 border-t-2 animate-fade-in ${
          output.type === "success" ? "bg-[hsl(var(--success))]/10 border-[hsl(var(--success))]/30" : "bg-destructive/10 border-destructive/30"
        }`}>
          <div className="flex items-start gap-2">
            {output.type === "success" ? (
              <CheckCircle className="h-5 w-5 text-[hsl(var(--success))] flex-shrink-0 mt-0.5 animate-fade-in" />
            ) : (
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5 animate-fade-in" />
            )}
            <div className="flex-1">
              <p className={`text-sm font-medium mb-1 ${
                output.type === "success" ? "text-[hsl(var(--success))]" : "text-destructive"
              }`}>
                {output.type === "success" ? "Output:" : "Error:"}
              </p>
              <pre className={`text-sm font-mono whitespace-pre-wrap ${
                output.type === "success" ? "text-foreground" : "text-destructive"
              }`} data-testid="code-output">
                {output.message}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
