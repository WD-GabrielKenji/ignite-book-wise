import { styled } from '@stitches/react'

export const Container = styled('button', {
  padding: '$1 $4',
  border: '1px solid $purple100',
  borderRadius: '$full',
  background: 'none',
  transition: '0.2s',
  color: '$purple100',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        borderColor: '$purple200',
        background: '$purple200',
        color: '$gray100',
      },
    },
  },
})
