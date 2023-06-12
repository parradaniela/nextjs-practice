export default async function getUserPosts(userId: string) {
    const res = await fetch(
        //You can use the {next: {revalidate: number}} property to change this to Incremental Static Regeneration - the number determines how many seconds you want in between refreshes
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } }
    );
    if (!res.ok) undefined;
    return res.json();
}