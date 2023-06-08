export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About NavBar</nav>
            <main className="min-h-screen grid place-content-center bg-slate-600">
                {children}
            </main>
        </>
    )
}
