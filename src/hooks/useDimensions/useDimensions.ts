import { useCallback, useEffect, useRef, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

function useDimensions<T extends HTMLElement>(
  ref: React.RefObject<T>
): Dimensions {
  const [state, setState] = useState<Dimensions>({
    width: 0,
    height: 0
  })
  const observerRef = useRef<ResizeObserver | null>(null)
  const isObservingRef = useRef<boolean>(false)

  const observe = useCallback(() => {
    if (isObservingRef.current || !observerRef.current) return

    observerRef.current.observe(ref.current as Element)
    isObservingRef.current = true
  }, [ref])

  const unobserve = useCallback(() => {
    if (!isObservingRef.current || !observerRef.current) return

    observerRef.current.disconnect()
    isObservingRef.current = false
  }, [])

  useEffect(() => {
    if (!ref.current) return () => null

    observerRef.current = new ResizeObserver(([entry]) => {
      const { contentRect } = entry

      setState({
        width: contentRect.width,
        height: contentRect.height
      })
    })

    observe()

    return () => {
      unobserve()
    }
  }, [ref, observe, unobserve])

  return {
    width: state.width,
    height: state.height
  }
}

export default useDimensions
