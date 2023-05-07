import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { Heading } from '../Typography'
import { Avatar } from '../ui/Avatar'
import { TextArea } from '../ui/Form/TextArea'
import { ActionIcon } from '../ui/ActionIcon'
import { RatingStars } from '../PopularBooks/RatingStars'

import { Check, X } from '@phosphor-icons/react'
import {
  ActionsContainer,
  Container,
  FormContainer,
  UserDetails,
} from './styles'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ bookId, onCancel }: RatingFormProps) => {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const submitDisabled = !description.trim() || !currentRate

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <Heading size="xs">{user.name}</Heading>
          </section>

          <RatingStars size="lg" rating={currentRate} />
        </UserDetails>
      )}

      <FormContainer>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple100"
            icon={<X />}
          />
          <ActionIcon
            iconColor="green100"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
