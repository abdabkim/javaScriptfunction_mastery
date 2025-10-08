import Breadcrumb from "@/components/Breadcrumb";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import { Card } from "@/components/ui/card";
import { Target, Zap, Trophy } from "lucide-react";

export default function PracticeZone() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Practice Zone" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Function Practice Zone</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Apply what you've learned with these hands-on exercises. Each challenge is designed to reinforce 
        key concepts and build your problem-solving skills.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <Card className="p-4 text-center hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up">
          <Target className="h-8 w-8 text-primary mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">Beginner</h3>
          <p className="text-sm text-muted-foreground">Basic function concepts</p>
        </Card>
        <Card className="p-4 text-center hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up animation-delay-100">
          <Zap className="h-8 w-8 text-chart-2 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-chart-2">Intermediate</h3>
          <p className="text-sm text-muted-foreground">Scope and closures</p>
        </Card>
        <Card className="p-4 text-center hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in-up animation-delay-200">
          <Trophy className="h-8 w-8 text-chart-4 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold mb-1 transition-colors duration-300 group-hover:text-chart-4">Advanced</h3>
          <p className="text-sm text-muted-foreground">Complex patterns</p>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Beginner Challenges
        </h2>

        <TryItBox 
          code={`// Challenge: Create a function that calculates the area of a rectangle
// Your function should accept width and height as parameters



// Test your function
console.log(calculateRectangleArea(5, 10)); // Should return 50`}
          title="Create a function called 'calculateRectangleArea' that returns the area"
        />

        <TryItBox 
          code={`// Challenge: Create a function that checks if a number is even
// Return true if even, false if odd



// Test your function
console.log(isEven(4));  // true
console.log(isEven(7));  // false`}
          title="Write a function that determines if a number is even or odd"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-6 w-6 text-chart-2" />
          Intermediate Challenges
        </h2>

        <TryItBox 
          code={`// Challenge: Create a closure that creates a personalized greeting function
function createGreeting(greeting) {
  // Your code here
  
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHi("Bob"));      // "Hi, Bob!"`}
          title="Complete the closure that remembers the greeting and accepts a name"
        />

        <TryItBox 
          code={`// Challenge: Create a function that filters and transforms an array
// Filter out numbers less than 5, then double the remaining numbers



const numbers = [2, 5, 8, 3, 9, 1, 7];
console.log(filterAndDouble(numbers)); // Should return [10, 16, 18, 14]`}
          title="Use array methods to filter and transform in one function"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-chart-4" />
          Advanced Challenges
        </h2>

        <TryItBox 
          code={`// Challenge: Create a memoization function
// Memoization caches results to avoid recalculating
function memoize(fn) {
  // Your code here
  
}

function expensiveCalculation(n) {
  console.log("Calculating for", n);
  return n * n;
}

const memoized = memoize(expensiveCalculation);
console.log(memoized(5));  // Calculates
console.log(memoized(5));  // Uses cache`}
          title="Implement a memoization function that caches results"
        />

        <TryItBox 
          code={`// Challenge: Create a function composition helper
// compose(f, g)(x) should return f(g(x))
function compose(f, g) {
  // Your code here
  
}

const double = x => x * 2;
const addFive = x => x + 5;

const doubleThenAddFive = compose(addFive, double);
console.log(doubleThenAddFive(3)); // (3 * 2) + 5 = 11`}
          title="Implement function composition to combine functions"
        />

        <TryItBox 
          code={`// Challenge: Implement a currying function
// curry should transform f(a,b,c) into f(a)(b)(c)
function curry(fn) {
  // Your code here
  
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6`}
          title="Create a curry function that transforms multi-argument functions"
        />
      </section>

      <InfoBox type="tip">
        <strong>Tips for Practice:</strong>
        <ul className="mt-2 space-y-1 list-disc list-inside">
          <li>Start with the easiest exercises and work your way up</li>
          <li>Don't be afraid to look back at the lesson pages for hints</li>
          <li>Try to solve each problem before looking at solutions</li>
          <li>Experiment with different approaches to the same problem</li>
          <li>Use console.log to debug and understand what's happening</li>
        </ul>
      </InfoBox>
    </div>
  );
}
