import Link from 'next/link'

import { styled } from '../../../../stitches.config'

export const Container = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  border: 'none',
  borderRadius: 4,
  background: 'transparent',
  transition: '0.2s',
  fontWeight: '$bold',
  fontSize: '$4',
  textDecoration: 'none',

  svg: {
    width: 20,
    height: 20,
  },

  variants: {
    iconSide: {
      left: {
        flexDirection: 'row-reverse',
      },
      right: {
        flexDirection: 'row',
      },
    },
    color: {
      white: {
        color: '$gray200',

        '&:hover': {
          background: '#E6E8F20A',
        },
      },
      purple: {
        color: '$purple100',

        '&:hover': {
          background: '#8381D90F',
        },
      },
    },
  },

  defaultVariants: {
    color: 'purple',
  },
})
