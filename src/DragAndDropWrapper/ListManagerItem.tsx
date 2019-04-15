import React, { ReactElement } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { Item } from "./Item";

export interface ListManagerItemProps {
  item: Item;
  index: number;
  render(item: Item): ReactElement<{}>;
}

export const ListManagerItem = (props: ListManagerItemProps) => (
  <Draggable draggableId={props.item.id} index={props.index}>
    {(provided: DraggableProvided, _: DraggableStateSnapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {props.render(props.item)}
      </div>
    )}
  </Draggable>
);
