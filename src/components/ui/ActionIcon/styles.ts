import { styled } from '../../../../stitches.config'

export const Container = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  border: 'none',
  borderRadius: 4,
  background: '$gray600',
  transition: '0.2s',

  svg: {
    width: 24,
    height: 24,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
