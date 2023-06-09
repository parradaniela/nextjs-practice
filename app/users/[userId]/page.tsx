import { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    // Next deduplicates requests, so this can be used here as well and it will not trigger two requests
    const userData: Promise<User> = getUser(userId);
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId);
    const userPostsData: Promise<Post[]> = getUserPosts(userId);

    const user = await userData;
    return (
        <section className="flex flex-col items-center gap-4">
            <h1>{user.name}</h1>
            <Suspense fallback={<h2>Loading...</h2>}>
                {/* @ts-expect-error Server Component */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </section>
    )
}
