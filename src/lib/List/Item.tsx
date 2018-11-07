import * as React from "react";
import { Item } from "./styles";
export default class extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    const { content } = this.props;
    return (
      <Item key={content.id}>
        <span>{content.label}</span>
      </Item>
    );
  }
}
