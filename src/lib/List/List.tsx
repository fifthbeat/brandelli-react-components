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
  /** hey teacher leave the  kids alone  */
  children: object;
  /** test description goes here */
  test?: string;
  /** test number 2 */
  provetta: object | number;
}

class List extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return <Wrap>{this.props.children}</Wrap>;
  }
}

export default List;
