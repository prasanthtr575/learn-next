export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Next.js is a React framework that simplifies building web applications
        by providing additional features and structure beyond the core React
        library. It's designed to handle tasks like server-side rendering,
        static site generation, and routing, making it easier to create
        performant and SEO-friendly websites. Essentially, Next.js builds on top
        of React to offer a more complete development experience.
      </main>
    </div>
  );
}
