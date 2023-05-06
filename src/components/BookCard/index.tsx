import { Book } from '@prisma/client'
import { Text } from '../Typography'
import { RatingStars } from '../PopularBooks/RatingStars'

import { BookDetails, BookImage, BookName, Container } from './styles'

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAvgRating
  size?: 'md' | 'lg'
}

export const BookCard = ({ book, size = 'md' }: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  }

  return (
    <Container>
      <BookImage
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        css={{ minWidth: IMAGE_SIZES[size].width }}
        alt={book.name}
        src={book.cover_url}
      />
      <BookDetails>
        <div>
          <BookName size="xs">{book.name}</BookName>
          <Text size="sm" color="gray-400">
            {book.author}
          </Text>
        </div>

        <RatingStars rating={book.avgRating} />
      </BookDetails>
    </Container>
  )
}