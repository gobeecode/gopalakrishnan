// components/CustomCursor.tsx
'use client'

import { useEffect } from 'react'

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    document.body.appendChild(cursor)

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', move)

    return () => {
      window.removeEventListener('mousemove', move)
      cursor.remove()
    }
  }, [])

  return null
}
