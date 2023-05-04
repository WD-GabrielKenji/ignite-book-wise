import { ReactNode } from 'react'

import { Container, Content } from './styles'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <aside>Sidebar</aside>

      <Content>{children}</Content>
    </Container>
  )
}
