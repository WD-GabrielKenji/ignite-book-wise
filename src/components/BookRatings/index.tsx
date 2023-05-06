import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { RatingWithAuthor, UserRatingCard } from '../UserRatingCard'

import { Container } from './styles'

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {
  const handleRate = () => {
    console.log('Avaliar')
  }

  return (
    <Container>
      <header>
        <Text>Avaliações</Text>
        <Link withoutIcon onClick={handleRate} text="Avaliar" color="purple" />
      </header>

      <section>
        {ratings.map((rating) => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
