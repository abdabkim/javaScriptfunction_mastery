import TryItBox from "../TryItBox";

export default function TryItBoxExample() {
  return (
    <div className="p-4">
      <TryItBox 
        code={`function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(5, 3));`}
        title="Modify the function to multiply instead of add"
      />
    </div>
  );
}
