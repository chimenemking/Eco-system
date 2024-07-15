import Link from 'next/link'
import React from 'react'

type PostListsProps = {}

const PostLists:React.FC<PostListsProps> = async() => {
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const response = await fetch("https://dummyjson.com/posts?limit=10")

    const data = await response.json();
  return (
    <ul>
            {
                data.posts.map((post)=>(
                    <li key={post.id} className='mb-3'>
                        <Link href={`/blog/posts/${post.id}`}>
                        {post.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
  )
}

export default PostLists