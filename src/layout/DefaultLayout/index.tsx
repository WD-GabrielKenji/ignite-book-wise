import { ReactNode } from 'react'

import { Sidebar } from '@/components/Sidebar'

import { Container, Content } from './styles'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Sidebar />

      <Content>{children}</Content>
    </Container>
  )
}
