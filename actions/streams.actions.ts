"use server"
import { StreamClient } from "@stream-io/node-sdk"
import { currentUser } from "@clerk/nextjs/server"

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const apiSecret = process.env.STREAM_SECRET_KEY

export const tokenProvider = async () => {
  const user = await currentUser()

  if (!user) throw new Error(`User is not logged in`)
  if (!apiKey) throw new Error(`There is no API key`)
  if (!apiSecret) throw new Error(`There is no secret key`)

  const client = new StreamClient(apiKey, apiSecret)

  const exp_date = Math.round(new Date().getTime() / 1000) + 60 * 60
  const issued_date = Math.floor(new Date().getTime() / 1000) - 60

  const token = client.createToken(user.id, exp_date, issued_date)
  return token
}
