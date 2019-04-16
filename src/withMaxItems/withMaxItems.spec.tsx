import React from "react";
import { Props, withMaxItems, WithMaxItemsProps, DragAndDropResult } from "./withMaxItems";
import { mount, ReactWrapper } from "enzyme";

describe("withMaxItems", () => {
  it("Should split items in chunks according to the maxItems props", () => {
    // GIVEN
    const items = [
      {
        id: "id0"
      },
      {
        id: "id1"
      },
      {
        id: "id2"
      }
    ];
    const dragAndDropResult: DragAndDropResult = {
      source: {
        id: "id1",
        index: 0
      },
      destination: {
        id: "id0",
        index: 0
      }
    };
    const Component: React.StatelessComponent<Props> = ({ onDragEnd }: Props) => (
      <div onClick={() => onDragEnd(dragAndDropResult)} />
    );
    const createId = jest
      .fn()
      .mockReturnValueOnce("id0")
      .mockReturnValueOnce("id1");
    const props: WithMaxItemsProps = {
      items,
      maxItems: 2,
      onDragEnd: jest.fn()
    };
    const ComponentWithMaxItems = withMaxItems(Component, createId);

    // WHEN
    const wrapper: ReactWrapper = mount(<ComponentWithMaxItems {...props} />);
    wrapper.simulate("click");

    // THEN
    expect(props.onDragEnd).toHaveBeenCalledWith(2, 0);
  });
});
