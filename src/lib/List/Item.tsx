import * as React from "react";

class Item extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    const { content } = this.props;
    return <li key={content.id}>{content.label}</li>;
  }
}

export default Item;
