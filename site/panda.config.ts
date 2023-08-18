import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: ['@shadow-panda/preset', 'animated-pandacss'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
})
