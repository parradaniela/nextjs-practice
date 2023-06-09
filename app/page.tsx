import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1>Home Page</h1>
      <Link href="/about">Link to About Page</Link>
      <Link href="/users">Users</Link>
    </main>
  )
}
