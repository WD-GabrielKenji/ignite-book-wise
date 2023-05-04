import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import { useSession } from 'next-auth/react'

import { DefaultLayout } from '@/layout/DefaultLayout'

const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomePage
