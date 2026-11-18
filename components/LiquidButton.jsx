'use client';
import { useRef } from 'react';
import { liquidClasses, liquidFillClasses } from './liquidStyles';

export default function LiquidButton({
  children,
  variant = 'dark',
  className = '',
  type = 'button',
  ...props
}) {
  const ref = useRef(null);
  const added = /(^|\s)is-added(\s|$)/.test(className);

  const trackPointer = (event) => {
    if (event.pointerType === 'touch') return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--lx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty('--ly', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <button
      ref={ref}
      type={type}
      data-variant={variant}
      onPointerMove={trackPointer}
      className={liquidClasses({ variant, className, added })}
      {...props}
    >
      <span
        aria-hidden="true"
        className={liquidFillClasses({ added })}
        style={{ transformOrigin: 'var(--lx, 50%) var(--ly, 50%)' }}
      />
      <span className="relative z-10 inline-flex items-center gap-cta-gap">
        {children}
      </span>
    </button>
  );
}
