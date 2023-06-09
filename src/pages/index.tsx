import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

import { DefaultLayout } from '@/layout/DefaultLayout'
import { LatestRatings } from '@/components/LatestRatings'
import { PopularBooks } from '@/components/PopularBooks'

import { HomeContainer } from '@/styles/pages/home'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
      <PopularBooks />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
