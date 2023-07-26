import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { styled } from '../stiches.config'

interface ItemProps {
  text: string
  index: number
}

const StyledItem = styled('div', {
  backgroundColor: '#eee',
  borderRadius: 4,
  padding: '4px 8px',
  transition: 'background-color .8s ease-out',
  marginTop: 8,

  ':hover': {
    backgroundColor: '#fff',
    transition: 'background-color .1s ease-in'
  }
})

const Item: React.FC<ItemProps> = ({ text, index }) => {
  return (
    <Draggable draggableId={text} index={index}>
      {provided => (
        <StyledItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </StyledItem>
      )}
    </Draggable>
  )
}

export default Item
