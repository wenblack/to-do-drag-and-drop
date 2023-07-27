import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEventHandler, MouseEventHandler } from "react"
import editIcon from "@/assets/pencil.svg"
import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"


interface buttonProps {
  click:MouseEventHandler
  value:string
  changeText:FormEventHandler
  submitForm:FormEventHandler
}

export function ChangeNameButton({click,submitForm, value, changeText}:buttonProps) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Image src={editIcon} alt="" />
        </Button>
      </DialogTrigger>
      <DialogContent  className="sm:max-w-[425px] bg-white text-xl">
        <DialogHeader>
          <DialogTitle>Alterar nome</DialogTitle>
          <DialogDescription>
            Digite um novo nome e clique em salvar para aplicar. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Novo nome
            </Label>
            <Input onSubmit={submitForm} required onChange={changeText} id="name" placeholder={value} className="col-span-3" />
          </div>
        </div>
        <DialogClose>
          <Button 
            form="form" 
            onClick={click}
            className="bg-purple-800" 
            type="submit"
          >
            Salvar
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
