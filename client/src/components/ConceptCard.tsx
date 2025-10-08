import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ConceptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ConceptCard({ icon: Icon, title, description }: ConceptCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`concept-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
