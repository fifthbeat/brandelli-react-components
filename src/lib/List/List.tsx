import * as React from "react";
import { Wrap } from "./styles";

export interface IProps {
  /** test description goes here */
  test: string;
  /** test number 2 */
  provetta?: object | number;
}

class List extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return <Wrap>{this.props.test}</Wrap>;
  }
}

export default List;
