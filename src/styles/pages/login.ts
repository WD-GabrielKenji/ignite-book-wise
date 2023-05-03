import { styled } from '../../../stitches.config'

export const LogoContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1.1fr 1fr',
  minHeight: '100vh',
  padding: 20,
})

export const LogoSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: 10,
  background: 'url(/images/logo-section-bg.png) no-repeat center',
  backgroundSize: 'cover',
})

export const WelcomeSection = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '372px',
  width: '100%',
  margin: '0 auto',
  paddingLeft: 20,

  section: {
    marginTop: 40,
  },
})
