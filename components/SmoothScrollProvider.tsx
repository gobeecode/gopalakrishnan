// components/SmoothScrollProvider.tsx
'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {

    const lenis = new Lenis({
    smoothWheel: true,
    });


    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
