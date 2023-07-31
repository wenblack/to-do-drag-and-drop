import  { useState } from 'react'
import {Column} from '@/components/Column'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { resetServerContext } from 'react-beautiful-dnd';

export function Board () {
  const initialColumns = {
    todo: {
      id: 'todo',
      list: [
        {
          title:"#boraCodar um Kanban 🧑🏾‍💻",
          content:"Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          tagOne:"rocketseat",
          tagTwo:"desafio"
        },
        {
          title:"Manter a ofensiva 🔥",
          content:" Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
          tagOne:"rocketseat",
          tagTwo:"desafio"
        },
        {
          title:"Conferir o novo desafio 🚀",
          content:"Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
          tagOne:"rocketseat",
        },

          ]
    },
    doing: {
      id: 'doing',
      list: []
    },
    done: {
      id: 'done',
      list: []
    }
  }
  const [columns, setColumns] = useState(initialColumns)
  
  const onDragEnd = ({ source, destination }: DropResult) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    // Set start and end variables
    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index])

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      }

      // Update the state
      setColumns(state => ({ ...state, [newCol.id]: newCol }))
      return null
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      )

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      }

      // Update the state
      setColumns(state => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }))
      return null
    }
  }
  
  resetServerContext();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='grid  mt-16 grid-rows-1  grid-cols-3   mb-16" bg-transparent'>
        {Object.values(columns).map(col => (
          <Column id={col.id} list={col.list} tableName={col.id}  key={col.id} />
        ))}
      </div>
    </DragDropContext>
  )
}
