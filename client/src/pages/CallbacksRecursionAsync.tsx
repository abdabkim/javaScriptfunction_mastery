import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { GitBranch, Repeat, Clock, Layers, AlertTriangle } from "lucide-react";

export default function CallbacksRecursionAsync() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Callbacks, Recursion & Async Functions" }]} />
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Callbacks, Recursion & Async Functions</h1>
      <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
        Master advanced function patterns including callbacks for asynchronous operations, recursion for 
        elegant problem-solving, and modern async/await syntax for handling promises. These concepts are essential 
        for professional JavaScript development.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is a Callback Function?</h2>
        
        <p className="leading-relaxed mb-4">
          A <strong>callback function</strong> is a function passed as an argument to another function, to be executed at a later time. 
          The term "callback" comes from the idea that the function will be "called back" by the receiving function when needed.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Why callbacks exist:</strong> JavaScript is single-threaded, meaning it can only do one thing at a time. Callbacks 
          allow us to handle operations that take time (like fetching data, reading files, or waiting for user input) without blocking 
          the main thread. While one operation is waiting, JavaScript can continue executing other code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard
            icon={GitBranch}
            title="Higher-Order Functions"
            description="Functions that accept other functions as arguments or return functions. These enable callback patterns."
          />
          <ConceptCard
            icon={Clock}
            title="Asynchronous Callbacks"
            description="Functions executed after an async operation completes, like setTimeout or fetch requests."
          />
          <ConceptCard
            icon={Repeat}
            title="Synchronous Callbacks"
            description="Functions executed immediately, like those passed to array methods (map, filter, forEach)."
          />
        </div>

        <p className="leading-relaxed mb-6">
          <strong>Key Terminology:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Higher-Order Function</strong> - A function that takes another function as an argument or returns a function</li>
          <li><strong>Callback Function</strong> - The function passed as an argument that will be called later</li>
          <li><strong>Synchronous Callback</strong> - Executed immediately within the higher-order function</li>
          <li><strong>Asynchronous Callback</strong> - Executed later, after some operation completes or time passes</li>
        </ul>

        <CodeEditor 
          initialCode={`// Simple synchronous callback
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback(); // Execute the callback immediately
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Anonymous callback (more common)
greet("Bob", function() {
  console.log("Nice to meet you!");
});

// Arrow function callback (modern style)
greet("Charlie", () => {
  console.log("See you later!");
});`}
        />

        <InfoBox type="info">
          <strong>Callbacks vs Regular Functions:</strong> Any function can be a callback. The difference isn't in how it's written, 
          but in how it's used - it's passed as a value to another function rather than called directly.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Array Methods: The Most Common Callbacks</h2>
        
        <p className="leading-relaxed mb-4">
          The most common place you'll use callbacks is with array methods. These methods accept callback functions that define 
          how to process each element.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Understanding the pattern:</strong> Array methods like <code className="px-2 py-1 bg-muted rounded text-sm font-mono">map</code>, 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">filter</code>, and 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">reduce</code> are higher-order functions. They loop through 
          the array internally and call your callback function for each element, passing the element (and other info) as arguments.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-primary/50 bg-primary/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">map() - Transform Each Element</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Creates a new array by calling the callback on each element and using the returned values.
            </p>
            <CodeEditor 
              initialCode={`const numbers = [1, 2, 3, 4, 5];

// The callback receives (element, index, array)
const doubled = numbers.map((num, index) => {
  console.log(\`Processing index \${index}: \${num}\`);
  return num * 2;
});

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Practical example: extract property from objects
const users = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30}
];

const names = users.map(user => user.name);
console.log("Names:", names);`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--success))]/50 bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">filter() - Select Elements</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Creates a new array containing only elements where the callback returns true.
            </p>
            <CodeEditor 
              initialCode={`const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Filter objects
const users = [
  {name: "Alice", age: 17},
  {name: "Bob", age: 25},
  {name: "Charlie", age: 30}
];

const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--warning))]/50 bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">reduce() - Accumulate to Single Value</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Reduces array to a single value by repeatedly calling callback with an accumulator.
            </p>
            <CodeEditor 
              initialCode={`const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
// callback receives (accumulator, current, index, array)
const sum = numbers.reduce((acc, num) => {
  console.log(\`acc: \${acc}, num: \${num}\`);
  return acc + num;
}, 0); // 0 is initial value

console.log("Sum:", sum);

// More complex: group by property
const people = [
  {name: "Alice", dept: "Engineering"},
  {name: "Bob", dept: "Sales"},
  {name: "Charlie", dept: "Engineering"}
];

const byDept = people.reduce((groups, person) => {
  if (!groups[person.dept]) {
    groups[person.dept] = [];
  }
  groups[person.dept].push(person.name);
  return groups;
}, {});

console.log("By department:", byDept);`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Chaining Array Methods:</strong> Since these methods return arrays, you can chain them together for powerful 
          data transformations: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">array.filter(...).map(...).reduce(...)</code>
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Asynchronous Callbacks: Handling Delays</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Asynchronous callbacks</strong> are executed later, after some operation completes or time passes. They're the foundation 
          of JavaScript's non-blocking behavior.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Common async operations that use callbacks:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code className="px-1 py-0.5 bg-muted rounded font-mono">setTimeout</code> / <code className="px-1 py-0.5 bg-muted rounded font-mono">setInterval</code> - Execute after a delay</li>
          <li>Event listeners - Execute when events occur (clicks, key presses, etc.)</li>
          <li>HTTP requests - Execute when server responds (older APIs, before Promises)</li>
          <li>File operations - Execute when file is read/written (Node.js)</li>
        </ul>

        <CodeEditor 
          initialCode={`// setTimeout - executes callback after delay
console.log("1. Starting...");

setTimeout(() => {
  console.log("2. This runs after 1 second");
}, 1000);

console.log("3. This runs immediately");

// Output order: 1 → 3 → 2

// Practical async callback example
function fetchUserData(userId, callback) {
  console.log("Fetching user data...");
  
  // Simulate network delay
  setTimeout(() => {
    const user = {id: userId, name: "Alice"};
    callback(user); // Call the callback with the data
  }, 1500);
}

fetchUserData(123, (user) => {
  console.log("Received user:", user);
});

console.log("Request sent, continuing...");`}
        />

        <InfoBox type="info">
          <strong>The Event Loop:</strong> JavaScript uses an event loop to handle async operations. When you use 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">setTimeout</code>, the callback is placed in a queue 
          and executed after the specified delay AND after all synchronous code finishes.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Callback Hell and How to Avoid It</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Callback Hell</strong> (also called "Pyramid of Doom") occurs when you nest multiple callbacks, creating deeply 
          indented, hard-to-read code. This was a major problem before Promises and async/await.
        </p>

        <CodeEditor 
          initialCode={`// Callback Hell example - DON'T DO THIS!
function badAsyncPattern() {
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
        setTimeout(() => {
          console.log("Step 4");
          // This keeps getting worse!
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Better: Named functions
function step1() {
  console.log("Step 1");
  setTimeout(step2, 1000);
}

function step2() {
  console.log("Step 2");
  setTimeout(step3, 1000);
}

function step3() {
  console.log("Step 3");
  // done
}

setTimeout(step1, 1000);`}
        />

        <InfoBox type="warning">
          <strong>Modern Solution:</strong> Use Promises with <code className="px-2 py-1 bg-muted rounded text-sm font-mono">then()</code> 
          chaining or async/await (covered later) to avoid callback hell. These make async code look more like synchronous code.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Recursion?</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Recursion</strong> is a programming technique where a function calls itself to solve a problem. It's like looking 
          in a mirror that reflects another mirror - you see infinite reflections, but each one is slightly smaller.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>How recursion works:</strong> Instead of using loops, a recursive function breaks down a problem into smaller, 
          similar sub-problems. Each function call works on a smaller piece until it reaches a simple case it can solve directly 
          (the "base case").
        </p>

        <div className="border-l-4 border-primary/50 bg-primary/5 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Two Essential Components of Recursion:</h3>
          <ol className="list-decimal list-inside space-y-2 ml-2 mt-3">
            <li><strong>Base Case</strong> - The condition that stops the recursion. Without it, you get infinite recursion and a stack overflow error.</li>
            <li><strong>Recursive Case</strong> - The part where the function calls itself with a modified argument, moving toward the base case.</li>
          </ol>
        </div>

        <CodeEditor 
          initialCode={`// Classic example: Factorial
// 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(n) {
  // BASE CASE: Stop recursion
  if (n <= 1) {
    return 1;
  }
  
  // RECURSIVE CASE: Call itself
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5));

// How it works:
// factorial(5) = 5 * factorial(4)
//              = 5 * 4 * factorial(3)
//              = 5 * 4 * 3 * factorial(2)
//              = 5 * 4 * 3 * 2 * factorial(1)
//              = 5 * 4 * 3 * 2 * 1
//              = 120`}
        />

        <InfoBox type="warning">
          <strong>Stack Overflow Warning:</strong> Each recursive call adds to the call stack. Too many calls (usually 10,000+) 
          cause a stack overflow error. Always ensure your base case will be reached!
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">When to Use Recursion</h2>
        
        <p className="leading-relaxed mb-6">
          Recursion is particularly elegant for certain types of problems:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Tree or nested data structures</strong> - Traversing DOM, file systems, or JSON with arbitrary depth</li>
          <li><strong>Mathematical sequences</strong> - Fibonacci, factorials, power calculations</li>
          <li><strong>Divide and conquer algorithms</strong> - Binary search, merge sort, quick sort</li>
          <li><strong>Problems with natural recursive definitions</strong> - Combinations, permutations</li>
        </ul>

        <div className="space-y-6">
          <div className="border-l-4 border-[hsl(var(--success))]/50 bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example: Fibonacci Sequence</h3>
            <CodeEditor 
              initialCode={`// Fibonacci: Each number is sum of previous two
// 0, 1, 1, 2, 3, 5, 8, 13, 21...

function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--info))]/50 bg-[hsl(var(--info))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example: Sum Array Recursively</h3>
            <CodeEditor 
              initialCode={`function sumArray(arr) {
  // Base case: empty array
  if (arr.length === 0) {
    return 0;
  }
  
  // Recursive case: first element + sum of rest
  return arr[0] + sumArray(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumArray(numbers));

// How it works:
// sumArray([1,2,3,4,5])
// = 1 + sumArray([2,3,4,5])
// = 1 + 2 + sumArray([3,4,5])
// = 1 + 2 + 3 + sumArray([4,5])
// = 1 + 2 + 3 + 4 + sumArray([5])
// = 1 + 2 + 3 + 4 + 5 + sumArray([])
// = 1 + 2 + 3 + 4 + 5 + 0
// = 15`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--warning))]/50 bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Example: Flatten Nested Array</h3>
            <CodeEditor 
              initialCode={`function flatten(arr) {
  let result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursive case: flatten nested array
      result = result.concat(flatten(item));
    } else {
      // Base case: regular item
      result.push(item);
    }
  }
  
  return result;
}

const nested = [1, [2, 3], [[4, 5], 6], 7];
console.log("Nested:", nested);
console.log("Flattened:", flatten(nested));`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Recursion vs Iteration:</strong> Most recursive functions can be rewritten with loops. Use recursion when 
          it makes the code clearer. Use iteration when performance is critical or the problem doesn't naturally fit recursion.
        </InfoBox>
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
        <h2 className="text-2xl font-semibold mb-4">Async Functions and Promises</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Async functions</strong> are a modern way to work with asynchronous code. They were introduced in ES2017 (ES8) 
          and provide a cleaner alternative to callbacks and Promise chains.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Key concepts:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Promise</strong> - An object representing the eventual completion (or failure) of an async operation</li>
          <li><strong>async keyword</strong> - Declares a function that returns a Promise automatically</li>
          <li><strong>await keyword</strong> - Pauses async function execution until a Promise resolves, then returns the result</li>
          <li><strong>Sequential execution</strong> - await makes async code look and behave like synchronous code</li>
        </ul>

        <CodeEditor 
          initialCode={`// Creating a Promise
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Using async/await (modern way)
async function modernAsync() {
  console.log("Starting...");
  
  await delay(1000);
  console.log("After 1 second");
  
  await delay(1000);
  console.log("After 2 seconds");
  
  return "Done!";
}

// Calling async function
modernAsync().then(result => {
  console.log(result);
});

// Async functions ALWAYS return a Promise
console.log(modernAsync()); // Promise object`}
        />

        <InfoBox type="info">
          <strong>Under the Hood:</strong> An <code className="px-2 py-1 bg-muted rounded text-sm font-mono">async</code> function 
          always returns a Promise. When you use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return value</code>, 
          it's equivalent to <code className="px-2 py-1 bg-muted rounded text-sm font-mono">return Promise.resolve(value)</code>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Error Handling in Async Functions</h2>
        
        <p className="leading-relaxed mb-6">
          Use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">try/catch</code> blocks with async/await, 
          just like synchronous code. This is much cleaner than Promise <code className="px-2 py-1 bg-muted rounded text-sm font-mono">.catch()</code> chains.
        </p>

        <CodeEditor 
          initialCode={`async function riskyOperation() {
  const random = Math.random();
  
  if (random < 0.5) {
    throw new Error("Operation failed!");
  }
  
  return "Success! Random was: " + random.toFixed(2);
}

// Proper error handling
async function handleOperation() {
  try {
    const result = await riskyOperation();
    console.log("✓ Result:", result);
  } catch (error) {
    console.log("✗ Error:", error.message);
  } finally {
    console.log("Operation complete (success or fail)");
  }
}

// Run multiple times to see both outcomes
handleOperation();
handleOperation();
handleOperation();`}
        />

        <InfoBox type="warning">
          <strong>Critical:</strong> Always wrap <code className="px-2 py-1 bg-muted rounded text-sm font-mono">await</code> calls 
          in try/catch when operations might fail. Unhandled promise rejections can crash Node.js applications and cause issues in browsers.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Parallel vs Sequential Async Operations</h2>
        
        <p className="leading-relaxed mb-4">
          A common mistake is running independent async operations sequentially when they could run in parallel. This wastes time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-4 border-[hsl(var(--warning))]/50 bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">❌ Sequential (Slow)</h3>
            <CodeEditor 
              initialCode={`async function fetchSequential() {
  console.time("Sequential");
  
  // Each waits for previous to finish
  const user = await fetchUser();
  const posts = await fetchPosts();
  const comments = await fetchComments();
  
  console.timeEnd("Sequential");
  // Total: ~3 seconds
}

function fetchUser() {
  return new Promise(r => 
    setTimeout(() => r("user"), 1000)
  );
}
function fetchPosts() {
  return new Promise(r => 
    setTimeout(() => r("posts"), 1000)
  );
}
function fetchComments() {
  return new Promise(r => 
    setTimeout(() => r("comments"), 1000)
  );
}

fetchSequential();`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--success))]/50 bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">✓ Parallel (Fast)</h3>
            <CodeEditor 
              initialCode={`async function fetchParallel() {
  console.time("Parallel");
  
  // Start all requests at once
  const [user, posts, comments] = 
    await Promise.all([
      fetchUser(),
      fetchPosts(),
      fetchComments()
    ]);
  
  console.timeEnd("Parallel");
  // Total: ~1 second (all at once!)
}

function fetchUser() {
  return new Promise(r => 
    setTimeout(() => r("user"), 1000)
  );
}
function fetchPosts() {
  return new Promise(r => 
    setTimeout(() => r("posts"), 1000)
  );
}
function fetchComments() {
  return new Promise(r => 
    setTimeout(() => r("comments"), 1000)
  );
}

fetchParallel();`}
            />
          </div>
        </div>

        <InfoBox type="tip">
          <strong>Best Practice:</strong> Use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">Promise.all()</code> 
          when you have multiple independent async operations. Only use sequential await when one operation depends on the result of another.
        </InfoBox>
      </section>
    </div>
  );
}
