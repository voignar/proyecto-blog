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
    return (
        <div>
          <h1>Post ID: {params.id}</h1>
        </div>
    )
}