type Props = {
    promise: Promise<Post[]>
}

export default async function UserPosts({ promise }: Props) {
    const posts = await promise;
    return (
        <article>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2 className="text-2xl">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </article>
    )
}