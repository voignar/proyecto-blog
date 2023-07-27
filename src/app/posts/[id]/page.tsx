import Link from "next/link"
import {Params} from "./type"
import {getPostIdList, getPostDetails} from "@/app/lib/post"

export function generateMetadata({ params }: Params)
{
    return {
        title: 'Mi blog - POSTS - ' + params.id,
        description: 'Mi blog creado con next',
    }
}

export default async function PagePostID({ params }: Params) {
    const postData = await getPostDetails(params.id);
    return (
        <div className="bg-gray-800 p-16 text-gray-100">
        <div className="text-center font-bold text-3xl">{postData.title}</div>
        <div className="text-justify my-8 text-gray-200">
          {postData.description}
        </div>
        <div className="text-gray-400">Published On: {postData.date}</div>
        <Link href="/posts" className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5">Volver</Link>
      </div>
    )
}