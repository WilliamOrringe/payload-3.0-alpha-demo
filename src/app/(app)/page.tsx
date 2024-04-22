import Example from '@/components/Example'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <div className="flex flex-row gap-40 ">
        <Sidebar />
        <div className="grid grid-cols-5 w-full gap-16 mr-[18px] mt-20">
          {Array(55)
            .fill(10)
            .map((i) => {
              return <Card key={i} />
            })}
        </div>
      </div>
    </>
  )
}

export default Page
