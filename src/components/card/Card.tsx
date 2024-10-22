"use client"

import Image from 'next/image'
import React from 'react'
import Player from '../player/Player';


const Card = ({ name, image, sound }) => {
  return (
    <li className="w-[330px] h-[500px] flex flex-col items-center justify-center gap-[38px] rounded-[50px] bg-gradient-to-tl from-[#6acafa] to-[#8971f3] px-8 py-10">
      <Image className="mx-auto h-[224px] w-[224px] rounded-full" src={image} alt="" height={100} width={100} />
      <h3 className="font-[Julee] text-[#fff3f3] text-[40px]">{name}</h3>
      <Player src={sound} />
    </li>
  )
}


export default Card
