import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Code2, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const lessonItems = [
  { path: "/basics", label: "Function Basics" },
  { path: "/expressions", label: "Expressions & Arrows" },
  { path: "/scope", label: "Scope & Closures" },
  { path: "/callbacks", label: "Callbacks & Async" },
  { path: "/built-in", label: "Built-in Objects" },
  { path: "/array-rotation", label: "Array Rotation" },
];

const mainNavItems = [
  { path: "/", label: "Home" },
  { path: "/practice", label: "Practice" },
  { path: "/references", label: "References" },
];

export default function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLessonPage = lessonItems.some(item => item.path === location);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-lg px-3 py-2 group transition-all duration-300">
            <Code2 className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary hidden sm:inline">JS Functions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {/* Home */}
            <Link href="/">
              <Button
                variant={location === "/" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-home"
                className={`transition-all duration-300 ${location === "/" ? "border-b-2 border-primary rounded-b-none" : ""}`}
              >
                Home
              </Button>
            </Link>
            
            {/* Lessons Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={isLessonPage ? "secondary" : "ghost"}
                  size="sm"
                  data-testid="nav-lessons"
                  className={`transition-all duration-300 ${isLessonPage ? "border-b-2 border-primary rounded-b-none" : ""}`}
                >
                  Lessons
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {lessonItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <DropdownMenuItem className={`cursor-pointer ${location === item.path ? "bg-secondary" : ""}`}>
                      {item.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Practice and References */}
            <Link href="/practice">
              <Button
                variant={location === "/practice" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-practice"
                className={`transition-all duration-300 ${location === "/practice" ? "border-b-2 border-primary rounded-b-none" : ""}`}
              >
                Practice
              </Button>
            </Link>
            
            <Link href="/references">
              <Button
                variant={location === "/references" ? "secondary" : "ghost"}
                size="sm"
                data-testid="nav-references"
                className={`transition-all duration-300 ${location === "/references" ? "border-b-2 border-primary rounded-b-none" : ""}`}
              >
                References
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="button-theme-toggle"
              className="transition-transform duration-300 hover:rotate-180"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-1">
            {/* Home */}
            <Link href="/">
              <Button
                variant={location === "/" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-home"
              >
                Home
              </Button>
            </Link>
            
            {/* Lessons Section */}
            <div className="pt-2 pb-1">
              <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lessons</p>
            </div>
            
            {lessonItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start pl-6"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {/* Practice and References */}
            <div className="pt-2"></div>
            <Link href="/practice">
              <Button
                variant={location === "/practice" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-practice"
              >
                Practice
              </Button>
            </Link>
            
            <Link href="/references">
              <Button
                variant={location === "/references" ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="nav-mobile-references"
              >
                References
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
