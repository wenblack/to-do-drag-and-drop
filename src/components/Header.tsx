import {IoFilter, IoSearch} from 'react-icons/io5'
import { ChangeNameButton } from "./ChangeNameButton"
import {  useState } from 'react'


export function Header (){
  const[temporaryName,setTemporaryName] = useState('')
  const [newName, setNewName]= useState('Meu Kanban')  
  
  function getTemporaryName(e:any){
    setTemporaryName(e.target.value)
  }

  function saveName(){
    const name = temporaryName
    if(name != ''){
      setNewName(temporaryName)
    }
    else{
      alert("Você não digitou um nome para alterar")
    }
  }
  
    return(
        <header>
            <section className="flex justify-between  py-3 items-center ">
                <h1 className="flex gap-3 font-bold text-slate-700 text-5xl">
                  {newName}  
                  <ChangeNameButton 
                    changeText={getTemporaryName}
                    value={newName}
                    click={saveName}
                    submitForm={saveName}
                  />
                </h1>
                <img className="rounded-full" src="https://github.com/wenblack.png" width={64} height={64} alt="avatar" />
            </section>
        
            <form className="flex mt-8 items-center gap-4 text-3xl" >
                <button className="bg-[#7c3aed] hidden gap-4 items-center justify-center md:flex lg:flex text-white  hover:opacity-70 rounded-lg py-5 px-12">
                    <IoFilter  ></IoFilter>
                    Filtrar
                </button>
                <div className="flex text-3xl shadow-lg text-gray-700 w-full border gap-4 items-center  border-gray-300 p-5 rounded-lg">
                    <IoSearch /> 
                    <input 
                        type="text" 
                        placeholder="Busque por cards, assuntos ou responsáveis ..." 
                        className="outline-none w-full"
                        />
                    <button className="lg:hidden md:hidden" type="button"><IoFilter/></button>
                </div>
            </form>
        </header>
    )
}