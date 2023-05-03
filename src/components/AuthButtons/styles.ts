import { styled } from '../../../stitches.config'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const AuthButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  width: '100%',
  height: 72,
  padding: '0 $6',
  border: 'none',
  borderRadius: 8,
  background: '$gray600',
  transition: '0.2s',
  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',

  '&:hover': {
    background: '$gray500',
  },
})
