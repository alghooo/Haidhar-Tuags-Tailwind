import React, { useState } from "react";
import logo from "./kk.jpg"
import search from "./search.png"
import box from "./kotak4.png"
import tablet from "./tablett.png"
import hp from "./hp.png"
import pengasuh from "./ust-ghifar.jpg"
import pengasuh2 from "./ust-abdul-wahid.jpg"

function App() {
  const [gambar, gambarbaru] =  useState(tablet);
  return (
    <>
      {/*
       1. Font Family 
      <div className="w-full">
        <p className="font-sans">The quick brown fox</p>
        <p className="font-serif">The quick brown fox</p>
        <p className="font-mono">The quick brown fox</p>
      </div> 
      <p className="text-right absolute right-60">2. Hover</p>
      <p className="font-sans hover:font-serif text-center">Arahkan crusor ke saya</p>
      <p>3.Font Size :</p>
      <p className="font-sans text-sm absolute hover:static">The quick brown fox</p>
      <p className="font-serif text-base">The quick brown fox</p>
      <p className="font-mono text-lg">The quick brown fox</p>
      <p className="font-mono text-xl">The quick brown fox</p>
      <p className="font-mono text-2xl">The quick brown fox</p>
      <p className="font-mono text-[50px]">The quick brown fox</p>
      <br />
      <p>4.italic</p>
      <p className="italic">haidhar</p>
      <p className="not-italic">haidhar</p>
      <br />
      <p>5.font-weight</p>
      <p className="font-light">haidhar</p>
      <p className="font-extralight">haidhar</p>
      <p className="font-normal">haidhar</p>
      <p className="font-medium">haidhar</p>
      <p className="font-semibold">haidhar</p>
      <p className="font-bold">haidhar</p>
      <p className="font-thin">haidhar</p>
      <br />
      <p>6.Letter Spacing</p>
      <p className="tracking-tighter">haidhar</p>
      <p className="tracking-normal">haidhar</p>
      <p className="tracking-widest">haidhar</p>
      <p className="tracking-tight">haidhar</p>
      <br />
      <p>7.Line Height</p>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas vero illo rem assumenda? Magni inventore sint dignissimos sequi veritatis sed, maiores vero eaque reiciendis, nesciunt, dolorum iure alias rerum!
      </p>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas vero illo rem assumenda? Magni inventore sint dignissimos sequi veritatis sed, maiores vero eaque reiciendis, nesciunt, dolorum iure alias rerum!
      </p>
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptas vero illo rem assumenda? Magni inventore sint dignissimos sequi veritatis sed, maiores vero eaque reiciendis, nesciunt, dolorum iure alias rerum!
      </p>
      <br />
      <p>8.text align</p>
      <p className="text-right">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis repudiandae dignissimos quisquam deserunt sapiente, fuga veritatis modi expedita optio, repellat voluptas dolore eius laboriosam, magni excepturi necessitatibus maxime velit.
      </p>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis repudiandae dignissimos quisquam deserunt sapiente, fuga veritatis modi expedita optio, repellat voluptas dolore eius laboriosam, magni excepturi necessitatibus maxime velit.
      </p>
      <p className="text-left">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis repudiandae dignissimos quisquam deserunt sapiente, fuga veritatis modi expedita optio, repellat voluptas dolore eius laboriosam, magni excepturi necessitatibus maxime velit.
      </p>
      <p className="text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis repudiandae dignissimos quisquam deserunt sapiente, fuga veritatis modi expedita optio, repellat voluptas dolore eius laboriosam, magni excepturi necessitatibus maxime velit.
      </p>
      <br />
      <p>9.text color</p>
      <p className="text-sky-300">dhar</p>
      <p className="text-sky-400">dhar</p>
      <p className="text-sky-500">dhar</p>
      <p className="text-sky-600">dhar</p>
      <p className="text-sky-700">dhar</p>
      <p className="text-sky-800">dhar</p>
      <p className="text-sky-900">dhar</p>
      <p className="text-sky-600 hover:text-yellow-900">dhar</p>
      <br />
      <p>10.text decoration</p>
      <p className="underline">dhar</p>
      <br />
      <p className="overline">dhar</p>
      <br />
      <p className="line-through">dhar</p>
      <br />
      <p className="no-underline">dhar</p>
      <br />
      <p className="underline decoration-solid">dhar</p>
      <br />
      <p className="underline decoration-double">dhar</p>
      <br />
      <p className="underline decoration-dotted">dhar</p>
      <br />
      <p className="underline decoration-dashed">dhar</p>
      <br />
      <p className="text-sky-800 underline decoration-inherit">dhar</p>
      <br />
      <p className="text-sky-300 underline hover:overline">dhar</p>
      <br />
      <p className="text-sky-300 overline hover:underline">dhar</p>
      <br />
      <h1>11.background</h1>
      <div className="bg-indigo-500">bg</div>
      <div className="bg-rose-500">bg</div> 
      <div className="bg-teal-500">bg</div>
      <br />
      <h1>12.width</h1>
      <div className="bg-indigo-500 w-full">bg</div>
      <div className="bg-rose-500 w-96">bg</div> 
      <div className="bg-teal-500 w-80">bg</div>
      <div className="bg-indigo-500 w-64">bg</div>
      <div className="bg-rose-500 w-48">bg</div> 
      <div className="bg-teal-500 w-40">bg</div>
      <div className="bg-indigo-500 w-32 text-gray-50">bg</div>
      <div className="bg-rose-500 w-24 text-gray-50">bg</div> 
      <div className="bg-teal-500 w-[500px]">bg</div>
      <br />
      <br />
      flex and flex row and blur
      <div class="flex flex-row absolute right-[250px] blur-sm hover:blur-none drop-shadow-md">
       <div class="basis-1/4 w-64 bg-rose-500">01</div>
       <div class="basis-1/4 w-96 bg-rose-400">02</div>
       <div class="basis-1/2 w-48 bg-rose-200">03</div>
      </div>
      <br />
      <br />
      <br />
      <div class="grid grid-cols-1 divide-y absolute right-48 hover:blur-sm space-y-[4px]">
        grid and space
       <div class=" bg-rose-500 w-48 text-center">01</div>
       <div class=" bg-rose-500 w-48 text-right">02</div>
       <div class=" bg-rose-500 w-48 text-center">03</div>
      </div>
      <br />
      13.Height
      <div className="h-96 w-96 bg-indigo-300">d</div>
      <div className="h-80 w-80 bg-indigo-300">d</div>
      <div className="h-64 w-64 bg-indigo-300">d</div>
      <div className="h-48 w-48 bg-indigo-300">d</div>
      <div className="h-40 w-40 bg-indigo-300">d</div>
      <div className="h-32 w-32 bg-indigo-300">d</div>
      <div className="h-screen w-screen bg-indigo-300">d</div>
      <div className="h-[100px] w-24 bg-indigo-300">d</div>
      <br />
      14.justify content and + gap :
      <div className="flex justify-start bg-cyan-100 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
      </div>
      <br />
      <div className="flex justify-center bg-cyan-100 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
      </div>
      <br />
      <div className="flex justify-end bg-cyan-100 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
      </div>
      <br />
      <div className="flex justify-between bg-cyan-100 gap-2">
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
        <div className="p-2 rounded-lg bg-sky-500">h</div>
      </div>
      <br />
      contoh : 14.justify content and + gap :
      <div class="grid gap-x-5 gap-y-3 grid-cols-3">
        <div className=" bg-sky-500">01</div>
        <div className=" bg-sky-500">02</div>
        <div className=" bg-sky-500">03</div>
        <div className=" bg-sky-500">04</div>
        <div className=" bg-sky-500">05</div>
        <div className=" bg-sky-500">06</div>
      </div>
      <br />
      grid flow row
      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div class="col-span-2 bg-sky-500 w-[100px]">01</div>
        <div class="col-span-2 bg-sky-500 w-[100px]">02</div>
        <div class=" bg-sky-500 w-[100px]">03</div>
        <div class=" bg-sky-500 w-[100px]">04</div>
        <div class=" bg-sky-500 w-[100px]">05</div>
      </div>
      <br />
      15.padding
      <div className="pt-3 bg-sky-500">e</div>
      <div className="pr-4 bg-sky-500">e</div>
      <div className="pb-8 bg-sky-500">e</div>
      <div className="pl-8 bg-sky-500">e</div>
      <div className="py-2 bg-sky-500">e</div>
      <div className="px-3 bg-sky-500">e</div>
      <div className="p-[50px] bg-sky-500">e</div>
      <br />
      nyoba
      <div class="grid justify-items-stretch hover:justify-items-end">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>
      <br />
      17.borders
      <div className="rounded w-40 text-center border-2 border-rose-300">d</div>
      <div className="rounded-md w-40 text-center border-4 border-rose-300">d</div>
      <div className="rounded-lg w-40 text-center border-2 border-rose-300">d</div>
      <div className="rounded-full w-40 text-center border-8 border-rose-300">d</div>
      <div className="rounded-[100px] w-40 text-center border-[3px] border-rose-300">d</div>
      <br />
      18. Flex
      <div className="flex">
        <div className="flex-none w-14 h-14 bg-sky-500">h</div>
        <div className="flex-initial w-64 bg-sky-900">h</div>
        <div className="flex-auto w-32 bg-sky-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem aut mollitia, est cumque sint veritatis nam veniam maxime animi, voluptatum quae aliquid? Quidem hic deleniti perspiciatis veritatis vitae laboriosam.
        </div>
      </div>
      <br />
      Margin : 
      <div class="mt-6 bg-sky-200 w-16 h-16">mt-6</div>
      <div class="mr-4 bg-sky-300 w-16 h-16">mr-4</div>
      <div class="mb-8 bg-sky-400 w-16 h-16">mb-8</div>
      <div class="ml-2 bg-sky-500 w-16 h-16">ml-2</div>
      <br />
      19.crusor
      <br />
      <button type="button" className="crusor-pointer bg-rose-500 p-2 rounded-md">
        submit
      </button>
      <br />
      <br />
      <button type="button" className="crusor-Progress bg-indigo-500 p-2 rounded-md">
        saving
      </button>
      <br />
      <br />
      <button type="button" disabled className="crusor-notallowed bg-indigo-500 p-2 rounded-md">
        saving
      </button>
      <br />
      <br />
      20.shadow
      <br />
      <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2 transition delay-150 duration-300 ease-in-out">
        sukbrek
      </div>
      <br />
      <div className="bg-blue-500 shadow-lg shadow-blue-500/50 w-40 rounded-xl text-center py-2 transition delay-150 duration-300 ease-in-out">
        like
      </div>
      <br />
      <div className="bg-indigo-500 shadow-xl shadow-indigo-500/50 w-40 rounded-xl text-center py-2 transition delay-150 duration-300 ease-in-out">
        share
      </div>
      <br />
      21.display
      <br />
      <div>
        when
        <span className="inline bg-slate-800">
          display: inline - Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet animi sed repellendus consectetur perspiciatis accusamus quis corrupti et natus voluptatum, debitis hic aut? Deleniti voluptatum vel consectetur nulla harum.
        </span>
      </div>
      <br />
      <div>
        when control
        <span className="inline-block bg-slate-800">
          display: inline - Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet animi sed repellendus consectetur perspiciatis accusamus quis corrupti et natus voluptatum, debitis hic aut? Deleniti voluptatum vel consectetur nulla harum.
        </span>
      </div>
      <br />
      <div>
        lastly, using the property
        <span className="block bg-slate-500">
          display: block- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio illo numquam labore cumque animi obcaecati, minima ut blanditiis, laborum pariatur repellat? Distinctio assumenda animi, voluptatibus recusandae quibusdam placeat blanditiis!
        </span>
      </div>
      */}
      <div className="flex w-screen h-screen bg-black">
        <div className="m-6 ">
          <div className="flex justify-start gap-6 pl-[170px]">
          <div className="text-white font-extrabold text-xl animate-none hover:animate-pulse cursor-pointer">Haa? Store 😎</div>
          <div className="text-white cursor-pointer animate-none hover:animate-pulse">Home</div>
          <div className="text-white cursor-pointer animate-none hover:animate-pulse">Studio</div>
          <div className="text-white cursor-pointer animate-none hover:animate-pulse">Works</div>
          <div className="text-white cursor-pointer animate-none hover:animate-pulse">Contact</div>

            <div className="flex justify-end gap-5 pl-[600px]"> 
            <div className="text-white"><img src={search} alt="search" className="h-[35px] w-[35px] animate-none hover:animate-spin"/></div>
            <button className="rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-[35px] w-32 text-white">Buy Now !!</button>
            </div>
          </div>
        </div>
        
        <div className="bg-rose-100 absolute top-48 left-[195px] w-80 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-none hover:animate-pulse">
          <div className="text-sky-700 absolute top-[70px] left-[30px] text-4xl font-extrabold">Think. Make. Solve.
            <div className="text-pink-600 text-xl">— What We Do</div>
            <div className="text-slate-400 text-sm">we enjoy creating delighful, human centered digital experiences.</div>
            <button className="rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-[35px] w-32 text-sm">Learn More !!</button>
          </div>
        </div>

        <div className="h-[200px] w-[400px] absolute top-[265px] left-[900px] bg-slate-700 rounded-md motion-safe:animate-bounce">
          <p className="text-slate-400 text-sm text-center">Create By : orang ganteng sedunia | asal: kmu nnya?</p>
          <img src={logo} alt="Logo"/>
        </div>
      </div>

      <div className="flex w-screen h-screen bg-black">
        <div className=""><img src={box} alt="Logo" className=" absolute left-[180px] h-[320px] w-[320px] animate-bounce"/></div>
        <div className="text-white absolute left-[600px] pb-[100px] text-4xl font-extrabold">Think Outside the 
          <div>square space</div>
          <span className="text-pink-600 text-xl">— What We are</span>
          <div className="text-slate-400 text-sm">a creative group of designers and developers with a passion for
            <div>the arts</div>
          </div>
          <button className="rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-[35px] w-32 text-sm">See our Works</button>
        </div>
      </div>

      <div className="flex w-screen h-screen bg-black">
        <div className="absolute left-[800px] animate-bounce"><img src={gambar} alt="Logo" className="h-[500px] w-[500px]"/></div>
        <div className="absolute left-[200px] text-white text-6xl font-extrabold">
          <button onClick={() => gambarbaru(tablet)} className=" hover:text-purple-600 cursor-pointer">Web Design</button>
          <br />
          <br />
          <div>
            <button onClick={() => gambarbaru(hp)} className=" hover:text-purple-600 cursor-pointer">Development</button>
          </div>
          <br />
          <div>
            <button onClick={() => gambarbaru(box)} className=" hover:text-purple-600 cursor-pointer">Ilustration</button>
          </div>
          <br />
          <div>
            <button onClick={() => gambarbaru(pengasuh)} className=" hover:text-purple-600 cursor-pointer">Pengasuh Terbaik</button>
          </div>
          <br />
          <div>
            <button onClick={() => gambarbaru(pengasuh2)} className=" hover:text-purple-600 cursor-pointer">Pengasuh Terbaik</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;