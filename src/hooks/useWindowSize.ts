import { useState, useEffect } from 'react'
import { DEVICES_WIDTH } from '../constants/devicesWidth'

type UseWindowSizeType = {
  width: number | null
  height: number | null
  isDeviceSmarthphone: boolean
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<UseWindowSizeType>({
    width: null,
    height: null,
    isDeviceSmarthphone: false,
  })

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isDeviceSmarthphone: window.innerWidth <= DEVICES_WIDTH.smarthphone,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return { windowSize }
}
