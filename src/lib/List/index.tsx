import * as React from "react";
import Item from "./Item";
import { Wrap } from "./styles";

export interface IProps {
  /** Data on which the list will iterate*/
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
}

export default class List extends React.Component<IProps, {}> {
  public static Item: typeof Item = Item;

  public renderDefalut = (content: any) =>
    content.map((d: any) => <li key={d.id}>{d.label}</li>);

  public render() {
    const { content, renderItem } = this.props;
    return (
      <Wrap {...this.props}>
        {renderItem ? (
          this.renderItem(content, renderItem)
        ) : (
          <ul>{this.renderDefalut(content)}</ul>
        )}
      </Wrap>
    );
  }

  private renderItem = (content: any, item: any) =>
    content.map((d: any) => item(d));
}
