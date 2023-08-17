import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: ['@pandacss/dev/presets', '@shadow-panda/preset'],
  exclude: [],
  outdir: 'styled-system',
})
