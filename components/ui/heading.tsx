import { cn } from '@/lib/utils';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

type TitleProps = HeadingProps;
type DescriptionProps = HeadingProps;

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div className={cn('space-y-1 text-center sm:text-left', className)}>
      {children}
    </div>
  );
};

const Title = ({ children }: TitleProps) => {
  return <h1 className="text-3xl font-bold tracking-tight">{children}</h1>;
};
Heading.Title = Title;

const Subtitle = ({ children }: TitleProps) => {
  return <h2 className="text-xl font-bold tracking-tight">{children}</h2>;
};
Heading.Subtitle = Subtitle;

const Description = ({ children }: DescriptionProps) => {
  return <p className="text-base text-muted-foreground">{children}</p>;
};
Heading.Description = Description;

export { Heading };
