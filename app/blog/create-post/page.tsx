import { CreatePost } from "@/actions/actions"
import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

    // import ReactQuill from "react-quill";
    // import 'react-quill/dist/quill.snow.css';

export default async function Page (){
    const {isAuthenticated} = getKindeServerSession();
    if(!(await isAuthenticated())){
        redirect('/api/auth/login?post_login_redirect_url=/blog/create-post')
    }
    return (
        <main className="text-center pt-16 ">
            <h1 className="text-4xl md:text-5xl font-semibold mb-5">Create Post</h1>
            <form 
                action={CreatePost}
                className="h-10 space-x-2 mt-10">
                <input 
                    type="text"
                    name="title"
                    placeholder="Share your stories..."
                    className="border rounded focus:outline-none h-full px-3 py-1"
                    required/>
                <button className=" h-full bg-gray-950 px-5 rounded text-white font-semibold">Submit</button>
                {/* <ReactQuill className="pt-2 w-1/2 " theme="snow"/> */}
            </form>
            <LogoutLink className="bg-gray-800 text-white px-5">
                Log out
            </LogoutLink>
        </main>
    )
}