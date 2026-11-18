'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
export function useCart() { return useContext(CartContext); }

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [celebration, setCelebration] = useState(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('scoop-social-cart');
      if (saved) setItems(JSON.parse(saved));
    } catch {
      window.localStorage.removeItem('scoop-social-cart');
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem('scoop-social-cart', JSON.stringify(items));
  }, [items, ready]);

  useEffect(() => {
    if (!celebration) return undefined;
    const timer = setTimeout(() => setCelebration(null), 1900);
    return () => clearTimeout(timer);
  }, [celebration]);

  const celebrate = useCallback((product, origin) => {
    const rect = origin?.getBoundingClientRect?.();
    setCelebration({
      id: `${Date.now()}-${Math.random()}`,
      name: product?.name || 'Your scoop',
      color: product?.color || '#E94F37',
      x: rect ? rect.left + rect.width / 2 : window.innerWidth - 56,
      y: rect ? rect.top + rect.height / 2 : 48,
    });
  }, []);

  const add = (product, size = 'Pint', unitPrice = product.price) => setItems(old => {
    const key = `${product.slug}-${size}`;
    const found = old.find(item => item.key === key);
    return found
      ? old.map(item => item.key === key ? { ...item, qty: item.qty + 1 } : item)
      : [...old, { ...product, size, price: unitPrice, key, qty: 1 }];
  });
  const update = (key, delta) => setItems(old => old.map(item => item.key === key ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0));
  const remove = key => setItems(old => old.filter(item => item.key !== key));
  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const value = useMemo(() => ({ items, add, update, remove, count, total, open, setOpen, celebrate, celebration }), [items, count, total, open, celebrate, celebration]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
