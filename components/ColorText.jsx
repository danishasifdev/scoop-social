const SHIFT =
  'animate-colorDrift bg-[linear-gradient(100deg,#E94F37,#F6D66B,#C9DB9A,#7776D9,#E94F37)] bg-size-[300%_100%] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] motion-reduce:animate-none';

export default function ColorText({
  as: Tag = 'span',
  variant = 'shift',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${variant === 'shift' ? SHIFT : ''} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
