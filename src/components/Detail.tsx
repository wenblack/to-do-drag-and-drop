import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tag } from "./Tag"

export interface cardProps{
    id:number
    title:string
    content:string,
    tagOne?:string
    tagTwo?:string
}

export function Detail ({id, content, title, tagOne,tagTwo }:cardProps){
    return(
            <Card className="w-full items-center border-none shadow-none justify-center md:p-4">
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
  
                <CardContent>
                    <p className="flex text-gray-800  text-lg ">
                        {content}
                    </p>
                </CardContent>
                
                <CardFooter className="flex gap-4  flex-row  justify-around">
                    {tagOne ===undefined ?<></>:<Tag value={tagOne}/>}
                    {tagTwo ===undefined ?<></>:<Tag value={tagTwo}/>}     
                </CardFooter>   
            </Card>
    )
}