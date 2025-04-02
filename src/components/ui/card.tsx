import * as React from "react";

import { cn } from "../../lib/utils";

// Create a type for the common props used across card components
type CardComponentProps = React.HTMLAttributes<HTMLDivElement>;

// Create a higher-order component to reduce repetition
const createCardComponent = (
  displayName: string,
  defaultClassName: string
): React.ForwardRefExoticComponent<CardComponentProps> => {
  const Component = React.forwardRef<HTMLDivElement, CardComponentProps>(
    ({ className, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(defaultClassName, className)}
        {...props}
      />
    )
  );
  Component.displayName = displayName;
  return Component;
};

// Create card components using the higher-order component
const Card = createCardComponent(
  "Card",
  "rounded-xl border bg-card text-card-foreground shadow"
);

const CardHeader = createCardComponent(
  "CardHeader",
  "flex flex-col space-y-1.5 p-6"
);

const CardTitle = createCardComponent(
  "CardTitle",
  "font-semibold leading-none tracking-tight"
);

const CardDescription = createCardComponent(
  "CardDescription",
  "text-sm text-muted-foreground"
);

const CardContent = createCardComponent(
  "CardContent",
  "p-6 pt-0"
);

const CardFooter = createCardComponent(
  "CardFooter",
  "flex items-center p-6 pt-0"
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
