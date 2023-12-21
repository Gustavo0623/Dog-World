import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

// pages/[userId].tsx
export default function UserPage({params}: Params){
  const user = params.user

  return (
    <h1>{user}</h1>
  )
}