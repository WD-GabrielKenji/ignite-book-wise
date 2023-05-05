import { styled } from '../../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',

  svg: {
    boxSizing: 'content-box',
    color: '$purple100',

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  variants: {
    size: {
      sm: {
        svg: {
          width: 14,
          height: 14,
          padding: '0 2px',
        },
      },
      md: {
        svg: {
          width: 20,
          height: 20,
          padding: '0 3px',
        },
      },
      lg: {
        svg: {
          width: 24,
          height: 24,
          padding: '0 2px',
        },
      },
    },
  },
})
