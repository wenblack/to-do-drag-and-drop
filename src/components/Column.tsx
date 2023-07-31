import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Task } from './Task'

interface ColumnProps {
    id: string
    list:taskProps[]
    tableName:string
}

interface taskProps{
   title:string,
  content:string,
  tagOne?:string,
  tagTwo?:string
  }

export function Column ({id,list, tableName}:ColumnProps) {
  return (
    <Droppable droppableId={id}>
      {provided => (
          <div className=" select-none flex flex-col lg:m-4 md:m-4 sm:m-2  ">
          <h2 className="font-bold text-3xl mb-8">{tableName}</h2>
          <div className=" flex flex-col  gap-6"{...provided.droppableProps} ref={provided.innerRef}> 
            {list.map((text, index) => (
              <Task id={index} tagOne={text.tagOne} tagTwo={text.tagTwo}  key={index} content={text.content} title={text.title}  />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

