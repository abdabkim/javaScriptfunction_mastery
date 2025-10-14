import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { Code, Play, RotateCcw, Package, ArrowDownCircle, ShieldCheck, AlertTriangle, Zap, Coffee, FlaskConical, Clock } from "lucide-react";

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

      {/* ENHANCED RETURN STATEMENT SECTION */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
            <ArrowDownCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              The Return Statement
            </h2>
            <p className="text-sm text-muted-foreground">Your Function's Delivery System</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-6">
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Think of a function like an <strong>ATM machine</strong>. You insert your card and PIN (the arguments), 
              the machine does its work behind the scenes (the function body), and then it either <strong>gives you cash back</strong> 
              or it doesn't. The <code className="px-2 py-1 bg-slate-100 rounded text-sm">return</code> statement is what 
              actually hands you the money.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-6">
              <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Two Critical Jobs of Return
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800">
                    1
                  </div>
                  <div>
                    <strong className="text-amber-900">Exits the Function Immediately</strong>
                    <p className="text-slate-700 mt-1">
                      Once <code className="px-2 py-1 bg-white rounded text-sm">return</code> runs, that's it. 
                      The function stops dead in its tracks. Any code below it? Might as well not exist. 
                      It's like hanging up a phone call—the conversation is over, no matter what else you had to say.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-800">
                    2
                  </div>
                  <div>
                    <strong className="text-amber-900">Packages Up a Value to Send Back</strong>
                    <p className="text-slate-700 mt-1">
                      The value you put after <code className="px-2 py-1 bg-white rounded text-sm">return</code> gets 
                      shipped back to whoever called the function. They can catch it in a variable, use it in math, 
                      pass it to another function—whatever they need. Without return, the function is like a worker 
                      who does the job but never reports back with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-200 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="font-bold text-red-900">Without Return: Lost Forever</h3>
            </div>
            <pre className="bg-red-900 text-red-50 p-4 rounded-lg overflow-x-auto text-sm mb-4">
              <code>{`function calculate(x, y) {
  let result = x + y;
  // Result computed but NOT returned!
}

let answer = calculate(5, 10);
console.log(answer);  // undefined
// The calculation happened, but 
// we can't access the result!`}</code>
            </pre>
            <p className="text-sm text-red-800 leading-relaxed">
              The function did the math, but because there's no <code className="px-2 py-1 bg-red-200 rounded text-xs">return</code>, 
              the result evaporates into thin air. It's like asking someone to do a calculation in their head and then 
              walking away before they tell you the answer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-green-900">With Return: Value Delivered</h3>
            </div>
            <pre className="bg-green-900 text-green-50 p-4 rounded-lg overflow-x-auto text-sm mb-4">
              <code>{`function calculate(x, y) {
  let result = x + y;
  return result;  // Send it back!
}

let answer = calculate(5, 10);
console.log(answer);  // 15
// Now we can use the result!
let doubled = answer * 2;  // 30`}</code>
            </pre>
            <p className="text-sm text-green-800 leading-relaxed">
              With <code className="px-2 py-1 bg-green-200 rounded text-xs">return</code>, the value makes it back to us. 
              We can store it, manipulate it, print it—whatever we need. The function completes the circle by delivering 
              its work product.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-2">🎯 Key Insight</h4>
          <p className="text-slate-700 leading-relaxed">
            <code className="px-2 py-1 bg-blue-100 rounded text-sm">console.log()</code> and 
            <code className="px-2 py-1 bg-blue-100 rounded text-sm ml-1">return</code> are NOT the same! 
            Logging shows you a value on screen (helpful for debugging), but it doesn't give that value to your code. 
            Only <code className="px-2 py-1 bg-blue-100 rounded text-sm">return</code> actually passes the value 
            back so your program can use it. Think of logging as "announcing" and return as "handing over."
          </p>
        </div>
      </section>

      {/* ENHANCED DEFAULT PARAMETERS SECTION */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
            <Coffee className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Default Parameters
            </h2>
            <p className="text-sm text-muted-foreground">Safety Nets for Missing Values</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-6">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Imagine you're at a coffee shop. When you order "a coffee," the barista doesn't freeze in confusion—they 
            give you their <strong>standard coffee</strong>: medium size, regular roast, with cream. Default parameters 
            work the same way. They're the "house special" settings that kick in when someone doesn't specify what they want.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-purple-900 mb-4">The Problem They Solve</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Without default parameters, if someone calls your function but forgets to pass an argument, that parameter 
              becomes <code className="px-2 py-1 bg-purple-100 rounded text-sm">undefined</code>. This can cause errors 
              or unexpected behavior. Default parameters act as a <strong>safety net</strong>—if no value is provided, 
              a sensible fallback is used instead.
            </p>
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <p className="text-sm text-purple-900 font-mono">
                function greet(name = "Friend") → If no name? Use "Friend"<br/>
                function multiply(a, b = 1) → If no b? Use 1 (identity)<br/>
                function configure(debug = false) → If no debug? Use false
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h3 className="font-semibold text-purple-900 mb-4 text-xl">How They Work In Practice</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-400 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Basic Usage</h4>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm mb-3">
                <code>{`function orderCoffee(size = "medium", type = "regular") {
  return \`One \${size} \${type} coffee\`;
}

orderCoffee("large", "espresso");  // "One large espresso coffee"
orderCoffee("small");              // "One small regular coffee"
orderCoffee();                     // "One medium regular coffee"`}</code>
              </pre>
              <p className="text-sm text-slate-600">
                Each missing argument gets replaced by its default. The function stays flexible—detailed when you need it, 
                simple when you don't.
              </p>
            </div>

            <div className="border-l-4 border-pink-400 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Defaults Can Be Expressions</h4>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm mb-3">
                <code>{`function createId(prefix = "user", id = Math.random()) {
  return \`\${prefix}_\${id}\`;
}

createId("admin");  // "admin_0.3847562..."
createId();         // "user_0.9234871..."`}</code>
              </pre>
              <p className="text-sm text-slate-600">
                Defaults aren't just static values—they can be function calls, math expressions, or even reference other 
                parameters! They're evaluated fresh each time the function runs.
              </p>
            </div>

            <div className="border-l-4 border-indigo-400 pl-6">
              <h4 className="font-semibold text-slate-900 mb-2">Using Earlier Parameters in Defaults</h4>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm mb-3">
                <code>{`function calculateArea(width, height = width) {
  return width * height;
}

calculateArea(5, 10);  // 50 (rectangle)
calculateArea(5);      // 25 (square - height defaults to width!)`}</code>
              </pre>
              <p className="text-sm text-slate-600">
                This is powerful: later parameters can use earlier ones in their defaults. Perfect for making squares 
                from rectangles, or setting related values based on a primary input.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-6">
          <h4 className="font-semibold text-purple-900 mb-2">💡 Professional Tip</h4>
          <p className="text-slate-700 leading-relaxed">
            Default parameters aren't just about preventing errors—they're about <strong>communicating intent</strong>. 
            When someone reads your function signature and sees <code className="px-2 py-1 bg-purple-100 rounded text-sm">timeout = 5000</code>, 
            they instantly know the expected default behavior. It's self-documenting code. Plus, it makes your functions 
            more forgiving to use—callers can focus on what they want to customize rather than specifying everything.
          </p>
        </div>
      </section>

      <TryItBox 
        code={`function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));
console.log(multiply(7, 3));`}
        title="Try modifying this function to accept three parameters and multiply them all together"
      />

      {/* ENHANCED PURE VS IMPURE FUNCTIONS SECTION */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg">
            <FlaskConical className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Pure vs Impure Functions
            </h2>
            <p className="text-sm text-muted-foreground">The Sealed Lab vs The Open Kitchen</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-8">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Imagine two chefs. One works in a <strong>sealed laboratory</strong>—they take ingredients through a slot, 
            follow a precise recipe, and pass the finished dish back out. Nothing from outside affects their work, 
            and they never touch anything beyond what they're given. The other works in an <strong>open kitchen</strong>—they 
            can grab spices from the pantry, adjust based on the weather, shout orders to other cooks, and maybe even 
            change the pantry inventory while cooking.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            That's the difference between <strong>pure</strong> and <strong>impure</strong> functions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-300 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900">Pure Functions</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">The Two Defining Rules</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <div className="font-semibold text-emerald-900 mb-1">1. Deterministic</div>
                    <p className="text-sm text-slate-700">
                      Same inputs → same output, <em>every single time</em>. No surprises, no randomness, 
                      no checking the weather or time. Pure predictability.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-emerald-200">
                    <div className="font-semibold text-emerald-900 mb-1">2. No Side Effects</div>
                    <p className="text-sm text-slate-700">
                      Doesn't touch <em>anything</em> outside its own scope. No modifying global variables, 
                      no console logs, no database writes, no DOM manipulation. A hermit function.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-3">Examples</h4>
                <pre className="bg-emerald-900 text-emerald-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Pure: Always the same result
function add(a, b) {
  return a + b;
}

add(2, 3);  // Always 5
add(2, 3);  // Always 5

// Pure: No external dependencies
function calculateTax(amount, rate) {
  return amount * rate;
}

// Pure: Creates new value
function double(num) {
  return num * 2;
}`}</code>
                </pre>
              </div>

              <div className="bg-emerald-100 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-900 mb-2">Why They're Awesome</h4>
                <ul className="text-sm text-emerald-900 space-y-1 list-disc list-inside">
                  <li><strong>Easy to test</strong> - No setup needed, predictable results</li>
                  <li><strong>Easy to debug</strong> - No hidden state changes</li>
                  <li><strong>Can be cached</strong> - Same input = same output</li>
                  <li><strong>Parallel-safe</strong> - Run simultaneously without issues</li>
                  <li><strong>Easy to reason about</strong> - Self-contained logic</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-300 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-900">Impure Functions</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-orange-800 mb-2">The Characteristics</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="font-semibold text-orange-900 mb-1">Non-Deterministic</div>
                    <p className="text-sm text-slate-700">
                      Same inputs might give different outputs. Uses <code className="px-1 bg-orange-100 rounded text-xs">Math.random()</code>, 
                      reads the current time, depends on external state—anything that makes the result unpredictable.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <div className="font-semibold text-orange-900 mb-1">Has Side Effects</div>
                    <p className="text-sm text-slate-700">
                      Reaches out and touches the world: modifies variables outside its scope, writes to console/files, 
                      makes API calls, updates the DOM, changes its input objects. Leaves footprints.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-orange-800 mb-3">Examples</h4>
                <pre className="bg-orange-900 text-orange-50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`// Impure: Modifies external state
let total = 0;
function addToTotal(num) {
  total += num;  // Side effect!
  return total;
}

// Impure: Random output
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Impure: Logs to console
function loggedAdd(a, b) {
  console.log("Adding:", a, b);
  return a + b;
}`}</code>
                </pre>
              </div>

              <div className="bg-orange-100 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2">When You Need Them</h4>
                <ul className="text-sm text-orange-900 space-y-1 list-disc list-inside">
                  <li><strong>I/O operations</strong> - Reading/writing files, network requests</li>
                  <li><strong>User interaction</strong> - Updating UI, handling clicks</li>
                  <li><strong>Randomness</strong> - Games, simulations, ID generation</li>
                  <li><strong>Timing</strong> - Timestamps, scheduling</li>
                  <li><strong>Logging</strong> - Debugging, monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-8 border border-slate-300 shadow-lg">
          <h3 className="font-semibold text-slate-900 mb-4 text-xl">The Pragmatic Reality</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Here's the truth: <strong>you can't avoid impure functions</strong>. Programs need to interact with the world—save files, 
            fetch data, update screens, respond to users. That's all impure behavior, and it's necessary.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            The goal isn't purity everywhere. It's about <strong>strategic isolation</strong>. Keep your core logic pure (the calculations, 
            transformations, business rules) and push the impure stuff to the edges (the data fetching, UI updates, side effects). 
            This makes the majority of your code easier to test, understand, and debug, while accepting that some functions 
            <em>must</em> be impure to get real work done.
          </p>
          <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
            <p className="text-slate-800 font-semibold mb-2">💪 Best Practice: The Sandwich Pattern</p>
            <div className="text-sm text-slate-700 space-y-2">
              <div className="flex gap-2">
                <span className="font-mono bg-orange-100 px-2 rounded">Impure</span>
                <span>Fetch data from API</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono bg-emerald-100 px-2 rounded">Pure</span>
                <span>Process, transform, calculate with that data</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono bg-orange-100 px-2 rounded">Impure</span>
                <span>Update UI or save results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED FUNCTION HOISTING SECTION */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              Function Hoisting
            </h2>
            <p className="text-sm text-muted-foreground">JavaScript's Time-Travel Trick</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-6">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Imagine JavaScript reads your code like a book—but before it starts reading from page one, it flips through 
            and makes a <strong>table of contents</strong> of all the function declarations. This is called <strong>hoisting</strong>—JavaScript 
            mentally moves function declarations to the top of their scope during the compilation phase, before any code runs.
          </p>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
            <h3 className="font-semibold text-indigo-900 mb-4">What This Means In Practice</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              You can call a function <em>before</em> you define it in your code, and JavaScript won't complain. 
              The function declaration gets "hoisted" to the top, making it available throughout its entire scope. 
              It's like JavaScript does a preview scan and says, "Okay, I see these functions exist," before actually 
              running any code.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 mb-6">
          <h3 className="font-semibold text-indigo-900 mb-4 text-xl">How It Works</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">✅ What You Write</h4>
              <pre className="bg-indigo-900 text-indigo-50 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// Call function BEFORE defining it
greet("Alice");

// Function defined here
function greet(name) {
  console.log("Hello, " + name);
}

// Can call it again
greet("Bob");`}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">🔄 How JavaScript Sees It</h4>
              <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// JavaScript mentally rearranges:
function greet(name) {
  console.log("Hello, " + name);
}

// Now the calls make sense
greet("Alice");
greet("Bob");`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 bg-indigo-50 border-l-4 border-indigo-400 p-5 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              <strong className="text-indigo-900">Behind the Scenes:</strong> During the creation phase (before execution), 
              JavaScript scans for function declarations and stores them in memory. When execution begins, those functions 
              are already available. It's not actually moving code around—it's pre-registering the functions.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-300 shadow-xl mb-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h3 className="font-bold text-amber-900 text-xl">Critical Limitation: Only Function Declarations</h3>
          </div>
          
          <p className="text-slate-700 leading-relaxed mb-4">
            Here's the catch: <strong>only function declarations are hoisted</strong>. Other ways of creating functions 
            (like function expressions, arrow functions, or functions assigned to variables) are <em>not</em> hoisted. 
            This is one of the key differences between declaration styles.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">❌ This Breaks (Function Expression)</h4>
              <pre className="bg-amber-900 text-amber-50 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                <code>{`// Error! Can't call before definition
sayHi();  // ❌ ReferenceError

const sayHi = function() {
  console.log("Hi!");
};`}</code>
              </pre>
              <p className="text-sm text-amber-900">
                Function expressions are treated like regular variable assignments. The variable is hoisted, but it's 
                <code className="px-2 py-1 bg-amber-100 rounded text-xs">undefined</code> until the assignment runs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-emerald-800 mb-2">✅ This Works (Function Declaration)</h4>
              <pre className="bg-emerald-900 text-emerald-50 p-4 rounded-lg overflow-x-auto text-sm mb-2">
                <code>{`// Works! Function is hoisted
sayHello();  // ✅ "Hello!"

function sayHello() {
  console.log("Hello!");
}`}</code>
              </pre>
              <p className="text-sm text-emerald-800">
                Function declarations are fully hoisted—both the name and the function body are available from the start.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4 text-xl">Why Does Hoisting Exist?</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Code Organization Flexibility</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  You can organize your code logically—put the main logic at the top and helper functions at the bottom, 
                  or vice versa. You're not forced to define everything in call order.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Mutual Recursion</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Functions can call each other, even if one is defined before the other. Without hoisting, circular 
                  dependencies would be impossible.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-700 font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Historical Consistency</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  It's been part of JavaScript since the beginning. While modern code often avoids relying on hoisting, 
                  it's a fundamental part of how the language works.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
          <h4 className="font-semibold text-indigo-900 mb-2">🎯 Modern Best Practice</h4>
          <p className="text-slate-700 leading-relaxed mb-3">
            While hoisting allows you to call functions before defining them, <strong>most modern developers prefer not to 
            rely on this behavior</strong>. It's generally clearer to define functions before you use them, making the code 
            easier to read and understand. Think of hoisting as a safety feature rather than a style to embrace.
          </p>
          <p className="text-slate-700 leading-relaxed">
            That said, understanding hoisting is crucial because you'll encounter it in existing code, and it explains 
            why function declarations behave differently from other function styles (arrow functions, function expressions). 
            It's part of JavaScript's DNA.
          </p>
        </div>
      </section>

    </div>
  );
}