import PostLists from '@/app/components/posts-lists';
import Link from 'next/link';
import { resolve } from 'path';
import React, { Suspense } from 'react'
import loading from './loading';
import LoadingPosts from './loading';

type PostPageProps = {
    
}

const Posts:React.FC<PostPageProps> = async () => {
    

  return (
    <>  
    <main className='text-center pt-20 px-5'>
    <h1 className='text-4xl md:text-5xl  font-semibold mb-5'>
       All Posts 
    </h1>
        <Suspense fallback={<LoadingPosts/>}><PostLists id={''} title={''}/></Suspense>
    </main>
    </>
  )
}

export default Posts