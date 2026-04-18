type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({ children, className = "", as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={`w-full max-w-[1440px] mx-auto px-5 md:px-12 xl:px-24 ${className}`}
    >
      {children}
    </Tag>
  );
}
