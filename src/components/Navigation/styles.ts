import Link from 'next/link'

import { styled } from '../../../stitches.config'

export const Container = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$7',
})

export const NavItemContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  transition: '0.2s',
  color: '$gray400',
  textDecoration: 'none',

  svg: {
    marginRight: '$3',
  },

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    content: "''",
    width: 4,
    height: 24,
    marginRight: '$4',
    borderRadius: '$full',
    background: '$gradient-vertical',
    transition: '0.2s',
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})
