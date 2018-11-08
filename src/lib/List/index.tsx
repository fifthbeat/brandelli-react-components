import * as React from "react";
import Item from "./Item";
import { List } from "./styles";

export interface ListProps {
  /** Data on which the list will iterate. Default content should be: `[{id: string, label: string}]` */
  content: any;
  /** Add a border to the list  */
  border?: boolean;
  /** Define list items direction */
  direction?: "row" | "column";
  /** Define size of the list item */
  size?: "small" | "large";
  /** Define the item's content position */
  contentPosition?: "end" | "center";
  /** Define height of the list */
  listHeight?: string;
  /** If a defined list item is passed will be used to reder the data */
  renderItem?: any;
  /** If this props is true, list wrap positioning is absolute */
  absolute?: boolean;
}

export default class extends React.Component<ListProps, {}> {
  public static Item: typeof Item = Item;

  public renderDefalut = (content: any) =>
    content.map((d: any) => <li key={d.id}>{d.label}</li>);

  public render() {
    const { content, renderItem } = this.props;
    return (
      <List {...this.props}>
        <ul>
          {renderItem
            ? this.renderItem(content, renderItem)
            : this.renderDefalut(content)}
        </ul>
      </List>
    );
  }

  private renderItem = (content: any, item: any) =>
    content.map((d: any) => item(d));
}
