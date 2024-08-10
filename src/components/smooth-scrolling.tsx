'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
