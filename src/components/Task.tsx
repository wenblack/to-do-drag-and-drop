import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tag } from "./Tag"
import { Draggable } from "react-beautiful-dnd"

export interface cardProps{
    id:number
    title:string
    content:string,
    tagOne?:string
    tagTwo?:string
}

export function Task ({id, content, title, tagOne,tagTwo }:cardProps){
    return(
        <Draggable draggableId={content} index={id}>
            {provided => (
            <Card className="w-full p-4 max-w-[300px] shadow-xl"    ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
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
            )}
        </Draggable>
    )
}