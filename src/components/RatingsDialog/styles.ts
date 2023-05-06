import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { styled } from '../../../stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  background: '#00000099',
  inset: 0,
})

export const DialogContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  overflowY: 'auto',
  width: 660,
  height: '100%',
  top: 0,
  right: 0,
  padding: '$6 48px',
  background: '$gray800',
  boxShadow: '-4px 0px 30px 0px #00000080',

  '&::-webkit-scrollbar': {
    width: 6,
  },

  '&::-webkit-scrollbar-track': {
    background: '$gray700',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
  },
})

export const DialogClose = styled(Dialog.Close, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginBottom: '$4',
  border: 'none',
  background: 'transparent',
  color: '$gray400',
})

export const BookDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6 $8',
  borderRadius: '$md',
  background: '$gray700',
})

export const BookDetailsContainer = styled('div', {
  display: 'flex',
  gap: '$8',
})

export const BookImage = styled(Image, {
  minWidth: 171,
  borderRadius: '$md',
  objectFit: 'cover',
})

export const BookContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
})

export const BookInfos = styled('div', {
  display: 'flex',
  gap: 60,
  marginTop: 40,
  paddingTop: 24,
  borderTop: '1px solid $gray600',
})
