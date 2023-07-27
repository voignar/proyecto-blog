export default function CategoryPost({ params }: { params: { slug: string[] } }){
    return(
        <div>
            Post Cateogry:
           {
           params.slug?.map((slug:string, index:number)=>(
                
                    <h2 key={`cat-${index}`}>{slug}</h2>
                )) 
            }
        </div>
    )
}