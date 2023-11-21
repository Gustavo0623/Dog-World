import React from 'react'

type Props = {}

const page = (
    {
        params,
    }:{
        params: {user: string}
    }) => {
  return (
    <div className="m-auto flex h-screen w-4/5 flex-col items-stretch gap-4 rounded border bg-white p-4 capitalize opacity-95">
        <h1 className='text-center text-black'>{params.user} Page</h1>
    </div>
  )
}

export default page