import React from "react";
import hash from "object-hash";

export interface Props {
  items: any[];
}

export const withReactToItemsChange = <P extends Props>(Component: React.ComponentType<P>): React.ComponentType<P> => (
  props: P
) => <Component key={hash(props.items)} {...props} />;
