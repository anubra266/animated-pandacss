import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: ['animated-pandacss', '@shadow-panda/preset'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
})
