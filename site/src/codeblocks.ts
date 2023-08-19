export const installScript = `npm install -D animated-pandacss
yarn install -D animated-pandacss
pnpm install -D animated-pandacss`

export const addToPreset = `import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Other config...
  presets: ['animated-pandacss', '@pandacss/dev/presets'],
})
`

export const usageScript = `<div
  className={css({
    animationName: 'slideOutRight',

    // Optional attributes
    animationRepeat: 'infinite', // can also be a number
    animationDuration: '1s',
    animationDelay: '1s',
  })}
>
  Animated element
</div>`
