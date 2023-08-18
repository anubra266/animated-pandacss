import SyntaxHighlighter from 'react-syntax-highlighter'
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { Box, Flex } from '../styled-system/jsx'
import { CopyCodeButton } from './copy-code-button'

type Props = { code: string; lang?: string }

export const Code = (props: Props) => {
  const { code, lang = 'typescript' } = props

  return (
    <Flex
      className="dark"
      overflow="auto"
      position="relative"
      css={{
        '& pre': { w: 'full', p: '4!', rounded: 'md' },
      }}
    >
      <SyntaxHighlighter language={lang} style={irBlack}>
        {code}
      </SyntaxHighlighter>
      <Box position="absolute" top="2" right="2" zIndex={1}>
        <CopyCodeButton content={code} />
      </Box>
    </Flex>
  )
}
