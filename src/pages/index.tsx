import { Board } from "@/components/Board"
import { Header } from "@/components/Header"

export default function Home() {
   return(
   <div
      className={`flex min-h-screen  bg-[#7c3aed]`}
    >
      <main className='min-h-screen ml-0 md:ml-8 pt-16 items-center px-[5vw]  shadow-black shadow-sm mt-4 rounded-tl-[32px] bg-white w-full '>
       <Header></Header>
       <Board></Board>
      </main>
    </div>
   )
}