import Card from "@/components/card/Card";
import Navigation from "@/components/nav/navigation";
import { fetchPages } from "@/lib/notion";
import Image from "next/image";

export default async function Home() {
  const post = await fetchPages();

  return (
    <main>
      <Navigation />
      <header className="h-[600px] w-full azerty flex items-center justify-center flex-col text-3xl  text-white gap-10 ">
        <h1 className="text-6xl font-black">SOUNDBOX MTF</h1>
        <h2>seulement pour les mecs COOL</h2>
      </header>
      <div className="px-24">
      <ul  className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"> 

      {post.results.map((i) => (
        <Card
          key={i.id}
          name={i.properties.Nom.title[0].plain_text}
          image={i.properties.image.files[0]?.file.url}
          sound={i.properties.son.files[0]?.file.url}
        />
      ))}






</ul>
</div>
      {/* {post.results.map((i) => (
        <div>
          <h1 key={i.id}>{i.properties.Nom.title[0].plain_text}</h1>
          <audio
            controls
            src={i.properties.son.files[0]?.file.url}
            type="audio/mpeg"
          />
          <Image
            src={i.properties.image.files[0]?.file.url}
            alt="azerty"
            width={300}
            height={300}
          />
        </div>
      ))} */}
    </main>
  );
}
