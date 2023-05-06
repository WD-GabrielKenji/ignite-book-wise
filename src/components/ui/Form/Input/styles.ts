import { styled } from '../../../../../stitches.config'

export const InputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  width: '100%',
  paddingRight: '$5',
  border: '1px solid currentColor',
  borderRadius: 4,
  background: '$gray800',
  transition: '0.2s',
  color: '$gray500',

  '&:focus-within': {
    color: '$green200',
  },

  input: {
    flex: 1,
    height: 48,
    paddingLeft: '$5',
    border: 'none',
    background: 'none',
    color: '$gray100',
    fontSize: '0.875rem',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },
  },
})
