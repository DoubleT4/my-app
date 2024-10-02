import Image from 'next/image'
import React from 'react'
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";
import Button from '../Button/Button';
const Card = ({ name, image, sound}) => {
  return (
    <li className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-gray-800 px-8 py-10">
      <Image className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={image} alt=""height={100} width={100} />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{name}</h3>
      <Button sound={sound}/>
    </li>
  )
}

export default Card
