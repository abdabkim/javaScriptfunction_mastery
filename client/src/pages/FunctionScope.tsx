import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { Box, Boxes, Lock, Globe, Eye, EyeOff } from "lucide-react";

export default function FunctionScope() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Scope & Closures" }]} />
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Function Scope & Closures</h1>
      <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
        Understanding scope and closures is fundamental to writing robust JavaScript code. These concepts determine 
        where variables are accessible, how functions remember their environment, and how to create truly private data.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Scope?</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Scope</strong> is the context in which variables and functions are accessible in your code. It determines the 
          <em>visibility</em> and <em>lifetime</em> of variables. Think of scope as "the area where a variable exists and can be used."
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Why does scope matter?</strong> Scope controls:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li><strong>Variable collision</strong> - Prevents naming conflicts between different parts of your code</li>
          <li><strong>Data privacy</strong> - Protects variables from unwanted access or modification</li>
          <li><strong>Memory management</strong> - Variables are garbage collected when their scope ends</li>
          <li><strong>Code organization</strong> - Helps structure code into logical, self-contained units</li>
        </ul>

        <p className="leading-relaxed mb-6">
          JavaScript has <strong>three types of scope</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard
            icon={Globe}
            title="Global Scope"
            description="Variables declared outside any function or block. Accessible everywhere in your code, including inside all functions and blocks."
          />
          <ConceptCard
            icon={Box}
            title="Function Scope"
            description="Variables declared inside a function using var, let, or const. Only accessible within that specific function."
          />
          <ConceptCard
            icon={Lock}
            title="Block Scope"
            description="Variables declared with let/const inside curly braces {}. Only accessible within that block (if, for, while, etc.)."
          />
        </div>

        <InfoBox type="info">
          <strong>Scope Chain:</strong> When JavaScript looks for a variable, it starts in the current scope and works outward 
          through parent scopes until it finds the variable or reaches global scope. This is called the <em>scope chain</em>.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Global Scope: Variables Everywhere</h2>
        
        <p className="leading-relaxed mb-4">
          Variables in <strong>global scope</strong> are declared outside any function or block. They're accessible from anywhere 
          in your program - including inside functions, blocks, and even other files (in browser environments).
        </p>

        <p className="leading-relaxed mb-6">
          <strong>When variables become global:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>Declared outside any function or block with <code className="px-1 py-0.5 bg-muted rounded font-mono">var</code>, 
          <code className="px-1 py-0.5 bg-muted rounded font-mono">let</code>, or 
          <code className="px-1 py-0.5 bg-muted rounded font-mono">const</code></li>
          <li>Assigned without any declaration keyword (creates implicit global - avoid this!)</li>
          <li>Properties added to the global object (<code className="px-1 py-0.5 bg-muted rounded font-mono">window</code> in browsers)</li>
        </ul>

        <CodeEditor 
          initialCode={`// Global scope variables
let globalVar = "I'm accessible everywhere";
const PI = 3.14159;

function displayGlobals() {
  // Function can access global variables
  console.log(globalVar); // "I'm accessible everywhere"
  console.log(PI);        // 3.14159
  
  if (true) {
    // Block can also access global variables
    console.log("From block:", globalVar);
  }
}

displayGlobals();

// Global variables accessible in main scope too
console.log(globalVar);`}
        />

        <InfoBox type="warning">
          <strong>Avoid Global Pollution:</strong> Too many global variables can lead to naming conflicts, hard-to-debug issues, 
          and security problems. Try to minimize global variables and use modules or IIFEs (Immediately Invoked Function Expressions) 
          to create private scopes.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Function Scope: Local Variables</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Function scope</strong> (also called <em>local scope</em>) means variables are only accessible within the function 
          where they're declared. Once the function finishes executing, these variables are destroyed (unless captured in a closure).
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Key characteristics of function scope:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
          <li>Variables declared with <code className="px-1 py-0.5 bg-muted rounded font-mono">var</code>, 
          <code className="px-1 py-0.5 bg-muted rounded font-mono">let</code>, or 
          <code className="px-1 py-0.5 bg-muted rounded font-mono">const</code> inside a function are function-scoped</li>
          <li>Parameters are also function-scoped variables</li>
          <li>Each function call creates a new scope with fresh variables</li>
          <li>Inner functions can access outer function variables (nested scope)</li>
        </ul>

        <CodeEditor 
          initialCode={`// Global variable
let globalVar = "Global";

function outerFunction() {
  // Function-scoped variable
  let outerVar = "Outer";
  
  console.log(globalVar); // ✓ Can access global
  console.log(outerVar);  // ✓ Can access own scope
  
  function innerFunction() {
    // Another function-scoped variable
    let innerVar = "Inner";
    
    console.log(globalVar); // ✓ Can access global
    console.log(outerVar);  // ✓ Can access parent scope
    console.log(innerVar);  // ✓ Can access own scope
  }
  
  innerFunction();
  // console.log(innerVar); // ✗ Error! Can't access inner scope
}

outerFunction();
// console.log(outerVar); // ✗ Error! Can't access function scope`}
        />

        <InfoBox type="info">
          <strong>Nested Scopes:</strong> Functions can be nested, creating a hierarchy of scopes. Inner functions have access 
          to variables in their own scope AND all parent scopes, creating a scope chain.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Block Scope: let and const vs var</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Block scope</strong> was introduced in ES6 (2015) with <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code> and 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">const</code>. A block is any code inside curly braces 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">{'{}'}</code> - like if statements, loops, or even standalone blocks.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>The critical difference:</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border-l-4 border-[hsl(var(--success))] bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-[hsl(var(--success))]">let and const (Block-Scoped)</h3>
            <p className="text-sm text-muted-foreground mb-2">Respects block boundaries. Variables exist only within their block.</p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>Scoped to nearest curly braces</li>
              <li>Not accessible outside block</li>
              <li>New variable in each iteration (loops)</li>
            </ul>
          </div>
          <div className="border-l-4 border-[hsl(var(--warning))] bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-[hsl(var(--warning))]">var (Function-Scoped)</h3>
            <p className="text-sm text-muted-foreground mb-2">Ignores block boundaries. Scoped to the nearest function.</p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-2">
              <li>Scoped to nearest function</li>
              <li>Accessible outside blocks</li>
              <li>Same variable across all iterations</li>
            </ul>
          </div>
        </div>

        <CodeEditor 
          initialCode={`function demonstrateBlockScope() {
  // let and const are block-scoped
  if (true) {
    let blockLet = "I'm block-scoped";
    const blockConst = "Me too!";
    var funcVar = "I'm function-scoped";
    
    console.log(blockLet);   // ✓ Works
    console.log(blockConst); // ✓ Works
    console.log(funcVar);    // ✓ Works
  }
  
  // console.log(blockLet);   // ✗ Error!
  // console.log(blockConst); // ✗ Error!
  console.log(funcVar);    // ✓ Works (var ignores blocks)
  
  // Each loop iteration gets new 'i' with let
  for (let i = 0; i < 3; i++) {
    console.log("let i:", i);
  }
  // console.log(i); // ✗ Error!
  
  // var shares same 'j' across iterations
  for (var j = 0; j < 3; j++) {
    console.log("var j:", j);
  }
  console.log("j after loop:", j); // ✓ 3 (accessible!)
}

demonstrateBlockScope();`}
        />

        <InfoBox type="tip">
          <strong>Best Practice:</strong> Always use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">const</code> by default. 
          Use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code> when you need to reassign. 
          Avoid <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code> entirely to prevent scope-related bugs.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Closures?</h2>
        
        <p className="leading-relaxed mb-4">
          A <strong>closure</strong> is one of the most powerful and misunderstood features of JavaScript. Simply put, a closure is:
        </p>

        <div className="border-l-4 border-primary/50 bg-primary/5 p-4 rounded-lg mb-6">
          <p className="font-semibold mb-2">Closure Definition:</p>
          <p className="text-sm">A function that has access to variables from an outer (enclosing) function's scope, 
          even after the outer function has finished executing.</p>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>How closures work:</strong> When a function is created, it gets a hidden reference to the scope in which 
          it was created. This reference persists even after the outer function returns. The inner function "closes over" 
          (captures) variables from the outer scope, creating a closure.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Analogy:</strong> Think of a closure as a function with a backpack. The backpack contains all the variables 
          that existed in the scope where the function was born. The function carries this backpack everywhere it goes, 
          even to places where those variables would normally be out of scope.
        </p>

        <CodeEditor 
          initialCode={`function createCounter() {
  // Outer function variable
  let count = 0;
  
  // Inner function - creates a closure
  return function() {
    count++; // Accesses outer variable
    console.log("Count:", count);
    return count;
  };
}

// createCounter() has finished executing...
const counter = createCounter();

// ...but the inner function still has access to 'count'!
counter(); // 1
counter(); // 2
counter(); // 3

// Each closure has its own copy
const counter2 = createCounter();
counter2(); // 1 (independent from counter)`}
        />

        <InfoBox type="info">
          <strong>Key Point:</strong> The inner function doesn't just get the <em>value</em> of variables from the outer scope - 
          it gets a <em>reference</em> to them. This means if the outer variable changes, the closure sees the change.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Closures Matter: Practical Applications</h2>
        
        <p className="leading-relaxed mb-6">
          Closures enable several important programming patterns in JavaScript:
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-[hsl(var(--success))] bg-[hsl(var(--success))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <EyeOff className="h-5 w-5 text-[hsl(var(--success))]" />
              <span>1. Data Privacy / Encapsulation</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create truly private variables that can't be accessed directly from outside:
            </p>
            <CodeEditor 
              initialCode={`function createBankAccount(initialBalance) {
  // 'balance' is private - only accessible through returned methods
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);               // 150
console.log(account.balance);      // undefined (private!)`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--info))] bg-[hsl(var(--info))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Box className="h-5 w-5 text-[hsl(var(--info))]" />
              <span>2. Function Factories</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create specialized functions with preset configurations:
            </p>
            <CodeEditor 
              initialCode={`// Generic multiplier factory
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(tenTimes(5)); // 50`}
            />
          </div>

          <div className="border-l-4 border-[hsl(var(--warning))] bg-[hsl(var(--warning))]/5 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Eye className="h-5 w-5 text-[hsl(var(--warning))]" />
              <span>3. Maintaining State in Async Operations</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Preserve values across asynchronous callbacks:
            </p>
            <CodeEditor 
              initialCode={`function createTimer(message) {
  let seconds = 0;
  
  // Closure preserves 'message' and 'seconds'
  return function() {
    seconds++;
    console.log(message + " - " + seconds + "s");
  };
}

const timer1 = createTimer("Timer 1");
const timer2 = createTimer("Timer 2");

// Each maintains independent state
timer1(); // "Timer 1 - 1s"
timer1(); // "Timer 1 - 2s"
timer2(); // "Timer 2 - 1s"`}
            />
          </div>
        </div>
      </section>

      <TryItBox 
        code={`function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));`}
        title="This is a function factory using closures. Try creating a 'quadruple' multiplier and test it"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Common Closure Pitfalls and Solutions</h2>
        
        <p className="leading-relaxed mb-6">
          <strong>Pitfall #1: Closures in Loops with var</strong>
        </p>

        <p className="leading-relaxed mb-4">
          One of the most common mistakes involves creating closures inside loops. When using 
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code>, all closures share the same variable:
        </p>

        <CodeEditor 
          initialCode={`// PROBLEM: All functions reference same 'i'
const functions = [];

for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log("var i:", i);
  });
}

// All log 3! (value of i after loop ends)
functions[0](); // 3
functions[1](); // 3
functions[2](); // 3

// SOLUTION 1: Use 'let' (creates new variable each iteration)
const fixedFuncs1 = [];

for (let j = 0; j < 3; j++) {
  fixedFuncs1.push(function() {
    console.log("let j:", j);
  });
}

fixedFuncs1[0](); // 0
fixedFuncs1[1](); // 1
fixedFuncs1[2](); // 2

// SOLUTION 2: Create IIFE to capture value
const fixedFuncs2 = [];

for (var k = 0; k < 3; k++) {
  fixedFuncs2.push((function(captured) {
    return function() {
      console.log("captured:", captured);
    };
  })(k));
}

fixedFuncs2[0](); // 0
fixedFuncs2[1](); // 1`}
        />

        <InfoBox type="warning">
          <strong>Why this happens:</strong> With <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code>, 
          there's only ONE <code className="px-2 py-1 bg-muted rounded text-sm font-mono">i</code> variable for the entire loop. 
          All closures reference the same <code className="px-2 py-1 bg-muted rounded text-sm font-mono">i</code>, which has 
          value 3 after the loop completes. With <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code>, 
          each iteration gets a NEW variable.
        </InfoBox>

        <p className="leading-relaxed mt-6 mb-4">
          <strong>Pitfall #2: Memory Leaks from Unnecessary Closures</strong>
        </p>

        <p className="leading-relaxed mb-4">
          Closures keep references to ALL variables in their outer scope, even if they don't use them. This can cause memory leaks:
        </p>

        <CodeEditor 
          initialCode={`// BAD: Captures unnecessary large data
function createHandler() {
  const largeData = new Array(1000000).fill("data");
  
  return function() {
    // Doesn't use largeData, but still holds reference!
    console.log("Handler called");
  };
}

// GOOD: Only capture what you need
function createHandlerBetter() {
  const largeData = new Array(1000000).fill("data");
  const needed = "some value";
  
  // largeData can be garbage collected
  return function() {
    console.log("Handler:", needed);
  };
}`}
        />

        <InfoBox type="tip">
          <strong>Best Practice:</strong> Be mindful of what variables your closures capture. Large data structures held by 
          closures won't be garbage collected. Set variables to <code className="px-2 py-1 bg-muted rounded text-sm font-mono">null</code> 
          when no longer needed, or restructure code to avoid capturing them.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Lexical Scoping: How JavaScript Determines Scope</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Lexical scoping</strong> (also called <em>static scoping</em>) means that the scope of a variable is determined 
          by where it's written in the code, not where it's called from.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Key principle:</strong> A function's scope is determined at the time it's <em>defined</em>, not when it's <em>executed</em>. 
          This is why closures work - they remember the scope where they were created.
        </p>

        <CodeEditor 
          initialCode={`let name = "Global";

function outer() {
  let name = "Outer";
  
  function inner() {
    // Looks up the scope chain:
    // 1. Check inner() scope - no 'name'
    // 2. Check outer() scope - found 'name' = "Outer"
    console.log(name);
  }
  
  return inner;
}

function caller() {
  let name = "Caller";
  const innerFunc = outer();
  
  // innerFunc uses 'name' from where it was DEFINED (outer),
  // not where it's CALLED (caller)
  innerFunc(); // "Outer", not "Caller"!
}

caller();`}
        />

        <InfoBox type="info">
          <strong>Lexical vs Dynamic Scoping:</strong> JavaScript uses lexical scoping, meaning scope is determined by source code structure. 
          Some languages use dynamic scoping, where scope is determined by the call stack at runtime. Lexical scoping makes code 
          more predictable and is why closures behave consistently.
        </InfoBox>
      </section>
    </div>
  );
}
