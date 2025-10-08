import CodeEditor from "../CodeEditor";

export default function CodeEditorExample() {
  const sampleCode = `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("JavaScript Learner");`;

  return (
    <div className="p-4">
      <CodeEditor initialCode={sampleCode} />
    </div>
  );
}
