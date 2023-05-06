import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Heading, Text } from '../Typography'
import { RatingStars } from '../PopularBooks/RatingStars'
import { BookInfo } from './BookInfo'
import { BookRatings } from '../BookRatings'

import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'

type RatingsDialogProps = {
  children: ReactNode
}

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage
                width={171}
                height={242}
                alt="Book Name"
                src="http://github.com/WD-GabrielKenji.png"
              />

              <BookContent>
                <div>
                  <Heading size="sm">Titulo</Heading>
                  <Text color="gray-300" css={{ marginTop: '$2' }}>
                    Autor
                  </Text>
                </div>

                <div>
                  <RatingStars rating={4} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: '$1' }}>
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookmarkSimple />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="217" />
            </BookInfos>
          </BookDetailsWrapper>

          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
