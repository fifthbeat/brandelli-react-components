/**
 * A radical List component
 *
 * @version 0.0.1
 *
 * @author [Nicola Bertelloni](https://github.com/wanbinkimoon)
 * @author [Mattia Magi](https://github.com/megio)
 */
import * as React from "react";
import { Wrap } from "./styles";

export interface Props {
  children: object;
  test?: string;
}

class List extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <Wrap>{this.props.children}</Wrap>;
  }
}

export default List;
