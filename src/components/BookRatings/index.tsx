import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { UserRatingCard } from '../UserRatingCard'

import { Container } from './styles'

export const BookRatings = () => {
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
        {Array.from({ length: 10 }).map((_, i) => (
          <UserRatingCard
            key={i}
            rating={{
              rate: 2,
              user: {
                name: 'John Doe',
                avatar_url: 'http://github.com/WD-GabrielKenji.png',
              },
              created_at: new Date(),
              description: 'dçsfknjfklsdhjkasjdklsakl',
            }}
          />
        ))}
      </section>
    </Container>
  )
}
