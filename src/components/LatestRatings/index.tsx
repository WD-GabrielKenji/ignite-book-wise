import { Text } from '../Typography'
import { PageTitle } from '../ui/PageTitle'

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
    </Container>
  )
}
