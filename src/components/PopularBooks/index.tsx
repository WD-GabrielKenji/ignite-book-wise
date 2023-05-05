import { Text } from '../Typography'
import { Link } from '../ui/Link'
import { BookCard } from '../BookCard'

import { Container } from './styles'

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              id: 'fsdfsdfs',
              author: 'Autor Livro',
              name: 'Titulo Livro',
              cover_url: 'http://github.com/WD-GabrielKenji.png',
              summary:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem, cupiditate eligendi voluptate tenetur consequatur, necessitatibus nam magni ipsam amet pariatur culpa quia.',
              avgRating: 4,
              created_at: new Date(),
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  )
}
