interface tagProps{
    value?: string
}

export function Tag({value}:tagProps){
    return(
        <span 
            className="text-[#7c3aed] bg-[#E2D6FF] font-bold px-4 py-1 rounded-lg"
         >
            {value}
        </span>
    )
}