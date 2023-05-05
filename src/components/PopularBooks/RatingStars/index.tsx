import { ComponentProps } from '@stitches/react'

import { Star } from '@phosphor-icons/react'
import { Container } from './styles'

type RatingStarsProps = ComponentProps<typeof Container> & {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}

export const RatingStars = ({
  rating,
  size = 'sm',
  ...props
}: RatingStarsProps) => {
  return (
    <Container size={size} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          weight={index + 1 <= rating ? 'fill' : 'regular'}
        />
      ))}
    </Container>
  )
}
