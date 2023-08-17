'use client'

import { css } from 'styled-system/css'

export default function Home() {
  return (
    <div>
      <div
        className={css({
          bg: 'red.300',
          //
          animationName: 'slideOutRight',
          //
          animationRepeat: 'infinite',
          // ------
          animationDuration: '2s',
          animationDelay: '1s',
        })}
      >
        wow
      </div>
    </div>
  )
}
