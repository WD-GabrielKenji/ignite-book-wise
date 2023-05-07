import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  width: '100%',
  height: '100%',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const RatingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
