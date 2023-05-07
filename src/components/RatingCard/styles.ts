import Image from 'next/image'

import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '$6',
  borderRadius: 8,
  background: '$gray700',

  variants: {
    variant: {
      default: {
        background: '$gray700',
      },
      compact: {
        background: '$gray600',
      },
    },
  },
})

export const CompactDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '$3',
})

export const BookDetails = styled('div', {
  display: 'flex',
  gap: '$5',

  img: {
    borderRadius: 4,
  },
})

export const BookImage = styled(Image, {
  minWidth: 108,
  objectFit: 'cover',
  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const UserDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginBottom: '$8',

  section: {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const ToggleShowMoreButton = styled('button', {
  marginLeft: '$1',
  border: 'none',
  background: 'none',
  color: '$purple100',
  fontSize: '0.875rem',
  fontWeight: '$bold',
})
