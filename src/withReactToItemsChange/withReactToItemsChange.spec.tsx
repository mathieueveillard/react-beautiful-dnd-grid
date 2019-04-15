import React from "react";
import { Props, withReactToItemsChange } from "./withReactToItemsChange";
import { mount, ReactWrapper } from "enzyme";

describe("withReactToItemsChange", () => {
  it("Should react to any change in items propided as props", () => {
    // GIVEN
    const items = [
      {
        id: "id0",
        order: 0
      },
      {
        id: "id1",
        order: 1
      },
      {
        id: "id2",
        order: 2
      }
    ];
    const callMeWhenComponentDidMount = jest.fn();
    class Component extends React.Component<Props, {}> {
      componentDidMount() {
        callMeWhenComponentDidMount();
      }
      render() {
        return <div />;
      }
    }
    const props: Props = {
      items
    };
    const ComponentWithReactToItemsChange = withReactToItemsChange(Component);

    // WHEN
    const wrapper: ReactWrapper = mount(<ComponentWithReactToItemsChange {...props} />);
    items[1].order = -1;
    wrapper.setProps({ items });

    // THEN
    expect(callMeWhenComponentDidMount).toHaveBeenCalledTimes(2);
  });
});
