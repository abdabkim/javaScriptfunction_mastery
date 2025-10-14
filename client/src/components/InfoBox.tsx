import { Info, Lightbulb, AlertTriangle } from "lucide-react";

interface InfoBoxProps {
  type?: "info" | "tip" | "warning";
  children: React.ReactNode;
}

export default function InfoBox({ type = "info", children }: InfoBoxProps) {
  const config = {
    info: {
      icon: Info,
      borderColor: "border-[hsl(var(--info))]",
      bgColor: "bg-[hsl(var(--info))]/10",
      iconColor: "text-[hsl(var(--info))]",
    },
    tip: {
      icon: Lightbulb,
      borderColor: "border-[hsl(var(--success))]",
      bgColor: "bg-[hsl(var(--success))]/10",
      iconColor: "text-[hsl(var(--success))]",
    },
    warning: {
      icon: AlertTriangle,
      borderColor: "border-[hsl(var(--warning))]",
      bgColor: "bg-[hsl(var(--warning))]/10",
      iconColor: "text-[hsl(var(--warning))]",
    },
  };

  const { icon: Icon, borderColor, bgColor, iconColor } = config[type];

  return (
    <div className={`my-4 border-l-4 ${borderColor} ${bgColor} rounded-lg p-4 transition-all duration-300 hover:shadow-md hover-elevate animate-fade-in`} data-testid={`info-box-${type}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-0.5 transition-transform duration-300`} />
        <div className="flex-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
