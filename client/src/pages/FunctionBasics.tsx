import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { Code, Play, RotateCcw } from "lucide-react";

export default function FunctionBasics() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Basics" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Function Basics</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Functions are the building blocks of JavaScript. They allow you to package code into reusable blocks 
        that perform specific tasks. Let's explore how to create and use functions effectively.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is a Function?</h2>
        <p className="leading-relaxed mb-4">
          A function is a reusable block of code designed to perform a particular task. Think of it as a recipe: 
          you define the steps once, and then you can follow that recipe (call the function) whenever you need it.
        </p>
        
        <InfoBox type="info">
          Functions help you organize your code, make it reusable, and easier to maintain. Instead of writing 
          the same code multiple times, you write it once in a function and call it whenever needed.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Syntax</h2>
        <p className="leading-relaxed mb-6">
          The basic syntax of a function includes the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">function</code> keyword, 
          a name, parameters in parentheses, and a code block in curly braces.
        </p>

        <CodeEditor 
          initialCode={`// Basic function declaration
function greet() {
  console.log("Hello, World!");
}

// Call the function
greet();`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parameters and Arguments</h2>
        <p className="leading-relaxed mb-6">
          Functions become more powerful when they can accept input. Parameters are variables listed in the function 
          definition, while arguments are the actual values passed when calling the function.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ConceptCard
            icon={Code}
            title="Parameters"
            description="Variables defined in the function declaration that act as placeholders."
          />
          <ConceptCard
            icon={Play}
            title="Arguments"
            description="Actual values passed to the function when it's called."
          />
        </div>

        <CodeEditor 
          initialCode={`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Return Statement</h2>
        <p className="leading-relaxed mb-6">
          Functions can return values using the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return</code> statement. 
          Once a return statement is executed, the function stops and sends the value back to where it was called.
        </p>

        <CodeEditor 
          initialCode={`function add(a, b) {
  return a + b;
}

const sum = add(5, 3);
console.log("Sum:", sum);

const result = add(10, 20);
console.log("Result:", result);`}
        />

        <InfoBox type="tip">
          A function without a return statement returns <code className="px-2 py-1 bg-muted rounded text-sm font-mono">undefined</code> by default.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Default Parameters</h2>
        <p className="leading-relaxed mb-6">
          ES6 introduced default parameters, allowing you to specify default values for function parameters 
          if no argument is provided.
        </p>

        <CodeEditor 
          initialCode={`function greet(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greet("Alice");
greet(); // Uses default value`}
        />
      </section>

      <TryItBox 
        code={`function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));
console.log(multiply(7, 3));`}
        title="Try modifying this function to accept three parameters and multiply them all together"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pure vs Impure Functions</h2>
        <p className="leading-relaxed mb-6">
          A <strong>pure function</strong> always returns the same output for the same input and has no side effects. 
          An <strong>impure function</strong> may depend on or modify external state.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Pure Function</h3>
            <CodeEditor 
              initialCode={`function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5`}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Impure Function</h3>
            <CodeEditor 
              initialCode={`let count = 0;

function increment() {
  count++;
  console.log(count);
}

increment(); // Modifies external state`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          Pure functions are easier to test, debug, and reason about. Try to write pure functions whenever possible.
        </InfoBox>
      </section>
    </div>
  );
}
