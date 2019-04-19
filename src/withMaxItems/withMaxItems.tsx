import React from "react";
import { Omit } from "../util/omit";
import { splitItems, computeOriginalIndex, computeOriginalIndexAfterDrop } from "./compute";

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
  items: any[];
}

export interface Props {
  chunks: Chunk[];
  onDragEnd(result: DragAndDropResult): void;
}

export interface WithMaxItemsProps {
  items: any[];
  maxItems?: number;
  onDragEnd(sourceIndex: number, destinationIndex: number): void;
}

interface WithMaxItemsState {
  maxItems: number;
  items: any[];
  chunks: Chunk[];
}

export const withMaxItems = <T, P extends Props>(
  Component: React.ComponentType<P>,
  createId: () => string
): React.ComponentType<Omit<P, Props> & WithMaxItemsProps> => {
  return class ComponentWithMaxItems extends React.Component<Omit<P, Props> & WithMaxItemsProps, WithMaxItemsState> {
    constructor(props: Omit<P, Props> & WithMaxItemsProps) {
      super(props);
      const maxItems: number = props.maxItems && props.maxItems > 0 ? props.maxItems : props.items.length;
      this.state = {
        maxItems,
        items: props.items,
        chunks: splitItems(maxItems, props.items, createId)
      };
    }

    private findChunkIndex = (id: string): number => {
      return this.state.chunks.findIndex((chunk: Chunk) => chunk.id === id);
    };

    private onDragEnd = ({ source, destination }: DragAndDropResult): void => {
      if (destination) {
        const { index: indexInSourceChunk, id: sourceChunkId } = source;
        const { index: indexInDestinationChunk, id: destinationChunkId } = destination;
        const sourceChunkIndex: number = this.findChunkIndex(sourceChunkId);
        const destinationChunkIndex: number = this.findChunkIndex(destinationChunkId);
        const sourceIndex: number = computeOriginalIndex(this.state.maxItems, sourceChunkIndex, indexInSourceChunk);
        const destinationIndex: number = computeOriginalIndexAfterDrop(
          this.state.maxItems,
          sourceChunkIndex,
          destinationChunkIndex,
          indexInDestinationChunk
        );
        this.props.onDragEnd(sourceIndex, destinationIndex);
      }
    };

    public render = () => {
      const { items, maxItems, onDragEnd, ...rest } = this.props;
      return <Component chunks={this.state.chunks} onDragEnd={this.onDragEnd} {...(rest as unknown) as P} />;
    };
  };
};
