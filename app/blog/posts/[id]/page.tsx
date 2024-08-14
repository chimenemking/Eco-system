import { Suspense } from "react"
import LoadingSinglePost from "./loading"
import SinglePost from "@/app/components/singlePost"


export default async function SinglePostPage({params}:{params:{id:string}}){

    const response = await fetch(`https://dummyjson.com/posts/${params.id}`)

    const post = await response.json()

    //console.log(post)
    return(
        <>
        <main className="px-7 pt-20 text-center">
            <h1 className="text-5xl font-semibold mb-7">
                {post.title} 
            </h1>
            {/* <Suspense fallback={<LoadingSinglePost/>}>
            <h1 className="text-2xl"><SinglePost/></h1>
            </Suspense> */}
            <div className="max-w-[700px] mx-auto">
                <Suspense fallback={<LoadingSinglePost/>}>
                
                <SinglePost params={params}/>
                </Suspense>
            </div>
        </main>
        </>
    )
}

