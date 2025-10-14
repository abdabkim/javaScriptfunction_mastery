import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { Code, Play, RotateCcw, Package } from "lucide-react";

export default function FunctionBasics() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Basics" }]} />
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Function Basics</h1>
      <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
        Functions are the fundamental building blocks of JavaScript programming. They allow you to package code into reusable blocks 
        that perform specific tasks. Let's explore how to create and use functions effectively.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is a Function?</h2>
        
        <p className="leading-relaxed mb-4">
          A <strong>function</strong> is a self-contained block of code that performs a specific task. Think of it as a mini-program 
          within your larger program. Functions are one of the most important concepts in JavaScript because they allow you to:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li><strong>Organize your code</strong> - Break complex problems into smaller, manageable pieces</li>
          <li><strong>Reuse code</strong> - Write once, use many times throughout your program</li>
          <li><strong>Maintain code</strong> - Update logic in one place instead of multiple locations</li>
          <li><strong>Abstract complexity</strong> - Hide implementation details behind simple function calls</li>
        </ul>
        
        <InfoBox type="info">
          <strong>Real-World Analogy:</strong> A function is like a recipe in a cookbook. The recipe (function) defines the steps 
          to make a dish. When you want that dish, you follow the recipe (call the function) rather than figuring out the steps 
          from scratch each time. You can use the same recipe multiple times, and if you improve it, the improvement applies 
          everywhere you use it.
        </InfoBox>

        <p className="leading-relaxed mt-6">
          <strong>Key Terminology:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
          <li><strong>Function Declaration</strong> - The act of defining a function with its name, parameters, and code block</li>
          <li><strong>Function Call/Invocation</strong> - The act of executing a function by using its name followed by parentheses</li>
          <li><strong>Function Body</strong> - The code block between curly braces that contains the function's logic</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Declaration Syntax</h2>
        
        <p className="leading-relaxed mb-6">
          The most common way to create a function is through <strong>function declaration</strong>. This syntax consists of several parts:
        </p>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <ConceptCard
            icon={Code}
            title="function Keyword"
            description="Tells JavaScript you're defining a function. This is mandatory for function declarations."
          />
          <ConceptCard
            icon={Package}
            title="Function Name"
            description="An identifier that you'll use to call the function later. Should be descriptive of what the function does."
          />
          <ConceptCard
            icon={Play}
            title="Parameters ()"
            description="Parentheses that contain optional parameters - variables that act as placeholders for values passed to the function."
          />
          <ConceptCard
            icon={RotateCcw}
            title="Function Body {}"
            description="Curly braces containing the code that executes when the function is called."
          />
        </div>

        <CodeEditor 
          initialCode={`// Basic function declaration
function greet() {
  console.log("Hello, World!");
}

// Call (invoke) the function
greet();

// You can call it multiple times
greet();
greet();`}
        />

        <InfoBox type="tip">
          <strong>Naming Convention:</strong> Function names should be verbs or verb phrases that describe what the function does. 
          Use camelCase (first word lowercase, subsequent words capitalized). Examples: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">calculateTotal</code>, 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">getUserInfo</code>, 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">isValidEmail</code>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parameters and Arguments: Understanding the Difference</h2>
        
        <p className="leading-relaxed mb-4">
          Two terms that are often confused are <strong>parameters</strong> and <strong>arguments</strong>. While they're related, 
          they refer to different things:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ConceptCard
            icon={Code}
            title="Parameters"
            description="Variables defined in the function declaration. They act as placeholders that receive values when the function is called. Defined once in the function signature."
          />
          <ConceptCard
            icon={Play}
            title="Arguments"
            description="The actual values you pass to the function when calling it. Arguments fill in the parameters with real data. Can be different each time you call the function."
          />
        </div>

        <p className="leading-relaxed mb-6">
          <strong>Detailed Explanation:</strong> When you define a function, you specify <em>parameters</em> - these are like empty containers 
          waiting to be filled. When you <em>call</em> the function, you provide <em>arguments</em> - the actual values that fill those containers. 
          The parameters become local variables inside the function, accessible only within the function body.
        </p>

        <CodeEditor 
          initialCode={`// 'name' is a PARAMETER
function greet(name) {
  console.log("Hello, " + name + "!");
}

// "Alice" and "Bob" are ARGUMENTS
greet("Alice");
greet("Bob");

// Multiple parameters example
function introduce(firstName, age, city) {
  console.log(firstName + " is " + age + " years old and lives in " + city);
}

// Multiple arguments passed
introduce("Sarah", 25, "New York");`}
        />

        <InfoBox type="info">
          <strong>Parameter Order Matters:</strong> Arguments are matched to parameters by position. The first argument goes to the 
          first parameter, the second to the second parameter, and so on. If you pass fewer arguments than parameters, the extra 
          parameters will be <code className="px-2 py-1 bg-muted rounded text-sm font-mono">undefined</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Return Statement: Getting Values Back</h2>
        
        <p className="leading-relaxed mb-4">
          The <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return</code> statement serves two critical purposes:
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li><strong>Exits the function</strong> - Immediately stops execution of the function, even if there's more code below</li>
          <li><strong>Sends back a value</strong> - Returns a value to the code that called the function</li>
        </ul>

        <p className="leading-relaxed mb-6">
          <strong>Why is return important?</strong> Functions often need to compute a result and give it back to the calling code. 
          Without <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return</code>, the function can do work 
          (like logging to console) but can't provide a value for further use in your program.
        </p>

        <CodeEditor 
          initialCode={`// Function that returns a value
function add(a, b) {
  return a + b;
  console.log("This never runs!"); // Unreachable code
}

// Capture the returned value
const sum = add(5, 3);
console.log("Sum:", sum); // 8

// Use returned value directly
console.log("Double sum:", add(5, 3) * 2);

// Without return, function gives undefined
function noReturn(a, b) {
  a + b; // Calculation happens but value is lost
}

console.log(noReturn(5, 3)); // undefined`}
        />

        <InfoBox type="warning">
          <strong>Common Mistake:</strong> Forgetting to use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return</code> 
          when you need a value. Remember: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">console.log()</code> displays 
          a value but doesn't return it. If your function only logs a value, you can't use that value in calculations or store it in variables.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Default Parameters: Providing Fallback Values</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Default parameters</strong> allow you to specify fallback values for function parameters. If a caller doesn't provide 
          an argument for a parameter, the default value is used instead.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Why use defaults?</strong> Default parameters make your functions more flexible and safer. They prevent 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">undefined</code> values when arguments are missing, 
          and they clearly document expected input values. This was introduced in ES6 (ECMAScript 2015) as a cleaner way to handle 
          optional parameters.
        </p>

        <CodeEditor 
          initialCode={`// Default parameter syntax
function greet(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greet("Alice");  // "Welcome, Alice!"
greet();         // "Welcome, Guest!" (uses default)

// Multiple defaults
function createUser(username = "anonymous", role = "user", active = true) {
  console.log({username, role, active});
}

createUser("john", "admin");    // active uses default (true)
createUser();                    // All use defaults

// Default can be any expression
function multiply(a, b = a * 2) {
  return a * b;
}

console.log(multiply(5));    // 5 * 10 = 50
console.log(multiply(5, 3)); // 5 * 3 = 15`}
        />

        <InfoBox type="tip">
          <strong>Pro Tip:</strong> You can use expressions for default values, including other parameters. However, earlier 
          parameters are available to later ones, but not vice versa. Parameters are initialized left to right.
        </InfoBox>
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
        <h2 className="text-2xl font-semibold mb-4">Pure vs Impure Functions: Understanding Side Effects</h2>
        
        <p className="leading-relaxed mb-4">
          Functions can be categorized as <strong>pure</strong> or <strong>impure</strong> based on their behavior:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-[hsl(var(--success))] bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-[hsl(var(--success))]">Pure Functions</h3>
            <p className="mb-2">A pure function has two defining characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Deterministic</strong> - Always returns the same output for the same input</li>
              <li><strong>No side effects</strong> - Doesn't modify external state or interact with the outside world</li>
            </ul>
          </div>

          <div className="border-l-4 border-[hsl(var(--warning))] bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-[hsl(var(--warning))]">Impure Functions</h3>
            <p className="mb-2">An impure function has at least one of these characteristics:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Non-deterministic</strong> - May return different outputs for the same input</li>
              <li><strong>Has side effects</strong> - Modifies external variables, writes to console/files, makes network requests, etc.</li>
            </ul>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          <strong>What are side effects?</strong> A side effect is any operation that affects something outside the function's scope. 
          Examples include: modifying global variables, changing input objects, writing to console, making API calls, or updating the DOM.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Pure Function Example</h3>
            <CodeEditor 
              initialCode={`// Pure - same input = same output
// No side effects
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Always 5

// Also pure
function double(num) {
  return num * 2;
}`}
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Impure Function Example</h3>
            <CodeEditor 
              initialCode={`// Impure - modifies external state
let count = 0;

function increment() {
  count++;  // Side effect!
  console.log(count);
}

increment(); // 1
increment(); // 2 (different output)

// Also impure (random output)
function getRandomNumber() {
  return Math.random();
}`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Why prefer pure functions?</strong> Pure functions are easier to test (same input always gives same output), 
          easier to debug (no hidden state changes), easier to understand (no surprises), and can be safely cached or parallelized. 
          While you can't avoid impure functions entirely (programs need side effects!), aim to isolate them and keep most of your 
          code pure when possible.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Hoisting: Declaration Order Matters</h2>
        
        <p className="leading-relaxed mb-6">
          <strong>Hoisting</strong> is JavaScript's behavior of moving function declarations to the top of their scope during compilation. 
          This means you can call a function before it's defined in your code:
        </p>

        <CodeEditor 
          initialCode={`// This works! Function is hoisted
sayHello();

function sayHello() {
  console.log("Hello!");
}

// You can call it again after
sayHello();`}
        />

        <InfoBox type="info">
          <strong>Important Note:</strong> Only <em>function declarations</em> are hoisted. Function expressions (which we'll cover 
          in the next lesson) are NOT hoisted. This is a key difference between the two ways of creating functions.
        </InfoBox>
      </section>
    </div>
  );
}
