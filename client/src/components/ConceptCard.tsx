import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ConceptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ConceptCard({ icon: Icon, title, description }: ConceptCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all duration-300 hover:scale-105 hover:shadow-xl group" data-testid={`concept-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
