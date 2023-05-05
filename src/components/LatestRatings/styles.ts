import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  paddingBottom: 40,
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    marginTop: '$4',
  },
})
