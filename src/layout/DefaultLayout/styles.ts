import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  width: '100%',
  height: '100vh',
})

export const Content = styled('div', {
  maxWidth: '996px',
  width: '100%',
  height: '100vh',
  margin: '0 auto',
  paddingTop: 72,
})
