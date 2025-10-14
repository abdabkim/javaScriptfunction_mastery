import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { ArrowRight, Code, FileCode, Zap } from "lucide-react";

export default function FunctionExpressions() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Expressions & Arrow Functions" }]} />
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Function Expressions & Arrow Functions</h1>
      <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
        Beyond traditional function declarations, JavaScript offers function expressions and arrow functions 
        for more flexible and concise code. Understanding these alternatives is crucial for modern JavaScript development.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is a Function Expression?</h2>
        
        <p className="leading-relaxed mb-4">
          A <strong>function expression</strong> is a way to define a function as part of a larger expression, typically by assigning 
          it to a variable. Unlike function declarations (which we covered in Function Basics), function expressions are created 
          when the JavaScript interpreter reaches that line of code during execution.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Key differences from function declarations:</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ConceptCard
            icon={Code}
            title="Function Declaration"
            description="Hoisted to the top of scope. Can be called before it's defined in the code. Uses 'function' keyword at the start."
          />
          <ConceptCard
            icon={FileCode}
            title="Function Expression"
            description="Not hoisted. Must be defined before being called. Function is assigned to a variable or used as a value."
          />
        </div>

        <CodeEditor 
          initialCode={`// Function expression - anonymous
const greet = function(name) {
  return "Hello, " + name + "!";
};

console.log(greet("Alice"));

// Named function expression
const goodbye = function farewell(name) {
  return "Goodbye, " + name + "!";
};

console.log(goodbye("Bob"));

// The name 'farewell' is only available inside the function
// console.log(farewell("test")); // Error!`}
        />

        <InfoBox type="warning">
          <strong>Critical Difference - Hoisting:</strong> Function expressions are <strong>not hoisted</strong>. This means you 
          cannot call the function before the line where it's defined. The variable is hoisted but initialized as 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">undefined</code> until the assignment runs.
        </InfoBox>

        <CodeEditor 
          initialCode={`// This FAILS - function expression not hoisted
// greet("Alice"); // TypeError: greet is not a function

const greet = function(name) {
  return "Hello, " + name + "!";
};

greet("Alice"); // Now it works`}
        />

        <p className="leading-relaxed mt-6 mb-4">
          <strong>When to use function expressions:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>When you want to conditionally create a function</li>
          <li>When passing a function as an argument to another function (callbacks)</li>
          <li>When you need to prevent hoisting (enforce order of execution)</li>
          <li>When creating methods inside objects</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arrow Functions: Modern Syntax</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Arrow functions</strong> (also called "fat arrow functions") are a more concise syntax for writing function expressions. 
          They were introduced in ES6 (ECMAScript 2015) and have become the preferred way to write short, simple functions.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Arrow function syntax:</strong> The arrow <code className="px-2 py-1 bg-muted rounded text-sm font-mono">=&gt;</code> 
          replaces the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">function</code> keyword. The basic structure is: 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">(parameters) =&gt; expression</code>
        </p>

        <CodeEditor 
          initialCode={`// Traditional function expression
const greet1 = function(name) {
  return "Hello, " + name + "!";
};

// Arrow function - same thing, shorter
const greet2 = (name) => {
  return "Hello, " + name + "!";
};

// Arrow function with implicit return (even shorter!)
const greet3 = (name) => "Hello, " + name + "!";

console.log(greet1("Alice"));
console.log(greet2("Bob"));
console.log(greet3("Charlie"));`}
        />

        <InfoBox type="info">
          <strong>Implicit Return:</strong> When an arrow function body contains only a single expression (no curly braces), 
          that expression is automatically returned. You don't need the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return</code> keyword.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Arrow Function Syntax Variations</h2>
        
        <p className="leading-relaxed mb-6">
          Arrow functions have flexible syntax that changes based on the number of parameters and whether you need a single 
          expression or multiple statements:
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-primary/50 bg-primary/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">No Parameters</h3>
            <p className="text-sm text-muted-foreground mb-2">Use empty parentheses <code className="px-1 py-0.5 bg-muted rounded font-mono">()</code></p>
            <CodeEditor 
              initialCode={`const sayHello = () => console.log("Hello!");
sayHello();

const getRandomNumber = () => Math.random();
console.log(getRandomNumber());`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--success))]/50 bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">One Parameter</h3>
            <p className="text-sm text-muted-foreground mb-2">Parentheses are optional (but recommended for consistency)</p>
            <CodeEditor 
              initialCode={`// Without parentheses
const square = x => x * x;
console.log(square(5)); // 25

// With parentheses (clearer)
const cube = (x) => x * x * x;
console.log(cube(3)); // 27`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--warning))]/50 bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Multiple Parameters</h3>
            <p className="text-sm text-muted-foreground mb-2">Parentheses are required</p>
            <CodeEditor 
              initialCode={`const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const getFullName = (first, last) => first + " " + last;
console.log(getFullName("John", "Doe"));`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--info))]/50 bg-[hsl(var(--info))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Multiple Statements</h3>
            <p className="text-sm text-muted-foreground mb-2">Use curly braces and explicit <code className="px-1 py-0.5 bg-muted rounded font-mono">return</code></p>
            <CodeEditor 
              initialCode={`const greetAndCalculate = (name, a, b) => {
  console.log("Hello, " + name + "!");
  const sum = a + b;
  console.log("Sum:", sum);
  return sum;
};

const result = greetAndCalculate("Alice", 10, 5);
console.log("Result:", result);`}
            />
          </div>

          <div className="border-l-4 border-accent/50 bg-accent/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Returning Objects</h3>
            <p className="text-sm text-muted-foreground mb-2">Wrap object in parentheses for implicit return</p>
            <CodeEditor 
              initialCode={`// Without parentheses - ERROR (thinks {} is function body)
// const makePerson1 = (name, age) => {name: name, age: age};

// Correct - wrap in parentheses
const makePerson = (name, age) => ({name: name, age: age});

console.log(makePerson("Alice", 25));

// Even shorter with ES6 property shorthand
const makePerson2 = (name, age) => ({name, age});
console.log(makePerson2("Bob", 30));`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Best Practice:</strong> Always use parentheses around parameters, even for single parameters. This makes your 
          code more consistent and easier to refactor if you later need to add more parameters or default values.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Anonymous Functions: Functions Without Names</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Anonymous functions</strong> are functions that have no name. Both function expressions and arrow functions 
          can be anonymous. They're extremely common in JavaScript, especially as callback functions.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Where are anonymous functions used?</strong>
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li><strong>Callbacks</strong> - Passed to other functions like array methods or event handlers</li>
          <li><strong>Immediately Invoked Function Expressions (IIFEs)</strong> - Functions that run immediately after definition</li>
          <li><strong>One-time use</strong> - When a function is only needed in one place and doesn't need a name</li>
        </ul>

        <CodeEditor 
          initialCode={`// Anonymous function as callback in array methods
const numbers = [1, 2, 3, 4, 5];

// Using anonymous function expression
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log("Doubled:", doubled);

// Using anonymous arrow function (more common)
const tripled = numbers.map(num => num * 3);
console.log("Tripled:", tripled);

// Anonymous function with filter
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens);

// Chaining with anonymous functions
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 10);
console.log("Filtered & mapped:", result);`}
        />

        <InfoBox type="warning">
          <strong>Debugging Anonymous Functions:</strong> Anonymous functions show up as "(anonymous)" in error stack traces, 
          making debugging harder. For complex functions or those that might throw errors, consider using named function expressions 
          to make debugging easier.
        </InfoBox>
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
        <h2 className="text-2xl font-semibold mb-4">The 'this' Keyword: A Critical Difference</h2>
        
        <p className="leading-relaxed mb-4">
          One of the most important differences between traditional functions and arrow functions is how they handle the 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> keyword:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border-l-4 border-primary/50 bg-primary/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Traditional Functions</h3>
            <p className="text-sm text-muted-foreground">
              Have their own <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> context. The value of 
              <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> depends on <strong>how</strong> the function is called.
            </p>
          </div>
          <div className="border-l-4 border-[hsl(var(--success))]/50 bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Arrow Functions</h3>
            <p className="text-sm text-muted-foreground">
              Don't have their own <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code>. They inherit 
              <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> from the surrounding (lexical) scope.
            </p>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          <strong>What does "lexical this" mean?</strong> Arrow functions use <strong>lexical scoping</strong> for 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> - they look up to the enclosing scope 
          to find what <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> should be, rather than 
          defining their own. This makes them perfect for callbacks where you want to preserve the outer context.
        </p>

        <CodeEditor 
          initialCode={`const person = {
  name: "Alice",
  
  // Traditional function - 'this' refers to person
  greetTraditional: function() {
    console.log("Hello, " + this.name);
  },
  
  // Arrow function - 'this' refers to outer scope
  greetArrow: () => {
    console.log("Hello, " + this.name); // 'this' is NOT person!
  }
};

person.greetTraditional(); // "Hello, Alice"
person.greetArrow();        // "Hello, undefined"`}
        />

        <InfoBox type="info">
          <strong>Practical Implication:</strong> Use traditional functions for object methods that need to access 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code>. Use arrow functions for callbacks 
          where you want to preserve the outer <code className="px-2 py-1 bg-muted rounded text-sm font-mono">this</code> context.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Use Each Type of Function</h2>
        
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-[hsl(var(--success))] bg-[hsl(var(--success))]/5 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-[hsl(var(--success))]" />
              <span className="font-semibold text-[hsl(var(--success))]">Use Arrow Functions For:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm ml-7">
              <li>Short callback functions (array methods, event handlers)</li>
              <li>When you need to preserve the outer <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> context</li>
              <li>Simple transformations or calculations</li>
              <li>Functional programming patterns (map, filter, reduce)</li>
              <li>React component methods that need access to component <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code></li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[hsl(var(--warning))] bg-[hsl(var(--warning))]/5 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="h-5 w-5 text-[hsl(var(--warning))]" />
              <span className="font-semibold text-[hsl(var(--warning))]">Use Traditional Functions For:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm ml-7">
              <li>Object methods that need their own <code className="px-1 py-0.5 bg-muted rounded font-mono">this</code> context</li>
              <li>Constructor functions (though classes are preferred now)</li>
              <li>Functions that need access to <code className="px-1 py-0.5 bg-muted rounded font-mono">arguments</code> object</li>
              <li>Generator functions (can't be arrow functions)</li>
              <li>When you need the function to be hoisted</li>
            </ul>
          </div>

          <div className="p-4 border-l-4 border-[hsl(var(--info))] bg-[hsl(var(--info))]/5 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-5 w-5 text-[hsl(var(--info))]" />
              <span className="font-semibold text-[hsl(var(--info))]">Function Expressions (Non-Arrow) For:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm ml-7">
              <li>When you need a named function for debugging but don't want hoisting</li>
              <li>Conditional function creation based on runtime conditions</li>
              <li>Recursive anonymous functions (can reference themselves by name)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Pitfalls and Best Practices</h2>
        
        <InfoBox type="warning">
          <strong>Pitfall #1: Forgetting Parentheses for Object Returns</strong>
          <CodeEditor 
            initialCode={`// WRONG - JavaScript thinks {} is function body
// const makePerson = (name) => {name: name};

// CORRECT - wrap in parentheses
const makePerson = (name) => ({name: name});
console.log(makePerson("Alice"));`}
          />
        </InfoBox>

        <InfoBox type="warning">
          <strong>Pitfall #2: Using Arrow Functions for Object Methods</strong>
          <CodeEditor 
            initialCode={`// WRONG - 'this' doesn't refer to the object
const obj = {
  value: 42,
  getValue: () => this.value  // undefined!
};

// CORRECT - use traditional function
const obj2 = {
  value: 42,
  getValue: function() { return this.value; }
};

console.log(obj2.getValue()); // 42`}
          />
        </InfoBox>

        <InfoBox type="tip">
          <strong>Best Practice: Consistency</strong> Choose a style and stick with it. Modern codebases typically use arrow 
          functions by default and only switch to traditional functions when needed (object methods, constructors, etc.).
        </InfoBox>
      </section>
    </div>
  );
}
