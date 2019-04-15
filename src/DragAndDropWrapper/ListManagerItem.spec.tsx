import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { ListManagerItem } from "./ListManagerItem";
import { Draggable } from "react-beautiful-dnd";
import { Item } from "./Item";

describe("<ListManagerItem />", () => {
  const item: Item = {
    id: "id"
  };
  const index: number = 0;
  const render = (_: Item) => <div />;

  it("should render without crashing", () => {
    shallow(<ListManagerItem item={item} index={index} render={render} />);
  });

  it("should render a <Draggable /> element", () => {
    const wrapper: ShallowWrapper = shallow(<ListManagerItem item={item} index={index} render={render} />);
    expect(wrapper.findWhere(n => n.type() === Draggable).length).toEqual(1);
  });
});
