import { Expand } from '@theme-toggles/react'
import '@theme-toggles/react/css/Expand.css'
import { useColorMode } from './useColorMode'

export const ColorModeButton = ({ className }: { className?: string }) => {
  const { toggle, colorMode } = useColorMode()

  return <Expand onToggle={toggle} toggled={colorMode === 'light'} className={className} />
}
