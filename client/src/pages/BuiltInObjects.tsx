import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import { Card } from "@/components/ui/card";
import { Calculator, Type, List, Calendar } from "lucide-react";

export default function BuiltInObjects() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Built-in Object Methods" }]} />
      
      <h1 className="text-4xl font-bold mb-4">Built-in Object Methods in Functions</h1>
      <p className="text-lg text-muted-foreground mb-8">
        JavaScript provides powerful built-in objects like Math, String, Array, and Date. Learn how to leverage 
        these objects within your functions to build real-world applications.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Math Object</h2>
        <p className="leading-relaxed mb-6">
          The Math object provides mathematical constants and functions. It's perfect for calculations, random numbers, and rounding operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="h-5 w-5 text-primary" />
              <span className="font-semibold">Common Math Methods</span>
            </div>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><code className="px-1 py-0.5 bg-muted rounded font-mono">Math.round()</code> - Round to nearest integer</li>
              <li><code className="px-1 py-0.5 bg-muted rounded font-mono">Math.floor()</code> - Round down</li>
              <li><code className="px-1 py-0.5 bg-muted rounded font-mono">Math.ceil()</code> - Round up</li>
              <li><code className="px-1 py-0.5 bg-muted rounded font-mono">Math.random()</code> - Random 0-1</li>
              <li><code className="px-1 py-0.5 bg-muted rounded font-mono">Math.max/min()</code> - Find extremes</li>
            </ul>
          </Card>

          <Card className="p-4 bg-chart-2/5">
            <div className="font-semibold mb-2">Practice Example</div>
            <p className="text-sm text-muted-foreground">
              Build a dice roller, random number generator, or area calculator using Math methods in your functions.
            </p>
          </Card>
        </div>

        <CodeEditor 
          initialCode={`// Random integer between min and max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Dice roll:", getRandomInt(1, 6));

// Round average of two numbers
function roundAverage(a, b) {
  return Math.round((a + b) / 2);
}

console.log("Average:", roundAverage(7, 10));

// Find largest number
function findLargest(...nums) {
  return Math.max(...nums);
}

console.log("Largest:", findLargest(3, 7, 2, 9, 5));`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">String Object</h2>
        <p className="leading-relaxed mb-6">
          String methods help you manipulate text: split into arrays, extract parts, change case, and replace content.
        </p>

        <CodeEditor 
          initialCode={`// Insert hyphen between words
function insertHyphenBetweenWords(str) {
  return str.split(' ').join('-');
}

console.log(insertHyphenBetweenWords("Hello World"));

// Capitalize first letter
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("javascript"));

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// Extract initials
function getInitials(fullName) {
  return fullName.split(' ')
    .map(word => word[0].toUpperCase())
    .join('');
}

console.log(getInitials("john doe smith"));`}
        />

        <InfoBox type="tip">
          String methods don't modify the original string. They return a new string. Strings are immutable in JavaScript.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Array Object</h2>
        <p className="leading-relaxed mb-6">
          Array methods like map, filter, and reduce are essential for data transformation. They enable functional programming patterns.
        </p>

        <CodeEditor 
          initialCode={`// Sum array elements
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Sum:", sumArray([1, 2, 3, 4, 5]));

// Sort descending
function sortDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}

console.log("Sorted:", sortDescending([3, 1, 4, 1, 5]));

// Filter even numbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log("Even:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Double all values
function doubleValues(arr) {
  return arr.map(num => num * 2);
}

console.log("Doubled:", doubleValues([1, 2, 3]));`}
        />
      </section>

      <TryItBox 
        code={`// Bubble sort implementation
function bubbleSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}

console.log(bubbleSort([5, 2, 8, 1, 9]));`}
        title="This is a bubble sort algorithm. Try to understand how it works and modify it to sort in descending order"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Date Object</h2>
        <p className="leading-relaxed mb-6">
          The Date object helps you work with dates and times. Use it to format dates, calculate differences, and handle time zones.
        </p>

        <CodeEditor 
          initialCode={`// Get formatted date
function getFormattedDate() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return now.toLocaleDateString('en-US', options);
}

console.log("Today:", getFormattedDate());

// Days between dates
function daysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return Math.round(Math.abs((d1 - d2) / oneDay));
}

console.log("Days:", daysBetweenDates("2024-01-01", "2024-01-15"));

// Check if date is weekend
function isWeekend(dateString) {
  const date = new Date(dateString);
  const day = date.getDay();
  return day === 0 || day === 6;
}

console.log("Is weekend?", isWeekend("2024-01-20"));`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Combining Built-in Objects</h2>
        <p className="leading-relaxed mb-6">
          Real-world functions often combine multiple built-in objects to solve complex problems.
        </p>

        <CodeEditor 
          initialCode={`// Generate random greeting
function randomGreeting(name) {
  const greetings = ["Hello", "Hi", "Hey", "Greetings"];
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex] + ", " + name + "!";
}

console.log(randomGreeting("Alice"));

// Calculate statistics
function getStats(numbers) {
  return {
    sum: numbers.reduce((a, b) => a + b, 0),
    avg: Math.round(numbers.reduce((a, b) => a + b, 0) / numbers.length),
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}

console.log(getStats([2, 4, 6, 8, 10]));`}
        />
      </section>
    </div>
  );
}
