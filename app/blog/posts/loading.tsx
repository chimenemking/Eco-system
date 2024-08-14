import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import React from 'react'

type LoadingProps = {}

const LoadingPosts:React.FC<LoadingProps> = () => {
  return (
    
    <div className='max-w-[700px] mx-auto  mb-12'>
        <div className='pt-20 grid grid-cols-2 gap-9 '>
        {
                Array.from({length:10},(_, i)=> i + 1).map((id)=>(
                  <div className="space-y-4">
                  <Skeleton className="h-12 w-full bg-gray-300"/>
                  <Skeleton className='h-10 w-10 rounded-full'/>
                  <Skeleton className='h-24 w-full'/>
                  </div>
                  
        
                ))
            } 
        </div>
        </div>
            
  
  )
}

export default LoadingPosts










//  {/* {
//                 Array.from({length:8},(_, i)=> i + 1).map((id)=>(
//                     <div className="flex flex-col space-y-3 items-center">
//                     {/* <Skeleton className="h-24 w-[250px] rounded-xl" />
//                     <Skeleton className="h-24 w-[250px]" /> */}
//                     <div className="space-y-2">
//                       <Skeleton className="h-12 w-[250px]" />
//                       <Skeleton className="h-12 w-[250px]" />
//                     </div>
//                   </div>
//                 ))
//             } */}

{/* <div className=" grid grid-cols-2 space-y-2">
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className=' h-24 w-250'/>
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                      <Skeleton className="h-12 w-[250px]" />
                    </div> */}