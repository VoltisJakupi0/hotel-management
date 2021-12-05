import { useCallback } from 'react'
import { useModal } from '../modalContext'
import { ModalActions } from '../types'

function useHideModal(): () => void {
  const [, dispatch] = useModal()

  const handleOnClose = useCallback(() => {
    dispatch({ type: ModalActions.hideModal })
  }, [dispatch])

  return handleOnClose
}

export default useHideModal
