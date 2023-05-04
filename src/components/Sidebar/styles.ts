import Link from 'next/link'

import { styled } from '../../../stitches.config'

export const Container = styled('aside', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
  width: '232px',
  height: 'calc(100% - 40px)',
  margin: 20,
  paddingTop: 40,
  paddingBottom: 24,
  borderRadius: 12,
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize: 'cover',

  '.logo': {
    width: 128,
    marginBottom: 64,
  },
})

export const LoginButton = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$gray200',
  fontSize: '$md',
  fontWeight: 700,
  textDecoration: 'none',

  svg: {
    color: '$green100',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
