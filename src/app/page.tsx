export const runtime = "edge";

const sleep: () => Promise<string> = async () =>
  new Promise((resolve) => setTimeout(() => resolve("HEJ APP!!"), 2000));

export default async function Home() {
  const msg: string = await sleep();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {msg}
    </main>
  );
}
