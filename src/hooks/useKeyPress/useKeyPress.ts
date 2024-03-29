import { useEffect, useState } from 'react'

function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState<boolean>(false)

  function downHandler({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return keyPressed
}

export default useKeyPress
