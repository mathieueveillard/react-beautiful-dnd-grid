# react-beautiful-dnd-grid

🚨 Beware: this package is not production-ready. Feel free to file a PR. 🚨

## Installation

```
npm i -S react-beautiful-dnd-grid
```

## Demo

https://stackblitz.com/edit/react-beautiful-dnd-grid-demo

![Demo gif](./doc/demo.gif)

## Usage

```javascript
import React from "react";
import { ListManager } from "react-beautiful-dnd-grid";

const noop = function() {};

const list = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

const ListElement = props => <div>id: {props.item.id}</div>;

const Component = () => (
  <ListManager
    items={list}
    direction="horizontal"
    maxItems={3}
    render={item => <ListElement item={item} />}
    onDragEnd={noop}
  />
);
```
