<div align="center">

  <h1>
    <br/>
    <span>
    <svg width="120" height="120">
  <g transform="translate(0 30)">
    <text x="25%" y="25%" font-size="2em">
      <animateTransform attributeName="transform" type="rotate" from="90 60 30" to="450 60 30" dur="3" repeatCount="indefinite" />
      🐼
    </text>
  </g>
</svg>
</span><br />
animated-pandacss
<br />
    <br />

  </h1>
  <sup>
    <br />
    <br />
    <a href="https://www.npmjs.com/package/animated-pandacss?style=for-the-badge">
       <img src="https://img.shields.io/npm/v/animated-pandacss.svg?style=for-the-badge" alt="npm package" />
    </a>
    <a href="https://www.npmjs.com/package/animated-pandacss?style=for-the-badge">
      <img src="https://img.shields.io/npm/dw/animated-pandacss.svg?style=for-the-badge" alt="npm  downloads" />
    </a>
<a>
    <img alt="NPM" src="https://img.shields.io/npm/l/animated-pandacss?style=for-the-badge">
</a>

<a><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/anubra266/animated-pandacss?logo=github&style=for-the-badge">

</a>
    <br />
   Use Animate.css with Panda CSS
    
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i -D <a href="https://www.npmjs.com/package/animated-pandacss">animated-pandacss</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

## Install

```bash
npm i --save animated-pandacss
#or
yarn add animated-pandacss
#or
pnpm add animated-pandacss
```

## Usage

Add to presets in your [Panda](https://panda-css.com) config.

```ts
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  //...

  presets: ['@pandacss/dev/presets', 'animated-pandacss'],
})
```

You can now use it in your project.

```jsx
<div
  className={css({
    animationName: 'slideOutRight',

    // Optional attributes
    animationRepeat: 'infinite', // can also be a number
    animationDuration: '1s',
    animationDelay: '1s',
  })}
>
  Animated element
</div>
```

## Sponsors ✨

Thanks goes to these wonderful people

<p align="center">
  <a href="https://patreon.com/anubra266?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link">
    <img src='https://cdn.jsdelivr.net/gh/anubra266/static@main/sponsors.svg'/>
  </a>
</p>
