import Card from "@/components/card/Card";
import Navigation from "@/components/nav/Navigation";
import { fetchPages } from "@/lib/notion";


export default async function Home() {
  const post = await fetchPages();

  return (
    <>
      <Navigation />
      <header className="h-[600px] w-full azerty flex items-center justify-center flex-col text-3xl  text-white gap-10 ">
        <h1 className="text-6xl font-black">SOUNDBOX MTF</h1>
        <h2>seulement pour les mecs COOL</h2>
      </header>
    </>
  );
}








