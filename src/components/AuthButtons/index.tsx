import { signIn } from 'next-auth/react'

import { AuthButton, Container } from './styles'

type AuthButtonsProps = {
  callbackUrl?: string
}

export const AuthButtons = ({ callbackUrl = '/' }: AuthButtonsProps) => {
  const handleSignIn = (provider?: string) => {
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <AuthButton onClick={() => handleSignIn('google')}>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Entrar com Google
      </AuthButton>

      <AuthButton onClick={() => handleSignIn('github')}>
        <img src="/images/icons/github.svg" alt="Github Logo" />
        Entrar com Github
      </AuthButton>

      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket Icon" />
        Acessar como visitante
      </AuthButton>
    </Container>
  )
}
