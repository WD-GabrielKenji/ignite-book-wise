import { useState } from 'react'

import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'
import { RatingForm } from '../RatingForm'

import { Container } from './styles'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BookRatings = ({ bookId, ratings }: BookRatingsProps) => {
  const [showForm, setShowForm] = useState(false)

  const handleRate = () => {
    setShowForm(true)
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" color="purple" />
      </header>

      <section>
        {showForm && (
          <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />
        )}
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
