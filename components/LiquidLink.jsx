'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { liquidClasses, liquidFillClasses } from './liquidStyles';

export default function LiquidLink({
  href,
  children,
  variant = 'dark',
  className = '',
  ...props
}) {
  const ref = useRef(null);

  const trackPointer = (event) => {
    if (event.pointerType === 'touch') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--lx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty('--ly', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <Link
      ref={ref}
      href={href}
      className={liquidClasses({ variant, className })}
      data-variant={variant}
      onPointerMove={trackPointer}
      {...props}
    >
      <span
        aria-hidden="true"
        className={liquidFillClasses()}
        style={{ transformOrigin: 'var(--lx, 50%) var(--ly, 50%)' }}
      />
      <span className="relative z-10 inline-flex items-center gap-cta-gap">
        {children}
      </span>
    </Link>
  );
}
