import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../../stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: '#00000099',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  width: 516,
  padding: '56px 72px',
  top: '50%',
  left: '50%',
  borderRadius: 12,
  background: '$gray700',
  boxShadow: '4px 16px 24px 0px #00000040',
  transform: 'translate(-50%, -50%)',

  '> div': {
    maxWidth: 372,
    margin: '0 auto',
    textAlign: 'center',
  },
})

export const DialogClose = styled(Dialog.Close, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '$4',
  right: '$4',
  border: 'none',
  background: 'transparent',
  color: '$gray400',
})
