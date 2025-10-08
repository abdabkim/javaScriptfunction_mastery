import { Info, Lightbulb, AlertTriangle } from "lucide-react";

interface InfoBoxProps {
  type?: "info" | "tip" | "warning";
  children: React.ReactNode;
}

export default function InfoBox({ type = "info", children }: InfoBoxProps) {
  const config = {
    info: {
      icon: Info,
      borderColor: "border-primary",
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
    },
    tip: {
      icon: Lightbulb,
      borderColor: "border-chart-2",
      bgColor: "bg-chart-2/5",
      iconColor: "text-chart-2",
    },
    warning: {
      icon: AlertTriangle,
      borderColor: "border-chart-4",
      bgColor: "bg-chart-4/5",
      iconColor: "text-chart-4",
    },
  };

  const { icon: Icon, borderColor, bgColor, iconColor } = config[type];

  return (
    <div className={`my-4 border-l-4 ${borderColor} ${bgColor} rounded-lg p-4`} data-testid={`info-box-${type}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
