import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { Box, Boxes, Lock } from "lucide-react";

export default function FunctionScope() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Function Scope & Closures" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Function Scope & Closures</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Understanding scope and closures is crucial for writing robust JavaScript. These concepts determine 
        where variables are accessible and how functions remember their environment.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Scope</h2>
        <p className="leading-relaxed mb-6">
          Scope determines the accessibility of variables in your code. JavaScript has three types of scope: 
          global, function (local), and block scope.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard
            icon={Boxes}
            title="Global Scope"
            description="Variables declared outside any function are in global scope and accessible everywhere."
          />
          <ConceptCard
            icon={Box}
            title="Function Scope"
            description="Variables declared inside a function are local to that function."
          />
          <ConceptCard
            icon={Lock}
            title="Block Scope"
            description="Variables declared with let/const inside blocks are block-scoped."
          />
        </div>

        <CodeEditor 
          initialCode={`// Global scope
let globalVar = "I'm global";

function testScope() {
  // Function scope
  let localVar = "I'm local";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();
console.log(globalVar); // Accessible
// console.log(localVar); // Error!`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Block Scope with let and const</h2>
        <p className="leading-relaxed mb-6">
          ES6 introduced <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code> and <code className="px-2 py-1 bg-muted rounded text-sm font-mono">const</code> which 
          create block-scoped variables, unlike <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code> which is function-scoped.
        </p>

        <CodeEditor 
          initialCode={`function demonstrateBlockScope() {
  if (true) {
    let blockVar = "I'm block-scoped";
    const alsoBlock = "Me too!";
    console.log(blockVar);
  }
  
  // console.log(blockVar); // Error!
  
  for (let i = 0; i < 3; i++) {
    console.log("Loop:", i);
  }
  
  // console.log(i); // Error!
}

demonstrateBlockScope();`}
        />

        <InfoBox type="tip">
          Always use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">const</code> by default, 
          use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code> when you need to reassign, 
          and avoid <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code> to prevent scope-related bugs.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What are Closures?</h2>
        <p className="leading-relaxed mb-6">
          A closure is a function that has access to variables in its outer (enclosing) lexical scope, 
          even after the outer function has returned. Think of it as a function with a backpack containing 
          all the variables from its birthplace.
        </p>

        <CodeEditor 
          initialCode={`function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    console.log("Count:", count);
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3`}
        />

        <InfoBox type="info">
          The inner function "closes over" the <code className="px-2 py-1 bg-muted rounded text-sm font-mono">count</code> variable, 
          maintaining access to it even after <code className="px-2 py-1 bg-muted rounded text-sm font-mono">createCounter</code> has finished executing.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Practical Closure Examples</h2>
        <p className="leading-relaxed mb-6">
          Closures are useful for data privacy, creating function factories, and maintaining state in asynchronous code.
        </p>

        <CodeEditor 
          initialCode={`// Private variables with closures
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      balance += amount;
      console.log("Deposited:", amount);
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("Withdrew:", amount);
        return balance;
      }
      console.log("Insufficient funds");
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log("Balance:", account.getBalance());
account.deposit(50);
account.withdraw(30);
console.log("Final:", account.getBalance());`}
        />
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
        <h2 className="text-2xl font-semibold mb-4">Common Closure Pitfalls</h2>
        <p className="leading-relaxed mb-6">
          One common mistake with closures involves loops and asynchronous code. Understanding how closures 
          capture variables helps avoid these issues.
        </p>

        <CodeEditor 
          initialCode={`// Common pitfall (all functions share same i)
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(function() {
    console.log(i);
  });
}
// functions[0](); // Would log 3, not 0!

// Solution: use let (block scope)
const fixedFunctions = [];
for (let j = 0; j < 3; j++) {
  fixedFunctions.push(function() {
    console.log(j);
  });
}
fixedFunctions[0](); // 0
fixedFunctions[1](); // 1
fixedFunctions[2](); // 2`}
        />

        <InfoBox type="warning">
          When using closures in loops, use <code className="px-2 py-1 bg-muted rounded text-sm font-mono">let</code> instead 
          of <code className="px-2 py-1 bg-muted rounded text-sm font-mono">var</code> to ensure each iteration gets its own copy of the variable.
        </InfoBox>
      </section>
    </div>
  );
}
