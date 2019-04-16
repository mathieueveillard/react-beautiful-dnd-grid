import React from "react";
import { shallow, mount, ReactWrapper } from "enzyme";
import { ListManager } from "./ListManager";
import { ListManagerItem } from "./DragAndDropWrapper/ListManagerItem";

describe("<ListManager />", () => {
  const item0 = {
    id: "id0"
  };
  const item1 = {
    id: "id1"
  };
  const item2 = {
    id: "id2"
  };
  const item3 = {
    id: "id3"
  };
  const items = [item0, item1, item2];

  const render = () => <div className="render-props-class" />;

  const onDragEnd = jest.fn();

  it("should render without crashing", () => {
    shallow(<ListManager items={items} direction="vertical" maxItems={3} render={render} onDragEnd={onDragEnd} />);
  });

  it("should render a list of <ListManagerItem /> and react to props", () => {
    const wrapper: ReactWrapper = mount(
      <ListManager items={items} direction="vertical" maxItems={3} render={render} onDragEnd={onDragEnd} />
    );
    expect(wrapper.findWhere(n => n.type() === ListManagerItem).length).toEqual(items.length);
    wrapper.setProps({ items: [...items, item3] });
    expect(wrapper.findWhere(n => n.type() === ListManagerItem).length).toEqual(items.length + 1);
  });

  it("should render the render props", () => {
    const wrapper: ReactWrapper = mount(
      <ListManager items={items} direction="vertical" maxItems={3} render={render} onDragEnd={onDragEnd} />
    );
    expect(wrapper.exists(".render-props-class")).toEqual(true);
  });
});
