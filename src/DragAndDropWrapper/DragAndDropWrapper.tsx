import React, { ReactElement } from "react";
import { DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult } from "react-beautiful-dnd";
import { ListManagerItem } from "./ListManagerItem";
import { Item } from "./Item";
import "./DragAndDropWrapper.css";

interface Location {
  id: string;
  index: number;
}

export interface DragAndDropResult {
  source: Location;
  destination: Location;
}

export interface Chunk {
  id: string;
  items: Item[];
}

export interface Props {
  chunks: Chunk[];
  direction: "horizontal" | "vertical";
  render(item: Item): ReactElement<{}>;
  onDragEnd(result: DragAndDropResult): void;
}

export const DragAndDropWrapper: React.StatelessComponent<Props> = ({
  onDragEnd,
  chunks,
  direction,
  render
}: Props) => {
  return (
    <DragDropContext onDragEnd={mapAndInvoke(onDragEnd)}>
      {chunks.map(({ id: droppableId, items }: Chunk) => (
        <Droppable key={droppableId} droppableId={droppableId} direction={direction}>
          {(provided: DroppableProvided, _: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} className={direction.toString()} {...provided.droppableProps}>
              {items.map((item: Item, index: number) => (
                <ListManagerItem key={item.id} item={item} index={index} render={render} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

function mapAndInvoke(onDragEnd: (result: DragAndDropResult) => void) {
  return function({ source, destination }: DropResult): void {
    if (destination !== undefined && destination !== null) {
      const result: DragAndDropResult = {
        source: {
          id: source.droppableId,
          index: source.index
        },
        destination: {
          id: destination.droppableId,
          index: destination.index
        }
      };
      onDragEnd(result);
    }
  };
}
