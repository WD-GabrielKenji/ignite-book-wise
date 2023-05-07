import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  padding: '$6',
  borderRadius: 8,
  background: '$gray700',
})

export const UserDetails = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$2',
})
