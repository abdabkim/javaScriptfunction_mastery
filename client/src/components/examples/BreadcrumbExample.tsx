import { Router } from "wouter";
import Breadcrumb from "../Breadcrumb";

export default function BreadcrumbExample() {
  return (
    <Router>
      <div className="p-4">
        <Breadcrumb items={[
          { label: "Lessons", path: "/lessons" },
          { label: "Function Basics" }
        ]} />
      </div>
    </Router>
  );
}
