"use client"
import { useRouter } from "next/navigation"

type Props = {
    params: { id: number }
  }
export function generateMetadata({ params }: Props)
{
    return {
        title: 'Mi blog - POSTS - ' + params.id,
        description: 'Mi blog creado con next',
    }
}

export default function PagePostID({ params }: Props) {
    const router = useRouter()
    return (
        <div>
          <h1 className="text-xl mb-2">Post ID: {params.id}</h1>
          <button className="rounded text-sm bg-indigo-600 text-white p-1.5 m-1.5" 
                    onClick={() => {
                        router.push('/posts')
                    }}>
            Volver
          </button>
        </div>

    )
}