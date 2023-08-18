'use client'
import { useEffect, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { useCopyToClipboard } from 'usehooks-ts'
import { cx } from '../styled-system/css'
import { button } from '../styled-system/recipes'

type Props = { content: string }

export const CopyCodeButton = (props: Props) => {
  const { content } = props
  const [, copy] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copy(content)
    setVisible(false)
  }

  return (
    <button
      className={cx(button({ variant: 'secondary', size: 'sm' }))}
      aria-label="Copy code to clipboard"
      onClick={handleClick}
    >
      {visible ? <FiCopy /> : <FiCheck />}
    </button>
  )
}
