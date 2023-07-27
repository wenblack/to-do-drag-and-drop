import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tag } from "./Tag"

interface cardProps{
    title:string
    content:string,
    tagOne?:string
    tagTwo?:string
}

export function Task ({content, title, tagOne,tagTwo}:cardProps){
    return(
        <Card className="w-full max-w-[300px] shadow-xl">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
  
            <CardContent>
                <p className="text-gray-800 text-lg">
                    {content}
                </p>
            </CardContent>
            
            <CardFooter className="flex gap-4  flex-col md:flex-row justify-around">
                {tagOne ===undefined ?<></>:<Tag value={tagOne}/>}
                {tagTwo ===undefined ?<></>:<Tag value={tagTwo}/>}
              
            </CardFooter>   
        
        </Card>

    )
}