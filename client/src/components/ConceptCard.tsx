import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ConceptCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ConceptCard({ icon: Icon, title, description }: ConceptCardProps) {
  const colors = [
    { bg: "bg-primary/10", hover: "group-hover:bg-primary/20", icon: "text-primary" },
    { bg: "bg-[hsl(var(--success))]/10", hover: "group-hover:bg-[hsl(var(--success))]/20", icon: "text-[hsl(var(--success))]" },
    { bg: "bg-[hsl(var(--warning))]/10", hover: "group-hover:bg-[hsl(var(--warning))]/20", icon: "text-[hsl(var(--warning))]" },
    { bg: "bg-[hsl(var(--info))]/10", hover: "group-hover:bg-[hsl(var(--info))]/20", icon: "text-[hsl(var(--info))]" },
  ];
  
  const colorIndex = title.length % colors.length;
  const color = colors[colorIndex];
  
  return (
    <Card className="p-6 hover-elevate transition-all duration-300 hover:shadow-xl group border-2 border-transparent animate-fade-in-up" data-testid={`concept-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${color.bg} ${color.hover} transition-all duration-300`}>
          <Icon className={`h-6 w-6 ${color.icon} transition-transform duration-300 group-hover:rotate-12`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2 transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
