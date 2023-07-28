import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { styled } from '../stiches.config'
import { Task } from './Task'

interface ColumnProps {
  col: {
    id: string
    list: string[]
  }
}

const StyledColumn = styled('div', {
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 8,

  h2: {
    margin: 0,
    padding: '0 16px'
  }
})

const StyledList = styled('ul', {
  backgroundColor: '#ddd',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  marginTop: 8
})

export function Column ({col:{id,list}}:ColumnProps) {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <StyledColumn>
          <h2>{id}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((text, index) => (
              <Task id={index} tagOne='rocketseat' tagTwo='desafio' key={index} content={text} title='New task'  />
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  )
}

