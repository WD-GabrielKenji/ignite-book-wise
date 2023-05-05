import Image from 'next/image'
import { Heading } from '../Typography'

import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  position: 'relative',
  gap: '$5',
  padding: '18px $5',
  border: '1px solid $gray700',
  borderRadius: 8,
  background: '$gray700',
  transition: '0.2s',
  cursor: 'pointer',
  overflow: 'hidden',

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const BookImage = styled(Image, {
  borderRadius: 4,
  objectFit: 'cover',
})

export const BookDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
})

export const BookName = styled(Heading, {
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
