import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import React from 'react'

type LoadingProps = {}

const LoadingPosts:React.FC<LoadingProps> = () => {
  return (
    <div><main className='text-center pt-3 px-5'>
        <ul>
            {
                Array.from({length:8},(_, i)=> i + 1).map((id)=>(
                    <div className="flex flex-col space-y-3 items-center">
                    {/* <Skeleton className="h-24 w-[250px] rounded-xl" />
                    <Skeleton className="h-24 w-[250px]" /> */}
                    <div className="space-y-2">
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                    </div>
                  </div>
                ))
            }
        </ul>
    </main></div>
  )
}

export default LoadingPosts