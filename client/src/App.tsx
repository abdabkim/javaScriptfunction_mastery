import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import FunctionBasics from "@/pages/FunctionBasics";
import FunctionExpressions from "@/pages/FunctionExpressions";
import FunctionScope from "@/pages/FunctionScope";
import CallbacksRecursionAsync from "@/pages/CallbacksRecursionAsync";
import BuiltInObjects from "@/pages/BuiltInObjects";
import ArrayRotation from "@/pages/ArrayRotation";
import PracticeZone from "@/pages/PracticeZone";
import References from "@/pages/References";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/basics" component={FunctionBasics} />
          <Route path="/expressions" component={FunctionExpressions} />
          <Route path="/scope" component={FunctionScope} />
          <Route path="/callbacks" component={CallbacksRecursionAsync} />
          <Route path="/built-in" component={BuiltInObjects} />
          <Route path="/array-rotation" component={ArrayRotation} />
          <Route path="/practice" component={PracticeZone} />
          <Route path="/references" component={References} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
