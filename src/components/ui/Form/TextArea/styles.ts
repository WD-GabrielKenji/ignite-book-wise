import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  border: '1px solid currentColor',
  borderRadius: 4,
  background: '$gray800',
  transition: '0.2s',
  color: '$gray500',

  '&:focus-within': {
    color: '$green200',
  },

  textarea: {
    flex: 1,
    minHeight: '136px',
    padding: '0.875rem $5',
    border: 'none',
    background: 'none',
    color: '$gray100',
    fontSize: '0.875rem',
    resize: 'none',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 'none',
    },
  },

  span: {
    marginLeft: 'auto',
    paddingRight: 8,
    paddingBottom: 4,
    color: '#7C7C8A',
    fontSize: '$xs',
  },
})
