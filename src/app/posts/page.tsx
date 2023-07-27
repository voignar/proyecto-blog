import Link from "next/link"
import { getPostIdList } from "../lib/post";

export function generateMetadata()
{
    return {
        title: 'Mi blog - POSTS',
        description: 'Mi blog creado con next',
    }
}

export default async function PagePost() {
    const posts = await getPostIdList();
    return (
        <div>
        <h1 className="text-3xl mb-8">All Posts</h1>
        <p className="mb-4">
          Listado de posts
        </p>
        <ul className="list-none list-inside border border-indigo-600 rounded p-1.5 m-1.5">
            {posts.map((post) => (
                <li className="mb-2" key={`post-id-${post.params.id}`}>
                    <Link href={`/posts/${post.params.id}`}>{`Post de ejemplo ${post.params.id}`}</Link>
                </li>               
            ))}


        </ul>
        </div>
    )
}