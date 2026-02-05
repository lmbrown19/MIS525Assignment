import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({
  children,
  className = "",
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={`${narrow ? "container-narrow" : "container-wide"} py-6 sm:py-8 ${className}`}
    >
      {children}
    </div>
  );
}
