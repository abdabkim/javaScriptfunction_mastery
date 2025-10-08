import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-foreground hover-elevate p-1 rounded">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          {item.path ? (
            <Link href={item.path} className="hover:text-foreground hover-elevate px-2 py-1 rounded">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
