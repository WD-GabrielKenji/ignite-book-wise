import { ReactElement, useState } from 'react'

import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layout/DefaultLayout'
import { PageTitle } from '@/components/ui/PageTitle'
import { Input } from '@/components/ui/Form/Input'
import { Tag } from '@/components/ui/Tag'

import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { ExploreContainer, TagsContainer } from '@/styles/pages/explorar'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{
            maxWidth: '433px',
          }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Tudo
        </Tag>
        <Tag>Computação</Tag>
      </TagsContainer>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ExplorePage
