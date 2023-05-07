import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: 'max-content',
  borderLeft: '1px solid $gray700',
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '&::after': {
    content: "''",
    display: 'block',
    width: 32,
    height: 4,
    marginTop: 40,
    borderRadius: '$full',
    background: '$gradient-horizontal',
  },
})

export const ProfileDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  marginTop: 50,
})
