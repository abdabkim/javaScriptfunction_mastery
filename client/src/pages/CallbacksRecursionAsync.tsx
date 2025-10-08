import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { GitBranch, Repeat, Clock } from "lucide-react";

export default function CallbacksRecursionAsync() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Callbacks, Recursion & Async Functions" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Callbacks, Recursion & Async Functions</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn advanced function patterns including callbacks for asynchronous operations, recursion for 
        elegant problem-solving, and modern async/await syntax for handling promises.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Callback Functions</h2>
        <p className="leading-relaxed mb-6">
          A callback is a function passed as an argument to another function. It's called (or "called back") 
          at a later point, often after an operation completes. This pattern is fundamental to asynchronous JavaScript.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard
            icon={GitBranch}
            title="Higher-order Functions"
            description="Functions that accept other functions as arguments or return functions."
          />
          <ConceptCard
            icon={Clock}
            title="Asynchronous Callbacks"
            description="Functions executed after an async operation completes."
          />
          <ConceptCard
            icon={Repeat}
            title="Array Callbacks"
            description="Functions passed to array methods like map, filter, and reduce."
          />
        </div>

        <CodeEditor 
          initialCode={`// Simple callback example
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Array method callbacks
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recursion</h2>
        <p className="leading-relaxed mb-6">
          Recursion is when a function calls itself. It's a powerful technique for solving problems that can be 
          broken down into smaller, similar subproblems. Every recursive function needs a base case to prevent infinite loops.
        </p>

        <CodeEditor 
          initialCode={`// Factorial using recursion
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5));

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fib(7) =", fibonacci(7));`}
        />

        <InfoBox type="warning">
          Always ensure your recursive function has a proper base case that will eventually be reached, 
          otherwise you'll get a stack overflow error.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Practical Recursion Examples</h2>
        <p className="leading-relaxed mb-6">
          Recursion shines when working with tree structures, nested data, and problems with natural recursive definitions.
        </p>

        <CodeEditor 
          initialCode={`// Reverse a string using recursion
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello"));

// Sum array using recursion
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log("Sum:", sumArray([1, 2, 3, 4, 5]));`}
        />
      </section>

      <TryItBox 
        code={`// Count down from a number using recursion
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(5);`}
        title="Modify this to count up from 0 to n instead of counting down"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Async Functions</h2>
        <p className="leading-relaxed mb-6">
          Async functions provide a cleaner way to work with asynchronous code. They always return a Promise 
          and allow you to use the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">await</code> keyword 
          to pause execution until a Promise resolves.
        </p>

        <CodeEditor 
          initialCode={`// Simulating async operation
function delay(ms) {
  return new Promise(resolve => 
    setTimeout(resolve, ms)
  );
}

async function fetchData() {
  console.log("Fetching data...");
  await delay(1000);
  console.log("Data received!");
  return { id: 1, name: "Sample Data" };
}

// Using async/await
async function processData() {
  const data = await fetchData();
  console.log("Processing:", data);
}

processData();`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Error Handling in Async Functions</h2>
        <p className="leading-relaxed mb-6">
          Use try/catch blocks to handle errors in async functions, just like with synchronous code.
        </p>

        <CodeEditor 
          initialCode={`async function riskyOperation() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("Operation failed!");
  }
  return "Success!";
}

async function handleOperation() {
  try {
    const result = await riskyOperation();
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

handleOperation();`}
        />

        <InfoBox type="tip">
          Always wrap your await calls in try/catch blocks when you expect operations might fail. 
          This prevents unhandled promise rejections.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Combining Callbacks and Async</h2>
        <p className="leading-relaxed mb-6">
          Modern JavaScript often combines these patterns. Understanding both helps you work with any codebase.
        </p>

        <CodeEditor 
          initialCode={`// Processing array with async callback
const items = [1, 2, 3, 4, 5];

async function processItem(item) {
  // Simulate async operation
  await new Promise(r => setTimeout(r, 100));
  return item * 2;
}

async function processAll() {
  for (const item of items) {
    const result = await processItem(item);
    console.log("Processed:", result);
  }
}

processAll();`}
        />
      </section>
    </div>
  );
}
