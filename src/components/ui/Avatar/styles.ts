import Image from 'next/image'

import { styled } from '../../../../stitches.config'

export const Container = styled('div', {
  padding: 1,
  borderRadius: '$full',
  background: '$gradient-vertical',

  variants: {
    size: {
      sm: {
        width: 32,
        minWidth: 32,
        height: 32,
      },
      md: {
        width: 40,
        minWidth: 40,
        height: 40,
      },
      lg: {
        width: 72,
        minWidth: 72,
        height: 72,
      },
    },
  },
})

export const AvatarImage = styled(Image, {
  width: '100%',
  height: '100%',
  borderRadius: '$full',
  objectFit: 'cover',
})
