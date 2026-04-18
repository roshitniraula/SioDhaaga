type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`type-eyebrow text-[--color-muted] ${className}`}
    >
      {children}
    </p>
  );
}
