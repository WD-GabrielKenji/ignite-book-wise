import { styled } from '../../../stitches.config'

export const ExploreContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflow: 'hidden',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: 40,
  marginBottom: 48,
})

export const BooksGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridAutoRows: 188,
  gap: '$5',
  height: '100%',
  paddingBottom: 40,
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
