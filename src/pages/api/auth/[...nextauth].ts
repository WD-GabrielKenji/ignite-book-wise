import NextAuth, { NextAuthOptions } from 'next-auth'

import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaAdapter } from '@/lib/auth/prisma-adapter'

export function buildNextAuthOptions(
  req: NextApiRequest,
  res: NextApiResponse,
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    providers: [],
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, buildNextAuthOptions(req, res))
}
