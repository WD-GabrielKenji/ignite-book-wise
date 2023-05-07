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

export const LatestContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$4',
    marginBottom: '$4',
  },
})
