import { keyframes } from 'animated-pandacss'
import { useState } from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { css, cx } from '../styled-system/css'
import { flex, grid, stack } from '../styled-system/patterns'
import { badge, button, link } from '../styled-system/recipes'
import { Code } from './code'
import { addToPreset, installScript, usageScript } from './codeblocks'
import { ColorModeButton } from './color-mode-button'

const listButton = cx('dark', button({ variant: 'ghost', size: 'sm' }), css({ w: 'fit-content' }))

function App() {
  const [animationName, setAnimationName] = useState<string | undefined>('zoomInDown')
  const [listIsOpen, setListIsOpen] = useState(false)
  return (
    <>
      <article
        className={grid({
          h: 'calc(100vh - token(spacing.16))',
          overflow: 'hidden',
          maxW: 'full',
          position: 'relative',
          gridTemplateColumns: { base: '[callout] 1fr', md: '[callout] 1fr [sidebar] 250px' },
          gridTemplateRows: '1fr auto',
          gridColumnGap: { base: '0', md: '4' },
          columnGap: { base: '0', md: '4' },
          gridRowGap: '4',
          rowGap: '4',
          gridTemplateAreas: "'callout animation-list' 'footer animation-list'",
        })}
      >
        <section
          className={css({
            gridArea: 'callout',
            alignSelf: 'center',
            justifySelf: 'center',
            textAlign: 'center',
          })}
        >
          <h1
            className={css({
              mb: '0',
              fontSize: 'min(14vw, 4rem)',

              animationDelay: { base: '0.25s', md: '0s' },
              animationDuration: '1s',
            })}
            style={{ animationName }}
            onAnimationEnd={() => setAnimationName(undefined)}
          >
            Animated-🐼
          </h1>
          <h2
            className={css({
              mt: '0',
              animationDelay: '0.3s',
              color: 'foreground',
              fontSize: 'min(10vw, 1.3333rem)',
              animationName: 'zoomInDown',
            })}
          >
            Animations for PandaCSS
          </h2>
          <p
            className={css({
              mt: '2rem',
              animationDelay: '0.5s',
              animationName: 'zoomInUp',
              display: { md: 'none' },
            })}
          >
            <button className={button({ variant: 'outline' })} onClick={() => setListIsOpen(true)}>
              See animations
            </button>
          </p>
        </section>

        <section
          data-state={listIsOpen ? 'open' : 'closed'}
          className={stack({
            position: { base: 'absolute', md: 'relative' },
            top: '0',
            left: { base: '100%', md: 'auto' },
            height: 'full',
            zIndex: '90',
            gridArea: 'animation-list',
            gridRow: '1 / 3',
            overflowY: 'auto',
            padding: '8',
            animationName: 'fadeInRight',
            animationDelay: '0.7s',
            animationFillMode: 'backwards',
            transition: 'transform 0.2s ease-out',
            bg: 'foreground',
            color: 'background',

            textAlign: 'left',
            transform: { md: 'none !important' },
            _open: {
              transform: 'translateX(-100%)',
            },
            gap: '3',

            _dark: {
              bg: 'background',
              borderLeftWidth: '1px',
              borderColor: 'border',
              color: 'foreground',
            },
          })}
        >
          <section className={flex({ gap: '1' })}>
            <a
              href="https://github.com/anubra266"
              target="_blank"
              rel="noreferrer"
              className={listButton}
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/anubra266"
              target="_blank"
              rel="noreferrer"
              className={listButton}
            >
              <BsTwitter />
            </a>
            <ColorModeButton className={listButton} />
            <button
              className={cx(
                'dark',
                button({ variant: 'default', size: 'sm' }),
                css({ display: { md: 'none' }, w: 'fit-content', ml: 'auto' }),
              )}
              onClick={() => setListIsOpen(false)}
            >
              <IoClose />
            </button>
          </section>
          <section className={stack({ gap: '1' })}>
            {Object.keys(keyframes).map((animation) => (
              <button
                key={animation}
                className={cx(
                  'dark',
                  button({ variant: 'ghost' }),
                  css({ justifyContent: 'start' }),
                )}
                onClick={() => setAnimationName(animation)}
              >
                {animation}
              </button>
            ))}
          </section>
        </section>

        <footer
          className={css({
            gridArea: 'footer',
            justifySelf: 'center',
            paddingBottom: '1rem',
            fontSize: 'xs',
            textAlign: 'center',
          })}
        >
          <p>
            Created with ❤️ by{' '}
            <a
              href="https://twitter.com/anubra266"
              target="_blank"
              rel="noreferrer"
              className={link()}
            >
              anubra266
            </a>
          </p>
        </footer>
      </article>
      <div
        className={flex({
          align: 'center',
          pl: '4',
          h: '16',
          bg: 'foreground',
          color: 'background',
          _dark: {
            bg: 'background',
            borderTopWidth: '1px',
            borderColor: 'border',
            color: 'foreground',
          },
        })}
      >
        <h1 className={css({ textStyle: 'xl', fontWeight: 'bold' })}>Documentation</h1>
      </div>
      <div className={stack({ gap: '8', p: '12' })}>
        <div>
          <b>Animated PandaCSS</b> is a preset for{' '}
          <a href="https://panda-css.com" target="_blank" rel="noreferrer" className={link()}>
            PandaCSS
          </a>{' '}
          that lets you use{' '}
          <a href="https://animate.style/" target="_blank" rel="noreferrer" className={link()}>
            Animate.css
          </a>{' '}
          <span
            className={cx(
              badge(),
              css({
                animationName: 'headShake',
                animationRepeat: 'infinite',
                animationDuration: '2s',
              }),
            )}
          >
            animations
          </span>{' '}
          in the library.
        </div>

        <div className={stack({ gap: '2' })}>
          <h2 className={css({ textStyle: 'h2', fontWeight: 'semibold' })}>Installation</h2>
          <Code lang="bash" code={installScript} />
        </div>

        <div className={stack({ gap: '4' })}>
          <h2 className={css({ textStyle: 'h2', fontWeight: 'semibold' })}>Usage</h2>

          <div className={stack({ gap: '2' })}>
            Add to presets in your panda config
            <Code code={addToPreset} />
          </div>
          <div className={stack({ gap: '2' })}>
            You can now use it in your project.
            <Code code={usageScript} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
