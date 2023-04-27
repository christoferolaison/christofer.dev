export const runtime = "edge";

export default async function Home() {
  const data = await fetch("https://baconipsum.com/api/?type=meat-and-filler", {
    cache: "no-store",
  });
  const json = await data.json();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {JSON.stringify(json)}
    </main>
  );
}
