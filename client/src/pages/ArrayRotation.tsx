import Breadcrumb from "@/components/Breadcrumb";
import CodeEditor from "@/components/CodeEditor";
import TryItBox from "@/components/TryItBox";
import InfoBox from "@/components/InfoBox";
import ConceptCard from "@/components/ConceptCard";
import { RotateCw, Zap, RefreshCw, ArrowRight, Layers, Gauge } from "lucide-react";

export default function ArrayRotation() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: "Array Rotation & In-Place Logic" }]} />
      
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Array Rotation & Advanced In-Place Function Logic</h1>
      <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
        Learn how to use JavaScript functions to solve real algorithmic problems by mastering array rotation 
        techniques, from basic approaches to optimal in-place solutions that demonstrate deep programming understanding.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction to Array Rotation</h2>
        
        <p className="leading-relaxed mb-4">
          <strong>Array rotation</strong> is the process of shifting elements in an array by a certain number of positions, 
          either to the left or right. When elements reach the end of the array, they wrap around to the beginning (or vice versa). 
          This is a fundamental algorithmic concept that demonstrates how functions can transform data structures efficiently.
        </p>

        <p className="leading-relaxed mb-6">
          <strong>Types of rotation:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Right Rotation (Clockwise)</strong> - Elements move towards the end; rightmost elements wrap to the beginning</li>
          <li><strong>Left Rotation (Counter-Clockwise)</strong> - Elements move towards the start; leftmost elements wrap to the end</li>
        </ul>
        
        <InfoBox type="info">
          <strong>Real-world applications:</strong> Image carousels that rotate slides, music playlists cycling through songs, 
          task queue management in operating systems, circular buffers in data processing, rotating authentication tokens for security, 
          and shift scheduling systems.
        </InfoBox>

        <div className="my-6 p-6 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-3">Visual Example - Right Rotation:</h3>
          <p className="mb-2 font-mono text-sm">Original array: [1, 2, 3, 4, 5, 6, 7]</p>
          <p className="mb-2 font-mono text-sm">Rotate right by 1: [7, 1, 2, 3, 4, 5, 6]</p>
          <p className="mb-2 font-mono text-sm">Rotate right by 2: [6, 7, 1, 2, 3, 4, 5]</p>
          <p className="mb-2 font-mono text-sm">Rotate right by 3: [5, 6, 7, 1, 2, 3, 4]</p>
          <p className="text-sm text-muted-foreground mt-3">
            With each rotation step, the last element moves to the front, and all other elements shift one position to the right.
          </p>
        </div>

        <p className="leading-relaxed mt-6">
          <strong>Why is this algorithmic thinking important?</strong> Array rotation teaches you how to manipulate data in-place, 
          optimize for space complexity, and use mathematical patterns (like modulo arithmetic) to solve problems elegantly. It's 
          a common interview question that tests your understanding of arrays, loops, and algorithmic efficiency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Initial Steps and Simplification</h2>
        <p className="leading-relaxed mb-6">
          Before implementing rotation, we need to handle edge cases. The most important concept is 
          <strong> over-rotation</strong>: rotating by more positions than the array length.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ConceptCard
            icon={RotateCw}
            title="Rotation Steps (k)"
            description="The number of positions to rotate. Can be larger than array length."
          />
          <ConceptCard
            icon={RefreshCw}
            title="Modulo Optimization"
            description="Use k % array.length to handle over-rotation efficiently."
          />
        </div>

        <div className="my-6 p-6 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-3">Understanding Modulo (%):</h3>
          <p className="mb-2 font-mono text-sm">Array length: 7</p>
          <p className="mb-2 font-mono text-sm">Rotate by 10 = Rotate by (10 % 7) = Rotate by 3</p>
          <p className="mb-2 font-mono text-sm">Rotate by 14 = Rotate by (14 % 7) = Rotate by 0 (no change)</p>
          <p className="text-sm text-muted-foreground mt-3">
            This optimization prevents unnecessary rotations and improves performance.
          </p>
        </div>

        <CodeEditor 
          initialCode={`const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 10;

// Without modulo: inefficient
// With modulo: k % arr.length = 10 % 7 = 3
const optimizedK = k % arr.length;
console.log("Optimized rotation steps:", optimizedK);`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Simple Solution — Using Built-in Methods</h2>
        <p className="leading-relaxed mb-6">
          The simplest approach uses JavaScript's built-in array methods: <code className="px-2 py-1 bg-muted rounded text-sm font-mono">slice()</code> and{" "}
          <code className="px-2 py-1 bg-muted rounded text-sm font-mono">concat()</code>. This creates a new array 
          with the rotated elements.
        </p>

        <div className="my-6 p-6 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-3">Step-by-Step Flow:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Calculate effective rotation: k = k % n</li>
            <li>Find split point: splitIndex = n - k</li>
            <li>Extract tail portion: elements from splitIndex to end</li>
            <li>Extract head portion: elements from start to splitIndex</li>
            <li>Combine tail + head to create rotated array</li>
          </ol>
        </div>

        <CodeEditor 
          initialCode={`function rotateArraySimple(nums, k) {
  const n = nums.length;
  k = k % n; // Handle over-rotation
  
  // Calculate split point
  const splitIndex = n - k;
  
  // Extract tail (last k elements)
  const tail = nums.slice(splitIndex);
  
  // Extract head (first n-k elements)
  const head = nums.slice(0, splitIndex);
  
  // Combine and return
  return tail.concat(head);
}

console.log(rotateArraySimple([1,2,3,4,5,6,7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]

console.log(rotateArraySimple([1,2,3,4,5], 2));
// Output: [4, 5, 1, 2, 3]`}
        />

        <InfoBox type="tip">
          This method is easy to understand and works well for small arrays, but it creates a new array, 
          using O(n) additional space.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Advanced Solution — The Optimal In-Place Reversal Method</h2>
        <p className="leading-relaxed mb-6">
          The in-place reversal algorithm is a clever technique that rotates arrays without creating new ones. 
          It uses <strong>O(1)</strong> space (constant space) while maintaining <strong>O(n)</strong> time complexity.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Method</th>
                <th className="text-left p-3 font-semibold">Approach</th>
                <th className="text-left p-3 font-semibold">Space Used</th>
                <th className="text-left p-3 font-semibold">Time Complexity</th>
                <th className="text-left p-3 font-semibold">Understanding</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-muted/20">
                <td className="p-3">Slice & Concat</td>
                <td className="p-3">New array creation</td>
                <td className="p-3 font-mono text-sm">O(n)</td>
                <td className="p-3 font-mono text-sm">O(n)</td>
                <td className="p-3">Easy</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">In-Place Reversal</td>
                <td className="p-3">Mutates original</td>
                <td className="p-3 font-mono text-sm">O(1)</td>
                <td className="p-3 font-mono text-sm">O(n)</td>
                <td className="p-3">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <ConceptCard
            icon={Layers}
            title="Step 1: Reverse All"
            description="Reverse the entire array from start to end."
          />
          <ConceptCard
            icon={RefreshCw}
            title="Step 2: Reverse First k"
            description="Reverse only the first k elements."
          />
          <ConceptCard
            icon={ArrowRight}
            title="Step 3: Reverse Rest"
            description="Reverse the remaining n-k elements."
          />
        </div>

        <div className="my-6 p-6 bg-muted/50 rounded-lg border">
          <h3 className="font-semibold mb-3">Three-Step Reversal Example:</h3>
          <p className="mb-2 font-mono text-sm">Original: [1, 2, 3, 4, 5, 6, 7], k = 3</p>
          <p className="mb-2 font-mono text-sm">Step 1 - Reverse all: [7, 6, 5, 4, 3, 2, 1]</p>
          <p className="mb-2 font-mono text-sm">Step 2 - Reverse first 3: [5, 6, 7, 4, 3, 2, 1]</p>
          <p className="mb-2 font-mono text-sm">Step 3 - Reverse last 4: [5, 6, 7, 1, 2, 3, 4] ✓</p>
        </div>

        <InfoBox type="tip">
          This algorithm is space-optimal because it modifies the array in place without allocating 
          additional memory for a new array. It's commonly asked in technical interviews!
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">In-Place Function Implementation</h2>
        <p className="leading-relaxed mb-6">
          Here's the complete implementation using a helper function for reversing. Notice how we use 
          array destructuring for elegant element swapping.
        </p>

        <CodeEditor 
          initialCode={`function rotateArrayInPlace(nums, k) {
  const n = nums.length;
  
  // Edge case: empty array - return early
  if (n === 0) return nums;
  
  k = k % n; // Handle over-rotation
  
  // Helper function to reverse array segment
  function reverse(arr, start, end) {
    while (start < end) {
      // Swap elements using destructuring
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Edge case: no rotation needed
  if (k === 0) return nums;
  
  // Three-step reversal
  reverse(nums, 0, n - 1);     // Reverse entire array
  reverse(nums, 0, k - 1);     // Reverse first k elements
  reverse(nums, k, n - 1);     // Reverse remaining elements
  
  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7];
rotateArrayInPlace(nums, 3);
console.log(nums);
// Output: [5, 6, 7, 1, 2, 3, 4]

let nums2 = [10, 20, 30, 40, 50];
rotateArrayInPlace(nums2, 2);
console.log(nums2);
// Output: [40, 50, 10, 20, 30]`}
        />

        <InfoBox type="warning">
          Remember: The in-place method <strong>modifies the original array</strong>. If you need to keep 
          the original array unchanged, use the slice & concat method or create a copy first.
        </InfoBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Function Composition</h2>
        <p className="leading-relaxed mb-6">
          The in-place solution demonstrates excellent <strong>function composition</strong> — using a 
          helper function (<code className="px-2 py-1 bg-muted rounded text-sm font-mono">reverse</code>) 
          within the main function to solve a complex problem through smaller, manageable steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ConceptCard
            icon={Zap}
            title="Modular Design"
            description="The reverse helper function is reusable and testable independently."
          />
          <ConceptCard
            icon={Gauge}
            title="Performance"
            description="In-place operations are memory-efficient and faster for large datasets."
          />
        </div>
      </section>

      <TryItBox 
        code={`function rotateArrayInPlace(nums, k) {
  const n = nums.length;
  
  // Handle empty array first
  if (n === 0) return nums;
  
  k = k % n;
  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  if (k === 0) return nums;
  
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  
  return nums;
}

let myArray = [1, 2, 3, 4, 5];
rotateArrayInPlace(myArray, 2);
console.log(myArray);`}
        title="Try changing the array values and rotation number (k) to see how the algorithm works!"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <div className="space-y-4">
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">✓ Understand the Problem</h3>
            <p className="text-sm">Always handle edge cases like over-rotation using modulo arithmetic.</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">✓ Start Simple</h3>
            <p className="text-sm">Use built-in methods first to understand the logic, then optimize.</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">✓ Optimize When Needed</h3>
            <p className="text-sm">In-place algorithms save memory but require careful implementation.</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">✓ Use Helper Functions</h3>
            <p className="text-sm">Break complex problems into smaller, reusable function blocks.</p>
          </div>
        </div>
      </section>

      <InfoBox type="tip">
        <strong>Congratulations!</strong> You now understand both basic and optimal approaches to array rotation. 
        This knowledge is valuable for technical interviews and real-world problem solving. Practice implementing 
        both methods to master function-based algorithmic thinking!
      </InfoBox>
    </div>
  );
}
