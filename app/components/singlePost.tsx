import React from 'react'

type SinglePostProps = {}

export default async function SinglePost({params}:{params:{id:string}}){
    await new Promise((resolve)=> setTimeout(resolve,1000))
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`)

    const post = await response.json()

    //console.log(post)
    return(
        <>  
            <p className="max-w-[700px] mx-auto">
                {post.body}
            </p>
        </>
    )
}