import { DragAndDropWrapper } from "./DragAndDropWrapper/DragAndDropWrapper";
import { withMaxItems } from "./withMaxItems/withMaxItems";
import { withReactToItemsChange } from "./withReactToItemsChange/withReactToItemsChange";
import uuid from "uuid/v4";

const ComponentWithMaxItems = withMaxItems(DragAndDropWrapper, uuid);
const ComponentWithReactToItemsChange = withReactToItemsChange(ComponentWithMaxItems);

export const ListManager = ComponentWithReactToItemsChange;
