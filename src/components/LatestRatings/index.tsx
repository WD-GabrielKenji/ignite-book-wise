import { Text } from '../Typography'
import { PageTitle } from '../ui/PageTitle'
import { RatingCard } from '../RatingCard'

import { ChartLineUp } from '@phosphor-icons/react'
import { Container } from './styles'

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{
          marginBottom: 40,
        }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 12 }).map((_, i) => {
          return (
            <RatingCard
              key={i}
              rating={{
                id: 'sds',
                rate: 4,
                user: {
                  id: 'sadawsdasdas',
                  name: 'John Doe',
                  avatar_url: 'http://github.com/WD-GabrielKenji.png',
                  email: 'example@example.com',
                  created_at: new Date(),
                },
                book: {
                  id: 'sdasds',
                  author: 'Autor Livro',
                  cover_url: 'http://github.com/WD-GabrielKenji.png',
                  name: 'Titulo Livro',
                  summary:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem, cupiditate eligendi voluptate tenetur consequatur, necessitatibus nam magni ipsam amet pariatur culpa quia. Sed consequuntur sequi mollitia, tempora et voluptatibus repudiandae corrupti explicabo accusantium, quis ad eligendi. Ab in doloremque repellendus et obcaecati dignissimos quibusdam eligendi necessitatibus voluptatum voluptatibus at molestias non a error est consequuntur possimus omnis architecto, optio hic dolores quaerat, deleniti minus repudiandae? Temporibus atque omnis magnam exercitationem iure. Impedit, distinctio voluptas itaque tenetur voluptatibus eaque nulla praesentium, doloribus ducimus fuga eligendi rerum laudantium sequi nesciunt culpa porro? Explicabo facere veritatis, quam soluta id numquam laboriosam tempore accusantium. Iste, aut, eveniet voluptatem molestias aspernatur rem excepturi, autem veritatis ad nemo numquam delectus maiores! Possimus inventore corporis, aperiam tempore quas, quia hic modi ratione unde, quibusdam saepe officia maiores illo! Voluptate perferendis ullam nemo est nihil accusamus fuga molestias velit nostrum! Quasi tenetur voluptates consectetur, inventore quo adipisci?',
                  total_pages: 100,
                },
                created_at: new Date(),
              }}
            />
          )
        })}
      </section>
    </Container>
  )
}
