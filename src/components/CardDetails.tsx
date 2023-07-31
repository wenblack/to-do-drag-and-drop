import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Detail } from "./Detail"


interface buttonProps {
  title:string
  id:number
  tagOne?: string
  tagTwo? : string
  content: string
}

export function CardDetails({title, content, id,tagOne,tagTwo}:buttonProps) {
  return (
    <Dialog >
      <DialogTrigger asChild className="flex sm:hidden h-full justify-center items-center">
        <Button variant="ghost">
           <h2 className="text-xl font-bold">
              {title}            
            </h2> 
        </Button>
      </DialogTrigger>
      <DialogContent  className=" bg-white text-xl">
        <div className="grid gap-4 py-4">
          <Detail id={id} content={content} title={title} tagOne={tagOne} tagTwo={tagTwo}/>
        </div>
      </DialogContent>
    </Dialog>
  )
}
