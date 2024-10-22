import Card from "@/components/card/Card";
import Navigation from "@/components/nav/navigation";
import { fetchPages } from "@/lib/notion";
import { ClassNames } from "@emotion/react";


export default async function Home() {
  const post = await fetchPages();

  return (
    <>
      <Navigation />
      <header className="h-[600px] w-full azerty flex items-center justify-center flex-col text-3xl  text-white gap-10 ">
        <h1 className="text-6xl font-black">SOUNDBOX MTF</h1>
        <h2>seulement pour les mecs COOL</h2>
      </header>
      <div className="px-24">
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">

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
    </>
  );
}