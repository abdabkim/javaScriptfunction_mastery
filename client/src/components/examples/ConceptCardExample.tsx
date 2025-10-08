import ConceptCard from "../ConceptCard";
import { Code, Zap, Package } from "lucide-react";

export default function ConceptCardExample() {
  return (
    <div className="p-4 space-y-4">
      <ConceptCard
        icon={Code}
        title="Function Declaration"
        description="The traditional way to define a function using the function keyword."
      />
      <ConceptCard
        icon={Zap}
        title="Arrow Functions"
        description="A shorter syntax for writing functions introduced in ES6."
      />
      <ConceptCard
        icon={Package}
        title="Function Scope"
        description="Variables declared inside a function are local to that function."
      />
    </div>
  );
}
