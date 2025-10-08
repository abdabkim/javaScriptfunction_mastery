import { Router } from "wouter";
import Navbar from "../Navbar";
import { ThemeProvider } from "../ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
      </Router>
    </ThemeProvider>
  );
}
