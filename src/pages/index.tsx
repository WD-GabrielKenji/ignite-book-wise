import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

import { DefaultLayout } from '@/layout/DefaultLayout'
import { LatestRatings } from '@/components/LatestRatings'

import { HomeContainer } from '@/styles/pages/home'

const HomePage: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <LatestRatings />
    </HomeContainer>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
