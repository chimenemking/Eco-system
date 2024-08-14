'use server'

export async function CreatePost(formData:FormData){
    const title = formData.get('title') as string;
    console.log(title);

    //update database
}