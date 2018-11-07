import * as React from "react";
import { Wrap } from "./styles";

export interface IProps {
  /** Data on which the list will iterate*/
  content: [{ id: string; label: string }];
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
  renderItem?: React.ReactElement<any>;
}

class List extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public renderDefalut = (content: [{ id: string; label: string }]) =>
    content.map((d: any) => <li key={d.id}>{d.label}</li>);

  public render() {
    const { content, renderItem } = this.props;
    return (
      <Wrap {...this.props}>
        {renderItem ? renderItem : <ul>{this.renderDefalut(content)}</ul>}
      </Wrap>
    );
  }
}

export default List;
