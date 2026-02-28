export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  throw new Error("Somethng went wrong");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      This is About Page
    </div>
  );
}
