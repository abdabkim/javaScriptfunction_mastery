import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import { ArrowRight } from "lucide-react";

export default function FunctionExpressions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Expressions & Arrow Functions" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Function Expressions & Arrow Functions</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Beyond traditional function declarations, JavaScript offers function expressions and arrow functions 
        for more flexible and concise code. Let's explore these powerful alternatives.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Expressions</h2>
        <p className="leading-relaxed mb-6">
          A function expression defines a function as part of an expression. The function can be anonymous 
          (without a name) or named, and it's typically assigned to a variable.
        </p>

        <CodeEditor 
          initialCode={`// Function expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Alice"));
console.log(greet("Bob"));`}
        />

        <InfoBox type="info">
          Unlike function declarations, function expressions are not hoisted. This means you can't call them 
          before they're defined in your code.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arrow Functions</h2>
        <p className="leading-relaxed mb-6">
          Arrow functions provide a shorter syntax for writing functions. They use the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">=&gt;</code> syntax 
          and have some important differences from regular functions, particularly regarding <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> binding.
        </p>

        <CodeEditor 
          initialCode={`// Arrow function
const greet = (name) => {
  return "Hello, " + name + "!";
};

console.log(greet("Charlie"));

// Shorter syntax (implicit return)
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arrow Function Variations</h2>
        <p className="leading-relaxed mb-6">
          Arrow functions have several syntax variations depending on the number of parameters and whether 
          you need multiple statements.
        </p>

        <CodeEditor 
          initialCode={`// No parameters
const sayHello = () => console.log("Hello!");
sayHello();

// One parameter (parentheses optional)
const square = x => x * x;
console.log("Square:", square(5));

// Multiple parameters
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 6));

// Multiple statements
const greetAndAdd = (name, a, b) => {
  console.log("Hello, " + name + "!");
  return a + b;
};
console.log(greetAndAdd("David", 10, 5));`}
        />

        <InfoBox type="tip">
          When your arrow function has only one expression, you can omit the curly braces and the return keyword 
          for a more concise syntax.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Anonymous Functions</h2>
        <p className="leading-relaxed mb-6">
          Anonymous functions are functions without a name. They're commonly used as arguments to other functions 
          or immediately invoked.
        </p>

        <CodeEditor 
          initialCode={`// Anonymous function as callback
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log("Doubled:", doubled);

// With arrow function
const tripled = numbers.map(num => num * 3);
console.log("Tripled:", tripled);`}
        />
      </section>

      <TryItBox 
        code={`// Convert this function to arrow syntax
const calculateArea = function(width, height) {
  return width * height;
};

console.log("Area:", calculateArea(5, 10));`}
        title="Convert the function expression to an arrow function with implicit return"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Use Arrow Functions</h2>
        <p className="leading-relaxed mb-6">
          Arrow functions are great for short, simple functions, but they have limitations. They don't have 
          their own <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> binding and can't be used as constructors.
        </p>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="h-5 w-5 text-chart-2" />
              <span className="font-semibold">Use arrow functions for:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-7">
              <li>Short callback functions</li>
              <li>Array methods (map, filter, reduce)</li>
              <li>When you need lexical <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> binding</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="h-5 w-5 text-destructive" />
              <span className="font-semibold">Avoid arrow functions for:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-7">
              <li>Object methods that need <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code></li>
              <li>Functions that need to be used as constructors</li>
              <li>Functions that need access to <code className="px-1 py-0.5 bg-muted rounded font-mono">arguments</code> object</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
